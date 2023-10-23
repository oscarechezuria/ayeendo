import React, {useContext, useEffect, useState} from 'react';
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import CalendarContext from '@/context/CalendarContext'
import dayjs from "dayjs";
import getMonthDayMartix from "../../utils/getMonthDayMartix";
import 'dayjs/locale/es'



const SmallCalendar = ({className = "", onChange, value}) => {

    const {currentDate, setSelectedDate, selectedDate } = useContext(CalendarContext)

    let weeks = [
        "Do",
        "Lu",
        "Ma",
        "Mi",
        "Ju",
        "Vi",
        "Sa"
    ]

    console.log(currentDate)
    const [daysMatrix, setDaysMatrix] = useState(getMonthDayMartix(selectedDate))

    console.log(daysMatrix)


    function jumpNextMonth() {
        let updatedCurrentDate = new Date(selectedDate)
        updatedCurrentDate.setMonth(updatedCurrentDate.getMonth() + 1)
        setSelectedDate(updatedCurrentDate)
    }


    function jumpPrevMonth() {
        let updatedCurrentDate = new Date(selectedDate)
        updatedCurrentDate.setMonth(updatedCurrentDate.getMonth() - 1)
        setSelectedDate(updatedCurrentDate)
    }




    useEffect(() => {
        setDaysMatrix(getMonthDayMartix(selectedDate))
    }, [selectedDate]);


    function handleSelectDate(day) {
        let d = day.toDate()
        onChange && onChange(d)
        setSelectedDate(new Date(day))
    }

    function isCurrentDate(day){
        const parseDate = new Date(day)
        return (currentDate?.toDateString() === parseDate.toDateString())
    }
    
    function isCurrentMonth(day){
        const parseDate = new Date(day)
        return (selectedDate.getMonth() === parseDate.getMonth())
    }

    function isCurrentDaySelected(day){
        const parseDate = new Date(day)
        return (selectedDate.toDateString() === parseDate.toDateString())
    }

    return (
        <div className={`bg-white mt-2 p-2 rounded-md flex flex-col`}>

            {/***  week view *****/}
            <div className='w-60 bg-two-500 rounded-md p-1'>
                <div className="flex justify-between w-full p-2">
                    <p className="text-md text-white font-semibold">{
                        dayjs(new Date(selectedDate)).locale("es").format(
                            "MMMM YYYY"
                        )}</p>

                    <div className="flex items-center gap-x-1">
                        <li className="list-none"
                            onClick={() => jumpPrevMonth( )}>
                            <div className="cursor-pointer text-base rounded-full hover:bg-gray-100">
                                <BiChevronLeft className="text-xl"/>
                            </div>
                        </li>
                        <li className="date list-none text-2xl mr-3"
                            onClick={() => jumpNextMonth()}>
                            <div className="cursor-pointer text-base rounded-full hover:bg-gray-100">
                                <BiChevronRight className="text-xl"/>
                            </div>
                        </li>
                    </div>
                </div>
                    

                    {/***  week view *****/}
                    
                <div className='flex flex-col justify-center items-center'>
                    <div className="grid grid-cols-7 w-56 gap-2 p-1">
                        {weeks.map(week => (
                            <div className="flex justify-center items-center text-sm" key={week}>
                                <span className="text-gray-700 font-semibold">{week}</span>
                            </div>
                        ))}
                    </div>

                    {/*** month view *****/}

                    <div className="grid grid-cols-7 grid-rows-6 w-56 gap-2 p-1">

                        {daysMatrix.map((row) => (
                            row.map(day => (
                                <div key={day.date()} onClick={() => handleSelectDate(day)}
                                    className={`flex text-sm py-1`}>
                                    <span 
                                    className={`flex justify-center items-center cursor-pointer p-1 w-6 rounded-full hover:bg-one-500 ${isCurrentDate(day) ? "bg-one-500" : "bg-two-500"} ${isCurrentMonth(day) ? "text-white" : "text-gray-600"}`}
                                    >{day.format("D")}</span>
                                </div >
                            ))
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};


export default SmallCalendar;