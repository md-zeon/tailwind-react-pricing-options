import React, { use } from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataResponse = use(marksPromise);
    const marksData = marksDataResponse.data;
    // console.log(marksData);
    // Data Processing For the Chart
    const marksChartData = marksData.map(studentData => {
        const student = {
            id: studentData.studentId,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            biology: studentData.marks.biology,
            math: studentData.marks.math
        }

        const avg = (student.physics + student.chemistry + student.biology + student.math) / 4;
        student.avg = avg;

        return student;
    })
    console.log(marksChartData);
    return (
        <div>
            <BarChart width={800} height={400} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Bar dataKey="avg" fill='yellow'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;