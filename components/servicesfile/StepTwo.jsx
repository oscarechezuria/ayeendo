export default function StepTwo({stepTwo, setStepTwo}) {

        const handleHora = (e) => {
        const value = e.target.dataset.hora
        const idx = e.target.dataset.idx

        const copyHour = [...stepTwo]
        copyHour[idx] = {
            name: copyHour[idx].name,
            state: copyHour[idx].state,
            hours: [...copyHour[idx].hours, value]
        }
        setStepTwo(copyHour)
        }

        const handleInput = (e) => {
        const index = e.target.dataset.idx
        const copyHours = [...stepTwo]
        stepTwo[index] = {
            ...stepTwo,
            state: copyHours[index].state === true ? copyHours[index].state = false : copyHours[index].state = true,
        }
        setStepTwo(copyHours)

        }

        const removeClick = ( idx, index) => {
        const copyRemove = [...stepTwo]
        copyRemove[index].hours.splice(idx, 1)
        setStepTwo(copyRemove)
        }

    return (
        <div className='mt-8'>
        {
            stepTwo.map((item, idx) => (
            <div key={idx}>
                <div className='flex flex-col my-4 sm:flex-row sm:justify-center sm:gap-4'>
                <div className='flex justify-center'>
                    <div className='flex w-28'>
                    <div className='mr-r w-4'>
                        <input type="checkbox" data-input={item.state} data-idx={idx} defaultChecked={item.state} value={item.state} onChange={handleInput}/>
                    </div>
                    <div className='w-24 text-center sm:text-left'>
                        <h2>{item.name}</h2>
                    </div>
                    </div>
                </div>

                {
                    item.state
                    ?
                    <>
                    <div className="flex justify-center mb-4 sm:border sm:rounded-lg sm:mb-0" >

                        <div className={`flex flex-col w-40 h-85 text-center bg-white mt-1 cursor-pointer overflow-auto border rounded-lg sm:w-24 sm:border-0 sm:rounded-none`}>
                            <p onClick={handleHora} data-hora="06:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>06:00 AM</p>
                            <p onClick={handleHora} data-hora="06:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>06:30 AM</p>
                            <p onClick={handleHora} data-hora="07:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>07:00 AM</p>
                            <p onClick={handleHora} data-hora="07:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>07:30 AM</p>
                            <p onClick={handleHora} data-hora="08:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>08:00 AM</p>    
                            <p onClick={handleHora} data-hora="08:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>08:30 AM</p>
                            <p onClick={handleHora} data-hora="09:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>09:00 AM</p>
                            <p onClick={handleHora} data-hora="09:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>09:30 AM</p>
                            <p onClick={handleHora} data-hora="10:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>10:00 AM</p>
                            <p onClick={handleHora} data-hora="10:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>10:30 AM</p>
                            <p onClick={handleHora} data-hora="11:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>11:00 AM</p>
                            <p onClick={handleHora} data-hora="11:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>11:30 AM</p>
                            <p onClick={handleHora} data-hora="12:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>12:00 PM</p>
                            <p onClick={handleHora} data-hora="12:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>12:30 PM</p>
                            <p onClick={handleHora} data-hora="01:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>01:00 PM</p>
                            <p onClick={handleHora} data-hora="01:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>01:30 PM</p>
                            <p onClick={handleHora} data-hora="02:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>02:00 PM</p>
                            <p onClick={handleHora} data-hora="02:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>02:30 PM</p>
                            <p onClick={handleHora} data-hora="03:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>03:00 PM</p>
                            <p onClick={handleHora} data-hora="03:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>03:30 PM</p>
                            <p onClick={handleHora} data-hora="04:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>04:00 PM</p>
                            <p onClick={handleHora} data-hora="04:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>04:30 PM</p>
                            <p onClick={handleHora} data-hora="04:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>04:30 PM</p>
                            <p onClick={handleHora} data-hora="05:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>05:00 PM</p>
                            <p onClick={handleHora} data-hora="05:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>05:30 PM</p>
                            <p onClick={handleHora} data-hora="06:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>06:00 PM</p>
                            <p onClick={handleHora} data-hora="06:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>06:30 PM</p>
                            <p onClick={handleHora} data-hora="07:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>07:00 PM</p>
                            <p onClick={handleHora} data-hora="07:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>07:30 PM</p>
                            <p onClick={handleHora} data-hora="08:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>08:00 PM</p>
                            <p onClick={handleHora} data-hora="08:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>08:30 PM</p>
                            <p onClick={handleHora} data-hora="09:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>09:00 PM</p>
                            <p onClick={handleHora} data-hora="09:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>09:30 PM</p>
                            <p onClick={handleHora} data-hora="10:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>10:00 PM</p>
                            <p onClick={handleHora} data-hora="10:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>10:30 PM</p>
                            <p onClick={handleHora} data-hora="11:00 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>11:00 PM</p>
                            <p onClick={handleHora} data-hora="11:30 PM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>11:30 PM</p>
                            <p onClick={handleHora} data-hora="12:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>12:00 AM</p>
                            <p onClick={handleHora} data-hora="12:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>12:30 AM</p>
                            <p onClick={handleHora} data-hora="01:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>01:00 AM</p>
                            <p onClick={handleHora} data-hora="01:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>01:30 AM</p>
                            <p onClick={handleHora} data-hora="02:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>02:00 AM</p>
                            <p onClick={handleHora} data-hora="02:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>02:30 AM</p>
                            <p onClick={handleHora} data-hora="03:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>03:00 AM</p>
                            <p onClick={handleHora} data-hora="03:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>03:30 AM</p>
                            <p onClick={handleHora} data-hora="04:00 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>04:00 AM</p>
                            <p onClick={handleHora} data-hora="04:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>04:30 AM</p>
                            <p onClick={handleHora} data-hora="05:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>05:30 AM</p>
                            <p onClick={handleHora} data-hora="05:30 AM" data-idx={idx} data-day={item.name} className='hover:bg-gray-200 rounded-l'>05:30 AM</p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='grid grid-cols-3 gap-1 p-2 w-80 max-h-32 bg-white border rounded-lg overflow-auto sm:grid-cols-4 sm:w-96 sm:p-1 '>
                        {
                            item.hours.map((item, index) => (
                            <div key={index}>
                                <div className='rounded-md text-sm text-center'>
                                <div className='flex justify-between w-18 bg-gray-300 rounded-lg sm:w-22'>
                                    <div className='mr-1 ml-1    sm:mr-0'>
                                        <h2>{item}</h2>
                                    </div>
                                    <span className='w-4 bg-red-300 rounded-r-lg cursor-pointer hover:bg-red-500' onClick={() => removeClick(index, idx)}>x</span>
                                </div>
                                </div>
                            </div>
                            ))
                            }
                        </div>
                    </div>
                    </>
                    :
                    <>
                    <div className="flex justify-center w-24 mb-4 sm:mb-0">
                        <h2></h2>
                    </div>

                    <div className='flex justify-center'>
                        <div className='flex justify-center bg-white  border rounded-lg p-4 w-80 max-h-32 overflow-auto sm:grid-cols-4 sm:w-96 sm:p-2 '>
                        <h2>No disponible</h2>
                        </div>
                    </div>
                    </>
                    
                }
                </div>
            </div>
            ))
        }
        </div>
    )
    }
