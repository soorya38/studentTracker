import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Todo from './Todo/src/App';
import Home from './home';
import TeacherDashboard from './TeacherDashboard';
import Attendance from './Attendance';
import Timetable from './Timetable';
import Navbar from './components/Navbar';
import Login from './Pages/login';
import Signup from './Pages/signup';

const App = () => {
  const location = useLocation();
  // console.log(location);
  const hidebar=location.pathname ==='/'||location.pathname==='/signup';

  return (
    <div>
      {!hidebar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TeacherDashboard" element={<TeacherDashboard/>} />
        <Route path="/Attendance" element={<Attendance />} />
        <Route path="/Timetable" element={<Timetable />} />
      </Routes>
    </div>
  );
};

export default App;
