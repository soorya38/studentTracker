import React, { useState } from 'react';

const subjects = ['Math', 'Science', 'English'];

function Attendance() {
  const [attendanceData, setAttendanceData] = useState({
    Math: {},
    Science: {},
    English: {},
  });
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
  const [newStudent, setNewStudent] = useState('');

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleAttendanceChange = (student, present) => {
    setAttendanceData((prevData) => {
      const updatedData = { ...prevData };
      const studentData = updatedData[selectedSubject][student] || { present: 0, total: 0 };
      studentData.total += 1;
      if (present) studentData.present += 1;
      updatedData[selectedSubject][student] = studentData;
      return updatedData;
    });
  };

  const calculatePercentage = (present, total) => (total === 0 ? 0 : (present / total) * 100).toFixed(2);

  const handleAddStudent = () => {
    if (newStudent && !attendanceData[selectedSubject][newStudent]) {
      setAttendanceData((prevData) => {
        const updatedData = { ...prevData };
        updatedData[selectedSubject][newStudent] = { present: 0, total: 0 };
        return updatedData;
      });
      setNewStudent(''); 
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6 text-center">Attendance Tracker</h1>

      {/* Subject Selection */}
      <div className="mb-6">
        <label htmlFor="subject" className="block text-lg font-medium">
          Select Subject:
        </label>
        <select
          id="subject"
          className="w-full px-4 py-2 border rounded"
          value={selectedSubject}
          onChange={handleSubjectChange}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      {/* Add Student */}
      <div className="mb-6">
        <label htmlFor="newStudent" className="block text-lg font-medium">
          Add Student:
        </label>
        <div className="flex items-center space-x-4">
          <input
            id="newStudent"
            type="text"
            className="w-full px-4 py-2 border rounded"
            placeholder="Enter student name"
            value={newStudent}
            onChange={(e) => setNewStudent(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAddStudent}
          >
            Add
          </button>
        </div>
      </div>

      {/* Mark Attendance */}
      {Object.keys(attendanceData[selectedSubject]).length > 0 ? (
        <div>
          <h2 className="text-xl font-semibold mb-4">{selectedSubject} - Attendance</h2>
          {Object.keys(attendanceData[selectedSubject]).map((student) => {
            const { present, total } = attendanceData[selectedSubject][student];
            return (
              <div key={student} className="mb-4">
                <h3 className="font-semibold">{student}</h3>
                <div className="flex items-center space-x-4 mb-2">
                  <button
                    className="px-4 py-2 bg-green-200 text-green-800 rounded hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                    onClick={() => handleAttendanceChange(student, true)}
                  >
                    Mark Present
                  </button>
                  <button
                    className="px-4 py-2 bg-red-200 text-red-800 rounded hover:bg-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                    onClick={() => handleAttendanceChange(student, false)}
                  >
                    Mark Absent
                  </button>
                </div>
                <p>Attendance Percentage: {calculatePercentage(present, total)}%</p>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No students added yet for {selectedSubject}.</p>
      )}
    </div>
  );
}

export default Attendance;
