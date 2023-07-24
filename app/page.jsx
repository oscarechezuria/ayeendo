import Header from '@/components/Header'
import { BsRocketTakeoff } from "react-icons/bs";
import { FaLink, FaCalendarCheck, FaEnvelopeOpenText, FaListUl } from "react-icons/fa6";
import Image from "next/image";
import "@/app/page.module.css"

/*#FFFF00*/

export default function Home() {
  return (
    <>
      <Header/>
      <div className='bg-one-500'>

        <div className="flex justify-around items-center ml-10 h-120 text-white text-4xl">
          <div>
            <div className="flex gap-6">
              <h2 className="text-5xl">Lleva tu <span className="text-yellow-300">consultorio</span> al siguiente nivel</h2>
              <BsRocketTakeoff className="invisible text-yellow-300 md:text-6xl md:visible"/>
            </div>
            <h2 className='text-4xl mt-3'>¡No más papeles!</h2>
            <div className="flex flex-col items-start gap-2 mt-12">
              <h2 className="text-base text-white">Registrate y haz volar tu agenda con nosotros</h2>
              <div>
                <button className="block bg-two-500 text-white font-normal text-lg p-3 rounded-lg">Registrarme Gratis</button>
              </div>
            </div>
          </div>
          <div className=" hidden sm:block">
            <Image src="/frontPrincipal.png" width={500} height={600} className="animationFront"/>
          </div>
        </div>

        <div className="flex flex-col items-center text-center bg-white text-black text-2xl pt-4 font-bold">
            <div className='text-4xl mt-4'>
              <h2>Brinda una mejor experiencia con nosotros</h2>
            </div>
            <div className='mt-12'>
            <div className='flex flex-col justify-center items-center w-full mb-6 sm:flex-row sm:justify-center sm:gap-8'>
              <Image src="/organizacion.jpg" width={250} height={250} className='rounded-lg'/>
              <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 mb-8 sm:w-1/3 sm:mt-0 sm:mb-0'>
                <h3 className='text-black font-bold text-2xl'>Presencia online</h3>
                <h4 className='text-one-500 text-center text-lg'>Ayeendo te permitirá crear tu propio sitio web para que tus pacientes puedan agendar contigo de forma automática.</h4>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full mb-6 sm:flex-row sm:justify-center sm:gap-8'>
              <Image src="/organizacion.jpg" width={250} height={250} className='rounded-lg'/>
              <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 mb-8 sm:w-1/3 sm:mt-0 sm:mb-0'>
                <h3 className='text-black font-bold text-2xl'>¡No más papel!</h3>
                <h4 className='text-one-500 text-center text-lg'>Con ayeendo llevarás el control de tus citas de forma digital, mejorando la organización y evitando que tus pacientes esperen más de lo debido.</h4>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full mb-6 sm:flex-row sm:justify-center sm:gap-8'>
              <Image src="/organizacion.jpg" width={250} height={250} className='rounded-lg'/>
              <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 mb-8 sm:w-1/3 sm:mt-0 sm:mb-0'>
                <h3 className='text-black font-bold text-2xl'>Envio de correos</h3>
                <h4 className='text-one-500 text-center text-lg'>Una vez que tus pacientes agenden contigo o usted sea quien cree la cita, recibirán un correo de confirmación de la misma.</h4>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full mb-10 sm:flex-row sm:justify-center sm:gap-8'>
              <Image src="/organizacion.jpg" width={250} height={250} className='rounded-lg'/>
              <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 mb-8 sm:w-1/3 sm:mt-0 sm:mb-0'>
                <h3 className='text-black font-bold text-2xl'>Recordatorio por whatsapp</h3>
                <h4 className='text-one-500 text-center text-lg'>1 día antes de la cita tus pacientes recibirán un recordatorio por whatsapp, así podrás disminuir el ausentismo en tu consultorio.</h4>
              </div>  
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-evenly mt-8 mb-8 h-125 sm:h-115">
          <div className='mb-4 text-center'>
            <h2 className='text-yellow-300 text-4xl font-semibold'>Haz visible tu agenda con AYEENDO  </h2>
          </div>
          <div class="flex flex-col gap-3 sm:grid sm:grid-cols-4 sm:gap-3 px-4">
            <div className='flex flex-col justify-center items-center bg-white p-4 rounded-xl'>
              <h2 className='mb-4 font-bold text-center'><span className='p-2 rounded-full bg-yellow-300 mr-3'>1</span>Crea tus servicios y horarios</h2>
              <FaListUl className='text-8xl text-one-500'/>
            </div>
            <div className='flex flex-col justify-center items-center bg-white p-4 rounded-xl'>
              <h2 className='mb-4 font-bold text-center'><span className='p-2 rounded-full bg-yellow-300 mr-3'>2</span>Comparte tu link</h2>
              <FaLink className='text-8xl text-one-500'/>
            </div>
            <div className='flex flex-col justify-center items-center bg-white p-4 rounded-xl'>
              <h2 className='mb-4 font-bold text-center'><span className='p-2 rounded-full bg-yellow-300 mr-3'>3</span>Tus pacientes podrán agendar</h2>
              <FaCalendarCheck className='text-8xl text-one-500'/>
            </div>
            <div className='flex flex-col justify-center items-center bg-white p-4 mb-8 rounded-xl sm:mb-0'>
              <h2 className='mb-4 font-bold text-center'><span className='p-2 rounded-full bg-yellow-300 mr-3'>4</span>Confirmación de cita </h2>
              <FaEnvelopeOpenText className='text-8xl text-one-500'/>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
