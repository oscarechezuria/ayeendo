export default function StepOne({stepOne, setStepOne}) {
    
    const handleService = ({target}) =>{
        const name = target.name
        const value = target.value
        const copyService = {
            ...stepOne,
            [name]: value
        }
        setStepOne(copyService)
    }
    
    const handleStatusPrice = () => {
        const copyService = {
            ...stepOne,
            statusPrice: !stepOne.statusPrice 
        }
        setStepOne(copyService)
    }



    return (
            <form className='flex justify-center mt-8'>
                <div className='flex flex-col py-2 px-8 border-2 rounded-xl w-auto sm:w-96'>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="name" className='mb-1 text-one-500 font-medium'>Nombre del servicio</label>
                        <input
                            required
                            type="text" 
                            id='name' 
                            name='name' 
                            className='border rounded-md p-2 w-full hover:border-two-500 focus:outline-none focus:border-two-500'
                            value={stepOne.name}
                            onChange={handleService}
                            />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="price" className='flex mb-1 text-one-500 font-medium'>Precio</label>
                        {stepOne.statusPrice ? <h4 className='text-xs text-red-400 mb-2'>{`Si no quieres mostrar el precio coloca la palabra "Preguntar" o "DM" para una mejor experiencia`}</h4> : null}
                        <div className='flex'>
                            <span className='flex border rounded w-24 hover:border-two-500 focus:border-two-500'>
                                <input 
                                    required
                                    type="text" 
                                    id="price" 
                                    name='price' 
                                    className={`flex p-2 ml-1 ${!stepOne.statusPrice ? "w-14" : "w-full" }  focus:outline-none`}
                                    value={stepOne.price}
                                    onChange={handleService}
                                    />
                                {
                                    !stepOne.statusPrice
                                    ?
                                    <h3 className='p-2 w-8 text-center font-semibold text-one-500'>$</h3>
                                    :
                                    null
                                }
                            </span>
                            <span className='flex flex-col ml-8'>
                                <h3 className='text-xs font-medium mb-1'>No</h3>
                                <input 
                                    type="checkbox" 
                                    defaultChecked={stepOne.statusPrice}
                                    onChange={handleStatusPrice}/>                       
                            </span> 
                        </div>
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label htmlFor="duration" className='mb-1 text-one-500 font-medium'>Duración</label>
                        <select
                            required
                            name="duration" 
                            id="duration" 
                            className='border rounded-md p-2 w-full hover:border-two-500 focus:outline-none focus:border-two-500' 
                            value={stepOne.duration}
                            onChange={handleService}
                            >
                            <option value=""></option>
                            <option value="10min">10min</option>
                            <option value="15min">15min</option>
                            <option value="20min">20min</option>
                            <option value="25min">25min</option>
                            <option value="30min">30min</option>
                            <option value="35min">35min</option>
                            <option value="40min">40min</option>
                            <option value="45min">45min</option>
                            <option value="50min">50min</option>
                            <option value="55min">55min</option>
                            <option value="60min">60min</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="desciption" className='mb-1 text-one-500 font-medium'>Descripción</label>
                        <textarea
                            required 
                            name="description" 
                            id="description" 
                            cols="12" rows="6" 
                            className='border rounded-md p-2 w-full my-2 hover:border-two-500 focus:outline-none focus:border-two-500'
                            value={stepOne.description}
                            onChange={handleService}
                            />
                    </div>
                </div>
            </form>
)
}

