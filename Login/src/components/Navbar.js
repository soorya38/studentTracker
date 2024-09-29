import React from 'react'
import {useNavigate } from 'react-router-dom'
// import Home from '../home';
// import Login from '../login';

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <>
        <nav className='bg-green-200 w-full h-9 mt-0 flex justify-between text-lg'>
            <div className=''>
                <h1>
                    TeacherDashboard
                </h1>
            </div>
            <div className='flex justify-normal gap-3 mr-9 list-none'>
                <li onClick={()=>navigate('/Home')}>
                    Home
                </li>
                <li onClick={()=>navigate('/Todo')}>
                    Todo
                </li>
                <li>
                    Contact
                </li>
            </div>
        </nav>
    </>
  )
}

export default Navbar