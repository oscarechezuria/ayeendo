"use client"
import React, {useEffect, useRef, useState} from 'react'
import { setUserProfilePhoto, updateUser, getProfilePhotoUrl} from '@/firebase/firebase'
import { useContextGlobal } from '@/context/GlobalContext'
import DataFormUser from '@/components/profile/DataFormUser'
import DataSocialMedia from '@/components/profile/DataSocialMedia'


export default function Profile() {

  const {infoUser, setInfoUser} = useContextGlobal()
  const [profileUrl, setProfileUrl] = useState(null)
  const [statePage, setStatePage] = useState("1")
  
  const fileRef = useRef(null)
  


  useEffect(() =>{
    async function data(infoUser) {
      const url = await getProfilePhotoUrl(infoUser.profilePicture);
      setProfileUrl(url)
    }
    data(infoUser)
  },[infoUser])



  const handleOpenFilePicker = () => {
    const res = fileRef.current.click()
  }
  
  const handleChangeFile = (e) => {
    const files = e.target.files
    const fileReader = new FileReader()

    if (fileReader && files && files.length > 0) {
      
      fileReader.readAsArrayBuffer(files[0]);

      fileReader.onload = async function() {

        const imageData = fileReader.result;
        const res = await setUserProfilePhoto(infoUser.uid, imageData)

        if (res) {
          const tmpUser = { ...infoUser };
          tmpUser.profilePicture = res.metadata.fullPath;
          await updateUser(tmpUser);
          setInfoUser({ ...tmpUser });
          
          const url = await getProfilePhotoUrl(infoUser.profilePicture);
          setProfileUrl(url);
      }
      }
    }
  }
  


  return(
  <>

    <div className='flex flex-col items-center justify-center mt-6'>
      <div>
        <div>
          <div className='mt-2'>
            <img src={profileUrl} alt="" className='m-auto rounded-md w-28 h-85'/>
          </div>
          <div className='text-center bg-one-500 rounded-lg p-1 text-white mt-2'>
            <button onClick={handleOpenFilePicker}>Editar</button>
            <input type="file" ref={fileRef} onChange={handleChangeFile} className='hidden' />
          </div>
      </div>
      </div>
    </div>
    <div className='flex justify-center mb-10 mt-8'>
        <div className={`mr-12 p-2 hover:text-two-500 hover:border-two-500 border-b-4 ${statePage === "1" ? "text-two-500 border-two-500 border-b-4" : ""}`} onClick={() => setStatePage("1")}>
          <button >General</button>
        </div>
        <div className={`p-2 hover:text-two-500 hover:border-two-500 border-b-4 ${statePage === "2" ? "text-two-500 border-two-500 border-b-4" : ""}`} onClick={() => setStatePage("2")}>
          <button>Redes sociales</button>
        </div>
    </div>

    {
      statePage == "1"
      ?
      <div>
        <DataFormUser infoUser={infoUser}/>
      </div>
      :
      <div>
        <DataSocialMedia infoUser={infoUser}/>
      </div>
    }
    
  </>
)
}
/*
          firstName: Yup.string().required("El nombre es requerido"),
          lastName: Yup.string().required("El apellido es requerido"),
          service: Yup.string(),
          professionalDescription: Yup.string(),
          telephone: Yup.string().max(10, "Solo son maximo 10 numeros").matches(/^([0-9])*$/, "Este campo solo permite números"),
          gender: Yup.string(),
          city: Yup.string(),
          town: Yup.string(),
          address: Yup.string()
*/