import React from 'react';
// import { useNavigate } from 'react-router-dom';
import profile from '../src/pro.png'
import Timetable from './components/Timetable';
import Academics from './components/Academics';
import Collections from './components/Collections';
function TeacherDashboard() {
    // const navigate =useNavigate();
    // function handleclick(){
    //     navigate('/Todo');
    // }
    // function Attend(){
    //   navigate('/Attendance');
    // }
    // function time(){
    //   navigate('/Timetable');
    // }
    return(
      <>
        <div className="flex justify-between flex-row w-auto h-auto">
          <div className='flex justify-start items-start mt-5 flex-col w-[46%]'>
              <img src={profile} alt="profile" className='w-[60%] h-[70%]'/>
              <div className='text-justify'>
                <h1>Details</h1>
                <h2>NAME: </h2>
                <h2>DEPARTMENT: </h2>
                <h2>TIMETABLE: </h2>
              </div>
          </div>
          <Timetable />
        </div>
        <div className='flex justify-start flex-row w-auto h-auto gap-5 mt-5'>
          <Academics />
          <Collections />
        </div>
      </>
    )
}

export default TeacherDashboard;
