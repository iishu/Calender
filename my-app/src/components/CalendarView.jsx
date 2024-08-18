import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ events }) => {
  return (
    <div className="p-4">
      <Calendar />
      {/* Render events on the calendar */}
    </div>
  );
};

export default CalendarView;
