"use client"
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { useContext, useState, useEffect } from 'react';
import dayjs from "dayjs";
import 'dayjs/locale/es'
import CalendarContext from '../../context/CalendarContext';
import Header from '../../components/calendar/Header';
import ViewOneDay from "../../components/calendar/ViewOneDay"
import ViewFourDay from "../../components/calendar/ViewFourDay"
import ViewSevenDay from "../../components/calendar/ViewSevenDay"
import HeaderAdmin from '@/components/HeaderAdmin';


dayjs.locale('es')


const DayView = () => {
    // eslint-disable-next-line no-unused-vars
    const {amountDay, selectedDate, dayOption} = useContext(CalendarContext)
    const [matrixDay, setMatrixDay] = useState([])

    useEffect(() => {
        getArrayForDay(selectedDate, dayOption)},[selectedDate, dayOption])

    const getArrayForDay = (selectedDate, dayOption) => {
        
        const month = dayjs(selectedDate).month();
        const year = dayjs(selectedDate).year();
        const day = dayjs(selectedDate).date()
        const daysMatrix = new Array(dayOption).fill([]).map((_id, idx) => {
                return({
                    date: dayjs(new Date(year, month, day + idx)),
                    data: [{date: dayjs(new Date(year, month, day + idx)), hora: "12 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "1 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "2 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "3 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "4 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "5 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "6 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "7 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "8 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "9 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "10 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "11 AM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "12 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "1 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "2 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "3 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "4 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "5 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "6 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "7 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "8 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "9 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "10 PM" },
                            {date: dayjs(new Date(year, month, day + idx)), hora: "11 PM" }
                            ]
                });
        }
        );
        setMatrixDay(daysMatrix)
        return daysMatrix
        }

        const renderView = (amountDay) => {
            switch (amountDay) {
                case "1 Día":
                    return <ViewOneDay matrixDay={matrixDay}/>
                break;
                case "4 Días":
                    return <ViewFourDay matrixDay={matrixDay}/>
                break;
                case "7 Días":
                    return <ViewSevenDay matrixDay={matrixDay}/>
                break;
                default:
                    break;
            }
        }
    
    

    return (

        <>
            <HeaderAdmin/>
            
            <div className='w-full px-4 pb-4 pt-2 md:px-8 md:pb-8 md:pt-4 '>

                <Header/>
                {
                    renderView(amountDay)
                }
            </div>
        </>
    );
};

export default DayView;
