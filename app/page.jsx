import Header from '@/components/Header'
import { BsRocketTakeoff } from "react-icons/bs";
import Image from "next/image";
import "@/app/page.module.css"

/*#FFFF00*/

export default function Home() {
  return (
    <>
      <Header/>
      <div className='bg-one-500'>
        <div className="flex justify-around items-center ml-10 h-96 text-white text-4xl">
          <div>
            <div className="flex gap-6">
              <h2 className="text-5xl">Lleva tu <span className="text-yellow-300">agenda</span> al siguiente nivel</h2>
              <BsRocketTakeoff className="invisible text-yellow-300 md:text-6xl md:visible"/>
            </div>
            <div className="flex flex-col items-start gap-2 mt-7">
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

        <div className="flex flex-col items-center bg-slate-300 text-black text-2xl pt-4 font-bold">
          <div className='text-4xl'>
            <h2>Beneficios</h2>
          </div>
          <div className='mt-12'>
            <div className='flex justify-center gap-8 w-full'>
              <Image src="/paginaWeb.jpg" width={250} height={250} className='rounded-lg'/>
              <div className='flex flex-col items-center justify-center gap-3 w-1/3'>
                <h3 className='text-two-500 font-bold text-3xl'>Presencia online</h3>
                <h4 className='text-center text-xl'>Ayeendo te permitirá crear tu propio sitio web para que tus pacientes puedan agendar contigo de forma automática.</h4>
              </div>
            </div>
            <div className='flex justify-center gap-8 w-full mt-4'>
              <div className='flex flex-col items-center justify-center gap-3 w-1/3'>
                <h3 className='text-two-500 font-bold text-3xl'>No más papel</h3>
                <h4 className='text-center text-xl'>Con ayeendo llevarás el control de tus citas de forma digital, mejorando la organización y evitando que tus pacientes esperan más de lo debido.</h4>
              </div>
              <Image src="/organizacion.jpg" width={250} height={250} className='rounded-lg'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
