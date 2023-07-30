"use client"
import Header from '@/components/Header'
import { FaLink, FaCalendarCheck, FaEnvelopeOpenText, FaListUl, FaLaptop, FaRegFileExcel, FaWhatsapp, FaRegAddressBook, FaRegCalendarCheck, FaCheck } from "react-icons/fa6";
import { FiMail } from "react-icons/fi"
import Image from "next/image";
import "@/app/page.module.css"
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation'

/*#FFFF00*/

//<BsRocketTakeoff className="animationFront invisible text-yellow-300 md:text-9xl md:visible"/>
export default function Home() {

  const router = useRouter()

  return (
    <>
      <Header/>
      <div className='bg-one-500'>

        <div className="flex justify-start gap-12 items-center ml-4 h-120 p-4 text-white text-4xl sm:ml-28">
          <div>
            <div className="flex">
              <h2 className="text-5xl">Lleva tu <span className="text-yellow-300">consultorio</span> al siguiente nivel</h2>
            </div>
            <h2 className='text-4xl mt-3'>¡No más papeles!</h2>
            <div className="flex flex-col items-start gap-2 mt-12">
              <h2 className="text-base text-white">Registrate y haz volar tu agenda con nosotros</h2>
              <div>
                <button onClick={() => router.push("/signup")} className="block bg-two-500 text-white font-normal text-lg p-3 rounded-lg">Registrarme Gratis</button>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-auto p-8">
            <Image src="/principal.svg" alt='Ayeendo' width={600} height={300} className='animationFront rounded-full border-4 border-yellow-300'/>
          </div>
        </div>

        <div className="flex flex-col items-center text-center bg-white text-black text-2xl pt-4 p-6 font-bold">
            <div className='text-4xl mt-4'>
              <h2>Brinda una mejor experiencia con nosotros</h2>
            </div>
            <div className='flex flex-col gap-3 mt-12 w-3/4 lg:grid lg:grid-cols-2 lg:gap-6'>
              <div className='flex flex-col justify-center items-center w-full mb-6 sm:flex-row sm:justify-center sm:gap-8'>
                <div className='shadow-xl p-4 rounded-xl'>
                  <FaLaptop className='text-8xl text-one-500'/>
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 sm:w-2/3 sm:mt-0'>
                  <h3 className='text-gray-900 font-extrabold text-xl'>Presencia online</h3>
                  <h4 className='text-gray-600 text-center text-base'>Ayeendo te permitirá crear tu propio sitio web de servicios para que tus pacientes puedan agendar contigo de forma automática.</h4>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center w-full mb-6 sm:flex-row sm:justify-center sm:gap-8'>
                <div className='shadow-xl p-4 rounded-xl'>
                  <FaRegFileExcel className='text-8xl text-one-500'/>
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 sm:w-2/3 sm:mt-0'>
                  <h3 className='text-gray-900 font-extrabold text-xl'>¡No más papeles!</h3>
                  <h4 className='text-gray-600 text-center text-base'>Con ayeendo llevarás el control de tus citas de forma digital, mejorando la organización y evitando que tus pacientes esperen más de lo debido.</h4>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center w-full mb-6 sm:flex-row sm:justify-center sm:gap-8'>
                <div className='shadow-xl p-4 rounded-xl'>
                  <FiMail className='text-8xl text-one-500'/>
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 sm:w-2/3 sm:mt-0'>
                  <h3 className='text-gray-900 font-extrabold text-xl'>Envio de correos</h3>
                  <h4 className='text-gray-600 text-center text-base'>Una vez que tus pacientes agenden contigo o usted sea quien cree la cita, recibirán un correo de confirmación de la misma.</h4>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center w-full mb-6 sm:flex-row sm:justify-center sm:gap-8'>
                <div className='shadow-xl p-4 rounded-xl'>
                  <FaWhatsapp className='text-8xl text-one-500'/>
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 sm:w-2/3 sm:mt-0'>
                  <h3 className='text-gray-900 font-extrabold text-xl'>Recordatorio por whatsapp</h3>
                  <h4 className='text-gray-600 text-center text-base'>1 día antes de la cita tus pacientes recibirán un recordatorio por whatsapp, así podrás disminuir el ausentismo en tu consultorio.</h4>
                </div>  
              </div>
              <div className='flex flex-col justify-center items-center w-full mb-6 sm:flex-row sm:justify-center sm:gap-8'>
                <div className='shadow-xl p-4 rounded-xl'>
                  <FaRegAddressBook className='text-8xl text-one-500'/>
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 sm:w-2/3 sm:mt-0'>
                  <h3 className='text-gray-900 font-extrabold text-xl'>Gestiona tus servicios</h3>
                  <h4 className='text-gray-600 text-center text-base'>Podrás gestionar tus servicios y sus precios.</h4>
                </div>  
              </div>
              <div className='flex flex-col justify-center items-center w-full mb-8 sm:flex-row sm:justify-center sm:gap-8'>
                <div className='shadow-xl p-4 rounded-xl'>
                  <FaRegCalendarCheck className='text-8xl text-one-500'/>
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-3 mt-4 sm:w-2/3 sm:mt-0'>
                  <h3 className='text-gray-900 font-extrabold text-xl'>Calendario online</h3>
                  <h4 className='text-gray-600 text-center text-base'>Dispondrás de un calendario online, tus clientes podrán ver tu disponibilidad y agendar sus citas.</h4>
                </div>  
              </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-evenly h-130 md:h-115">
          <div className='mb-4 text-center p-4'>
            <h2 className='text-yellow-300 text-4xl font-semibold'>Haz visible tu agenda con AYEENDO  </h2>
          </div>
          <div className="flex flex-col gap-3 md:grid md:grid-cols-4 md:gap-3 px-4">
            <div className='flex flex-col justify-center items-start bg-white p-4 pb-8 rounded-xl'>
              <div className='flex gap-2'>
                <div>
                  <span className='p-2 rounded-xl bg-yellow-300 w-10 text-center'>1</span>
                </div>
                <h2 className='flex justify-center items-center font-bold'>Crea tus servicios y horarios</h2>
              </div>
              <FaListUl className='text-8xl text-one-500 m-auto mt-4'/>
            </div>
            <div className='flex flex-col justify-center items-start bg-white p-4 pb-8 rounded-xl'>
              <div className='flex gap-2'>
                <div>
                  <span className='p-2 rounded-xl bg-yellow-300 w-10 text-center'>2</span>
                </div>
                <h2 className='flex justify-center items-center font-bold'>Comparte tu link</h2>
              </div>
              <FaLink className='text-8xl text-one-500 m-auto mt-4'/>
            </div>
            <div className='flex flex-col justify-center items-start bg-white p-4 pb-8 rounded-xl'>
              <div className='flex gap-2'>
                <div>
                  <span className='p-2 rounded-xl bg-yellow-300 w-10 text-center'>3</span>
                </div>
                <h2 className='flex justify-center items-center font-bold'>Tus pacientes podrán agendar</h2>
              </div>
              <FaCalendarCheck className='text-8xl text-one-500 m-auto mt-4'/>
            </div>
            <div className='flex flex-col justify-center items-start bg-white p-4 pb-8 rounded-xl'>
              <div className='flex gap-2'>
                <div>
                  <span className='p-2 rounded-xl bg-yellow-300 w-10 text-center'>4</span>
                </div>
                <h2 className='flex justify-center items-center font-bold'>Envío confirmación de cita </h2>
              </div>
              <FaEnvelopeOpenText className='text-8xl text-one-500 m-auto mt-4'/>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center bg-white text-black text-2xl pt-4 p-6 font-bold">
            <div className='text-4xl mt-4'>
              <h2>Precio</h2>
            </div>
            <div className='mt-10'>
              <div className='flex flex-col gap-6 sm:flex md:flex-row'>
                <div className='flex flex-col border shadow-xl p-10 rounded-xl mb-6'>
                  <div className='w-72'>
                    <h2 className='text-start font-bold text-two-500'>Plan Mensual</h2>
                    <div className='flex '>
                      <h2 className='text-start font-bold text-5xl mt-4'>7.99$</h2>
                      <span className='text-xl font-bold mt-9 ml-2'>/mes</span>
                    </div>
                    <p className='text-start font-bold text-sm mt-3'>Incluye todo este paquete más soporte y todas las futuras actualizaciones.</p>
                  </div>
                  <div className='mt-8'>
                    <ul className='flex flex-col gap-4'>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Página web</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Calendario online</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Confirmación por email</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Notificación por whatsapp</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Gestión de pacientes</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Gestión de servicios</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Futuras actualizaciones</li>
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col border shadow-xl p-10 rounded-xl mb-6'>
                  <div className='w-72'>
                    <h2 className='text-start font-bold text-two-500'>Plan Gratuito</h2>
                    <div className='flex '>
                      <h2 className='text-start font-bold text-5xl mt-4'>0$</h2>
                    </div>
                    <p className='text-start font-bold text-sm mt-3'>Queremos que vivas la experiencia ayeendo y digitalizes tus servicios de forma gratuita.</p>
                  </div>
                  <div className='mt-8'>
                    <ul className='flex flex-col gap-4'>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Página web</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Calendario online</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Gestión de pacientes</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Gestión de servicios</li>
                      <li className='flex justify-start gap-4 text-xl text-gray-600'><FaCheck className='text-yellow-300 mr-4'/>Futuras actualizaciones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <Footer/>

      </div>
    </>
  )
}
