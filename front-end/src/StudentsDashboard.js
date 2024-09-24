import AttendacePage from './Attendance';
import AcademicsPage from './Academics';
import Todo from './Todo';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
    return (
        <div class="container">
            {/* <AttendacePage /> */}
            {/* <AcademicsPage /> */}
            <Profile />
            <TimeTable />
            <Academics />
            <SideBar />
        </div>
    );
}

const Profile = () => {
    const[profileDetails, setProfileDetails] = useState({
        name: 'mark1',
        globalRanking: 1,
        classRanking: 1,
        achievements: 'none',
        intrests: 'none',
        bio: 'none'
    });

    useEffect(() => {
        getProfileDetails().then((d) => setProfileDetails(d));
    }, []);

    return (
        <div class="profile">
            <div style={{display: 'grid'}}>
                <div class="profile-pic">
                </div>
                <button style={{fontSize: "80%"}}>Edit</button>
            </div>
            <br />
            <h2 style={{textAlign: 'center'}}>Profile Details</h2>
            <div  className='profile-details'>
                <p>Name: {profileDetails.name}</p>
                <p>Global ranking: {profileDetails.globalRanking}</p>
                <p>Class ranking: {profileDetails.classRanking}</p>
                <p>Achievements: {profileDetails.achievements}</p>
                <p>Intrests: {profileDetails.intrests}</p>
                <p>Bio: {profileDetails.bio}</p>
            </div>
        </div>
    );
}
const getProfileDetails = async () => {
    const data = await axios.get('http://localhost:3030/profile-details');
    return data.data;
}

const TimeTable = () => {
    return (
        <table class="timetable">
            <thead>
                <tr>
                <th>Time</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                </tr>
            </thead>
            <tbody>
                <TimeTableItem time={'11.00 - 12.00'}/>
                <TimeTableItem />
                <TimeTableItem />
                <TimeTableItem />                
            </tbody>
        </table>
    );
}

//util function of Time Table
const TimeTableItem = ({
    time = '01:00 - 02:00',
    subjects = ['phy', 'math', 'eng', 'his', 'phy']
}) => {
    return (
    <tr>
        <td>{time}</td>
        {subjects.map((i, index) => {
            return <td key={index}>{i}</td>
        })}
    </tr>
    );
}

const Academics = () => {
    return (
        <div class="academics">
            <button>Academics</button>
        </div>
    );
}

const SideBar = () => {
    return (
        <div class="side-options">
                <button>Communicate</button>
                <button>Notifications</button>
                <button>Rewards</button>
                <button>View attendance</button>
                <button>To-Do</button>
                <button>Post assignments</button>
                <button>Showoff</button>
                <button>Explore</button>
            </div>
    );
}

export default StudentDashboard;