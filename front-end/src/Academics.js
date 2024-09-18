import { BarChart } from "@mui/x-charts";
import { SimpleGauge } from "react-gauges";
import { PieChart } from '@mui/x-charts/PieChart';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const subjects = ['maths', 'chemistry', 'physics', 'cs', 'bio'];
const marks = [8, 5, 9, 10, 7];
const completionValue = 10;
const projectSubmissionDates = {dates: [
    { date: '2024-01-01'},
    { date: '2024-01-22'},
    { date: '2024-01-30'},
    { date: '2024-03-30'},
]};
const PieData = [
    { id: 0, value: 10, label: 'Games' },
    { id: 1, value: 15, label: 'Academics' },
    { id: 2, value: 20, label: 'Travel' },
];

const Academics = () => {
    return (
        <>
            <MarkRepresentation />
            <ProjectCompletion />
            <Submissions />
            <ExtraCurricularActivites />
        </>
    );
}

const MarkRepresentation = () => {
    return (
        <div className="mark-representation acad-ic" style={{ marginBottom: '20px', height: '400px', width: '500px' }} >
            <p>Mark Representation: (Test Name)</p>
            <button style={{ fontSize: '80%' }}>Compare</button>
            <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: subjects,
                    scaleType: 'band',
                    },
                ]}
                series={[
                    {
                    data: marks,
                    },
                ]}
                width={500}
                height={300}
            />
        </div>
    );
}

const ProjectCompletion = () => {
    return (
        <div className="project-completion acad-ic" style={{ height: '450px', width: '400px', padding: '50px' }}>
            <p>Project completion: </p>
            <div>
                <SimpleGauge value={completionValue} isTotal={true} />
            </div> 
        </div>
    );
}

const Submissions = () => {
    return (
        <div className="submissions acad-ic" style={{ height: '400px', width: '500px' }}>
            <p>Assignments & prjects</p>
            <button style={{ fontSize: '80%' }}>Select dates</button>
            <CalendarHeatmap
            startDate={new Date('2023-12-31')}
            endDate={new Date('2024-04-01')}
            values={projectSubmissionDates.dates}
            />
        </div>
    );
}

const ExtraCurricularActivites = () => {
    return (
        <div className="extra-curricular-activities acad-ic" style={{ height: '400px', width: '420px' }}>
            <p>Extra curricular activites</p>
            <PieChart
            series={[
                {
                data: PieData,
                },
            ]}
            width={400}
            height={200}
            />
        </div>
    );
}

const CompareOldMarks = () => {
    // Implement old marks comparison logic here
}

export default Academics;
