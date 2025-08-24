import React, { useState } from 'react';

const CalendarModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  // State to manage the current month and year
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Helper functions to navigate months
  const goToPreviousMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() - 1);
      return newDate;
    });
  };

  const goToNextMonth = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + 1);
      return newDate;
    });
  };

  // Function to generate the days for the current month
  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();

    // Get the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);
    // Get the last day of the month
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const dates = [];
    const firstDayIndex = firstDayOfMonth.getDay();

    // Add previous month's days to fill the grid
    for (let i = firstDayIndex; i > 0; i--) {
      const prevMonthDay = new Date(year, month, 1 - i);
      dates.push({
        day: prevMonthDay.getDate(),
        isCurrentMonth: false,
        isToday: false,
        date: prevMonthDay
      });
    }

    // Add current month's days
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const date = new Date(year, month, i);
      dates.push({
        day: i,
        isCurrentMonth: true,
        isToday: date.toDateString() === today.toDateString(),
        date: date
      });
    }

    // Add next month's days to fill the grid
    const totalDays = dates.length;
    const remainingSlots = 42 - totalDays; // 6 rows * 7 days = 42 slots

    for (let i = 1; i <= remainingSlots; i++) {
      const nextMonthDay = new Date(year, month + 1, i);
      dates.push({
        day: nextMonthDay.getDate(),
        isCurrentMonth: false,
        isToday: false,
        date: nextMonthDay
      });
    }

    return dates;
  };

  const calendarDays = getCalendarDays();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-black p-4 rounded-lg shadow-lg max-w-sm w-full relative">
        {/* Close button - now with better spacing from the other controls */}
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">
          &times;
        </button>

        {/* Calendar Header (Month and Arrows) */}
        <div className="flex justify-between items-center text-white mb-4">
          <button onClick={goToPreviousMonth} className="text-xl p-2">&lt;</button>
          <h2 className="text-lg font-semibold">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={goToNextMonth} className="text-xl p-2">&gt;</button>
        </div>

        {/* Days of the Week */}
        <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center">{day}</div>
          ))}
        </div>

        {/* Dates Grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((date, index) => (
            <div
              key={index}
              className={`text-center p-2 rounded-lg cursor-pointer transition-colors duration-200 
                ${date.isCurrentMonth ? 'text-white' : 'text-gray-600'}
                ${date.isToday ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'}`}
            >
              {date.day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;