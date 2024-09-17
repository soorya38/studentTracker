import { BarChart } from "@mui/x-charts";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { SimpleGauge } from "react-gauges";

const subjects = ['maths', 'chemistry', 'physics', 'cs', 'bio'];
const marks = [8, 5, 9, 10, 7];
const completionValue = 10;

const Academics = () => {
    return (
        <>
            <MarkRepresentation />
            <ProjectCompletion />
            <Submissions />
            
            <p>Extra Curricular Activities</p>
        </>
    );
}

const MarkRepresentation = () => {
    return (
        <div className="mark-representation" style={{ marginBottom: '20px' }}>
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
        <div className="project-completion" style={{ height: '200px', width: '300px' }}>
            <p>Project completion: </p>
            <div>
                <SimpleGauge value={50} isTotal={true} />
            </div> 
        </div>
    );
}

const Submissions = () => {
    return (
        <div className="submissions">
            <p>Assignments & prjects</p>
            <button style={{ fontSize: '80%' }}>Select dates</button>
            <CalendarHeatmap
            startDate={new Date('2023-12-31')}
            endDate={new Date('2024-04-01')}
            values={[
                { date: '2024-01-01', count: 12 },
                { date: '2024-01-22', count: 122 },
                { date: '2024-01-30', count: 38 },
                { date: '2024-03-30', count: 38 },
            ]}
            />
        </div>
    );
}

const CompareOldMarks = () => {
    // Implement old marks comparison logic here
}

export default Academics;
