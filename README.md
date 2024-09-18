ParentsDashboard
Components:

    AttendacePage: Displays student's attendance information.
    Profile: Shows student's profile details like name, rankings, achievements, interests, and bio.
    TimeTable: Displays the student's timetable.
    Academics: Shows student's academic progress and extracurricular activities.
    SideBar: Provides navigation options for different sections of the dashboard.

AttendacePage
Components:

    Calendar: A calendar component for showing attendance days.
    ContentsPanel: Displays attendance summary.

ContentsPanel Props:

    workingDays (Number): Total number of working days.
    absentDays (Number): Total number of absent days.

Todo
Components:

    Task: Represents an individual task in the to-do list.

Task Props:

    title (String): The title of the task.

Profile
Data (From Database):

    profileDetails: Stores student's profile information.

Default Values:

    name: 'mark1'
    globalRanking: 1
    classRanking: 1
    achievements: 'none'
    interests: 'none'
    bio: 'none'

Academics
Components:

    MarkRepresentation: Displays the student's subject marks using a bar chart.
    ProjectCompletion: Shows project completion status using a gauge chart.
    Submissions: Displays project submission dates on a heatmap.
    ExtraCurricularActivities: Shows extracurricular participation with a pie chart.

MarkRepresentation Data (From Database):

    subject: List of subjects.
    marks: List of marks for each subject.

Default Values:

    subject: ['maths', 'chemistry', 'physics', 'cs', 'bio']
    marks: [8, 5, 9, 10, 7]

ProjectCompletion Data (From Database):

    completionValue: The project completion percentage.

Default Values:

    completionValue: 10

Submissions Data (From Database):

    projectSubmissionDates.dates: List of submission dates.

Default Values:

javascript

const projectSubmissionDates = {
    dates: [
        { date: '2024-01-01' },
        { date: '2024-01-22' },
        { date: '2024-01-30' },
        { date: '2024-03-30' },
    ],
};

ExtraCurricularActivities Data (From Database):

    PieData: Data representing extracurricular activities breakdown.

Default Values:

javascript

const PieData = [
    { id: 0, value: 10, label: 'Games' },
    { id: 1, value: 15, label: 'Academics' },
    { id: 2, value: 20, label: 'Travel' },
];

Libraries Used:

    react-multi-date-picker: For handling multiple date selections in calendars.
    react-calendar-heatmap: For displaying heatmap-style calendars (e.g., for project submissions).
    react-gauges: For displaying gauges (e.g., project completion).
    react-native-horizontal-bar-graphs: For rendering horizontal bar charts.
