import React from 'react';

function Timetable() {
  // Static example data for the timetable
  const timetableData = [
    { day: 'Monday', subject: 'Mathematics', time: '9:00 AM - 10:00 AM' },
    { day: 'Monday', subject: 'Physics', time: '10:15 AM - 11:15 AM' },
    { day: 'Tuesday', subject: 'JAVA', time: '9:00 AM - 10:00 AM' },
    { day: 'Tuesday', subject: 'VERBAL', time: '10:15 AM - 11:15 AM' },
    { day: 'Wednesday', subject: 'MERN', time: '9:00 AM - 10:00 AM' },
    { day: 'Thursday', subject: 'FET', time: '10:15 AM - 11:15 AM' },
    { day: 'Friday', subject: 'CN', time: '9:00 AM - 10:00 AM' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Main container with padding, shadow, and rounded edges */}
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        {/* Title for the timetable */}
        <h1 className="text-2xl font-semibold mb-6 text-center">Timetable</h1>
        {/* Timetable section */}
        <div className="space-y-4">
          {/* Loop through each timetable entry and render the details */}
          {timetableData.map((entry, index) => (
            <div
              key={index} // Unique key for each element to avoid React warning
              className="p-4 bg-gray-200 rounded-md shadow-sm"
            >
              {/* Display the day of the week */}
              <h2 className="text-lg font-semibold">{entry.day}</h2>
              {/* Display subject and time in smaller font */}
              <p className="text-gray-700">{entry.subject}</p>
              <p className="text-gray-500">{entry.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timetable;
