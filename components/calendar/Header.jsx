"use client"
/* eslint-disable no-unreachable */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {useContext, useState} from 'react';
import {
    BiChevronLeft,
    BiChevronRight,
} from "react-icons/bi";
import CalendarContext from "../../context/CalendarContext";
import dayjs from "dayjs";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const {selectedDate, setCalendar, amountDay, setAmountDay, setDayOption, openModal, setOpenModal} = useContext(CalendarContext);

    const moreOrLessDays = (amountDay) => {
        switch (amountDay) {
            case "1 Día":
                return 1
            break;
            case "4 Días":
                return 4
            break;
            case "7 Días":
                return 7
            break;
            default:
                break;
        }
    }


    let view = "day" 

    function jumpNextMonth() {
        let updateSelectedDate = new Date(selectedDate);
        if (view === "day") {
            updateSelectedDate.setDate(selectedDate.getDate() + moreOrLessDays(amountDay));
            // eslint-disable-next-line no-unused-vars
            let dd = dayjs(updateSelectedDate).format("MM-DD-YYYY");
            //navigate(`/day?date=` + dd)
        } else {
            updateSelectedDate.setMonth(updateSelectedDate.getMonth() + 1);
        }

        setCalendar({
            selectedDate: updateSelectedDate
        });
    }


    function jumpPrevMonth() {
        let updateSelectedDate = new Date(selectedDate);
        if (view === "day") {
            updateSelectedDate.setDate(selectedDate.getDate() - moreOrLessDays(amountDay));
            // eslint-disable-next-line no-unused-vars
            let dd = dayjs(updateSelectedDate).format("MM-DD-YYYY");
            setCalendar({
                selectedDate: updateSelectedDate
            });
            //navigate(`/day?date=` + dd)
        } else {
            updateSelectedDate.setMonth(updateSelectedDate.getMonth() - 1);
        }

        setCalendar({
            selectedDate: updateSelectedDate
        });
    }


    function resetDate() {
        let now = new Date();
        setCalendar({
            selectedDate: now
        });
        if (view === "day") {
            // eslint-disable-next-line no-unused-vars
            let dd = dayjs(now).format("MM-DD-YYYY");
            //navigate(`/day?date=` + dd)
        }
    }

    const handleDay = () => {
        setAmountDay("1 Día")
        setIsOpen(!isOpen)
        setDayOption(1)
    }
    const handleForDays = () => {
        setAmountDay("4 Días")
        setIsOpen(!isOpen)
        setDayOption(4)
    }
    const handleSevenDays = () => {
        setAmountDay("7 Días")
        setIsOpen(!isOpen)
        setDayOption(7)
    }





    return (
        <header className="flex px-3 py-2  items-center border-b">

            <div className="flex w-full justify-center items-center flex-wrap gap-2 sm:justify-between">
                    <div className="col-span-10 flex items-center font-semibold ml-2 md:ml-6 lg:ml-10 gap-x-2 md:gap-x-8">
                        <button className="font-semibold focus:outline-none bg-gray-100 text-black text-base py-2 px-4 rounded-md md:text-lg " onClick={resetDate}>Hoy</button>

                        <div className="flex items-center gap-x-2">
                            <li className="btn btn-circle list-none text-2xl cursor-pointer" onClick={jumpPrevMonth}>
                                <BiChevronLeft className='font-semibold' />
                            </li>
                            <li className="btn btn-circle list-none text-2xl cursor-pointer" onClick={jumpNextMonth}>
                                <BiChevronRight />
                            </li>
                        </div>

                        <div>
                            <h4 className="font-semibold text-black text-lg md:text-2xl">
                                {dayjs(new Date(selectedDate)).format(
                                    view === "day" ? "MMMM YYYY" : "MMMM YYYY"
                                )}
                            </h4>
                        </div>
                        
                    </div>
                    <div className='flex justify-center gap-2 mr-0 md:mr-6'>
                        <div>
                            <button 
                                className='w-24 p-2 bg-slate-100 text-base text-center rounded-md cursor-pointer md:text-lg'
                                onClick={() => setOpenModal(!openModal)}
                                >
                                    Crear
                            </button>
                        </div>
                        <div>
                            <h2 className='w-24 p-2 bg-blue-600 text-white text-base rounded-md cursor-pointer text-center md:text-lg' onClick={() => setIsOpen(!isOpen)}>{amountDay}</h2>
                            <ul className={`absolute w-24 bg-slate-100 p-4 mt-2 focus:outline-none rounded-md border-2 cursor-pointer ${isOpen ? "visible" : "hidden"}`}>
                                <li className='mb-1' onClick={handleDay} >1 Día</li>
                                <li className='mb-1' onClick={handleForDays} >4 Días</li>
                                <li                  onClick={handleSevenDays} >7 Días</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </header>
    );
}


