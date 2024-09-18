import AttendacePage from './Attendance';
import AcademicsPage from './Academics';

const profileDetails = {
    name: 'mark1',
    globalRanking: 1,
    classRanking: 1,
    achievements: 'none',
    intrests: 'none',
    bio: 'none'
};

const ParentsDashboard = () => {


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
    return (
        <div class="profile">
            <div class="profile-pic"></div>
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
                <tr>
                <td>09:00 - 10:00</td>
                <td>Math</td>
                <td>Physics</td>
                <td>Chemistry</td>
                <td>Math</td>
                <td>English</td>
                </tr>
                <tr>
                <td>10:00 - 11:00</td>
                <td>English</td>
                <td>Math</td>
                <td>Physics</td>
                <td>Chemistry</td>
                <td>History</td>
                </tr>
                <tr>
                <td>11:00 - 12:00</td>
                <td>Break</td>
                <td>Break</td>
                <td>Break</td>
                <td>Break</td>
                <td>Break</td>
                </tr>
                <tr>
                <td>12:00 - 01:00</td>
                <td>History</td>
                <td>Chemistry</td>
                <td>English</td>
                <td>Physics</td>
                <td>Math</td>
                </tr>
                <tr>
                <td>01:00 - 02:00</td>
                <td>Physics</td>
                <td>Math</td>
                <td>English</td>
                <td>History</td>
                <td>Physics</td>
                </tr>
            </tbody>
        </table>
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
                <button>Teacher's Meet</button>
                <button>Notifications</button>
                <button>Rewards</button>
                <button>Attendance</button>
                <button>To-Do</button>
                <button>Assignments</button>
            </div>
    );
}

export default ParentsDashboard;