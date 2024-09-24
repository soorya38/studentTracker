import { BarChart } from "@mui/x-charts";
import { SimpleGauge } from "react-gauges";
import { PieChart } from '@mui/x-charts/PieChart';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import axios from 'axios';
import { useState, useEffect } from "react";

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
    const [subjects, setSubjects] = useState(['maths', 'chemistry', 'physics', 'cs', 'bio']);
    const [marks, setMarks] = useState([8, 5, 9, 10, 7]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const subjectsData = await getSubjects();
                const marksData = await getMarks();
                setSubjects(subjectsData);
                setMarks(marksData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

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
};
const getSubjects = async () => {
    const response = await axios.get('http://localhost:3030/subjects');
    return response.data;
};
const getMarks = async () => {
    const response = await axios.get('http://localhost:3030/marks'); // Change this URL to the correct endpoint for marks
    return response.data;
};


const ProjectCompletion = () => {
    const[completionValue, setCompletionValue] = useState(10);

    useEffect(() => {
        getCompletionValue().then((val) => setCompletionValue(val));
    }, []);

    return (
        <div className="project-completion acad-ic" style={{ height: '450px', width: '400px', padding: '50px' }}>
            <p>Project completion: </p>
            <div>
                <SimpleGauge value={completionValue} isTotal={true} />
            </div> 
        </div>
    );
}
const getCompletionValue = async () => {
    const data = await axios.get('http://localhost:3030/completion-value');
    return data.data;
}

const Submissions = () => {
    const [projectSubmissionDates, setProjectSubmissionDates] = useState({dates: [
        { date: '2024-01-01'},
        { date: '2024-01-22'},
        { date: '2024-01-30'},
        { date: '2024-03-30'},
    ]});

    useEffect(() => {
        getSubmissionDates().then((data) => setProjectSubmissionDates(data));
    }, []);

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
const getSubmissionDates = async () => {
    const data = await axios.get('http://localhost:3030/submission-dates');
    return data.data;
}

const ExtraCurricularActivites = () => {
    const[pieData, setPieData] = useState([
        { id: 0, value: 10, label: 'Games' },
        { id: 1, value: 15, label: 'Academics' },
        { id: 2, value: 20, label: 'Travel' },
    ]);

    useEffect(() => {
        getExtraCurricularActivites().then((data) => setPieData(data));
    }, []);

    return (
        <div className="extra-curricular-activities acad-ic" style={{ height: '400px', width: '420px' }}>
            <p>Extra curricular activites</p>
            <PieChart
            series={[
                {
                data: pieData,
                },
            ]}
            width={400}
            height={200}
            />
        </div>
    );
}
const getExtraCurricularActivites = async () => {
    const data = await axios.get('http://localhost:3030/extra-curricular-activities');
    return data.data;
}

const CompareOldMarks = () => {
    // Implement old marks comparison logic here
}

export default Academics;
