import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { addDays, isSameDay } from 'date-fns';

//for testing
const tomorrow = addDays(new Date(), 1);
const in3Days = addDays(new Date(), 3);
const in5Days = addDays(new Date(), 5);
//store dates to be marked as absent
const absentDates = [tomorrow, in3Days, in5Days];

const Attendace = () => {
  return (
    <div className='attendance-container'>
      <ContentsPanel />
      <CalendarView />
    </div>
  );
}

const ContentsPanel = ({
  workingDays=20,
  absentDays=absentDates.length,
}) => {
  return (
    <div className='contents-panel'>
      <h3>Number of working days: {workingDays}</h3>
      <h3>Number of days absent: {absentDays}</h3>
      <h3>Attendace %: (cal % value)</h3>
    </div>
  );
}

const CalendarView = () => {
  const [value, setValue] = useState(new Date());
  const onChange = (date) => setValue(date);
  return (
    <div className='calendar'>
      <Calendar
          onChange={onChange}
          value={value}
          tileClassName={setAbsentClass}
        />
    </div>
  );
}

const setAbsentClass = ({ date, view }) => {
  if (view === 'month') {
    if (absentDates.find(dDate => isSameDay(dDate, date))) {
      return 'absent';
    }
  }
  return null; 
}

export default Attendace;
