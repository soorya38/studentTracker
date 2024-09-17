import AttendacePage from './Attendance';
import AcademicsPage from './Academics';

const ParentsDashboard = () => {
    return (
        <div class="container">
            {/* <Attendace /> */}
            <AcademicsPage />
            {/* <Profile />
            <TimeTable />
            <Academics />
            <SideBar /> */}
        </div>
    );
}

const Profile = () => {
    return (
        <div class="profile">
            <div class="profile-pic"></div>
            <p>Profile Details</p>
        </div>
    );
}

const TimeTable = () => {
    return (
        <div class="time-table">
            <p>Time Table:</p>
        </div>
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