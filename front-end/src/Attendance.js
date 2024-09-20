import React, { useCallback, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { isSameDay } from "date-fns";
import axios from "axios";

const Attendance = () => {
  const [absentDates, setAbsentDates] = useState([]);

  useEffect(() => {
    getData().then((d) => setAbsentDates(d));
  }, []);

  const setAbsentClass = useCallback(
    ({ date, view }) => {
      if (view === "month" && absentDates.some(dDate => isSameDay(dDate, date))) {
        return "absent";
      }
      return null;
    },
    [absentDates]
  );

  return (
    <div className="attendance-container">
      <ContentsPanel workingDays={20} absentDays={absentDates.length} />
      <CalendarView setAbsentClass={setAbsentClass} />
    </div>
  );
};

const ContentsPanel = ({ workingDays = 20, absentDays = 3 }) => {
  const attendanceRate = (((workingDays - absentDays) / workingDays) * 100).toFixed(2);
  
  return (
    <div className="contents-panel">
      <h3>Number of working days: {workingDays}</h3>
      <h3>Number of days absent: {absentDays}</h3>
      <h3>Attendance: {attendanceRate}%</h3>
    </div>
  );
};

const CalendarView = ({ setAbsentClass }) => {
  const [value, setValue] = useState(new Date());
  const onChange = (date) => setValue(date);

  return (
    <div className="calendar">
      <Calendar onChange={onChange} value={value} tileClassName={setAbsentClass} />
    </div>
  );
};

const getData = async () => {
  const res = await axios.get('http://localhost:3030/data');
  return res.data.map(date => new Date(date)); 
}

export default Attendance;
