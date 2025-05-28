// CalendarView.tsx
import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css' // default styles (we’ll override)

const CalendarView: React.FC = () => {
    const [date, setDate] = useState<Date>(new Date())
  
    const handleDateChange = (value: Date | Date[]) => {
      if (value instanceof Date) {
        setDate(value)
      }
    }

  return (
    <div className="max-w-sm mx-auto bg-white text-[#A09D9C] rounded-2xl p-6 shadow-md">
      <Calendar
        // onChange={handleDateChange}
        value={date}
        calendarType="gregory"
        selectRange={false} 
        className="rounded-xl text-sm calendar-soft"
        tileClassName={({ date: tileDate }) =>
          tileDate.toDateString() === new Date().toDateString()
            ? 'bg-[#F49974] text-[#A09D9C] rounded-full'
            : ''
        }
      />
    </div>
  )
}

export default CalendarView
