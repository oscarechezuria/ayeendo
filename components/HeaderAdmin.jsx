import { useContextGlobal } from "@/context/GlobalContext"
import {FaBarsStaggered} from "react-icons/fa6"


export default function HeaderAdmin() {

    const {openSidebar, setOpenSidebar} = useContextGlobal()

return (
            <header className={`visible md:hidden`}>
                    <nav className={`flex mb-4 items-center justify-between px-6 py-1 shadow-md`}>
                        <div className="flex justify-between items-center w-full text-white" >
                            <div className="flex p-2 hover:cursor-pointer" onClick={() => setOpenSidebar(!openSidebar)}>
                                <FaBarsStaggered className='text-one-500 text-1xl text-3xl '/>
                            </div>
                            <div className='flex font-black text-one-500 text-2xl p-3 lg:ml-16 '
                            >
                                AYEENDO
                            </div>
                        </div>
                    </nav>
            </header>
)
}
