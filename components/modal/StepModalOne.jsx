"use client"
import { useContext } from 'react'
import CalendarContext from '@/context/CalendarContext'
import dayjs from 'dayjs'
import SmallCalendar from '../SmallCalendar/SmallCalendar'

export default function StepModalOne() {

  const {selectedDate} = useContext(CalendarContext)

  return (
    <div>StepModalOne {dayjs(new Date(selectedDate)).format(
      "DD MMMM YYYY")}
        <div>
          <SmallCalendar/>
        </div>
    </div>
  )
}
