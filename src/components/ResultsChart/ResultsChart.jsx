import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const ResultsChart = () => {
	const studentMarks = [
		{ name: "A", physics: 78, chemistry: 82, biology: 75, math: 88 },
		{ name: "B", physics: 65, chemistry: 70, biology: 68, math: 72 },
		{ name: "C", physics: 90, chemistry: 88, biology: 85, math: 93 },
		{ name: "D", physics: 55, chemistry: 60, biology: 58, math: 62 },
		{ name: "E", physics: 84, chemistry: 80, biology: 82, math: 87 },
		{ name: "F", physics: 73, chemistry: 77, biology: 70, math: 79 },
		{ name: "G", physics: 60, chemistry: 64, biology: 61, math: 66 },
		{ name: "H", physics: 92, chemistry: 89, biology: 94, math: 95 },
		{ name: "I", physics: 77, chemistry: 75, biology: 79, math: 81 },
		{ name: "J", physics: 88, chemistry: 90, biology: 86, math: 92 },
	];

	return (
		<div>
			<LineChart
				width={800}
				height={400}
				data={studentMarks}
			>
                <Tooltip></Tooltip>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
				<Line dataKey="math"></Line>
				<Line dataKey="chemistry" stroke="pink"></Line>
				<Line dataKey="math" stroke="red"></Line>
				<Line dataKey="biology" stroke="green"></Line>
			</LineChart>
		</div>
	);
};

export default ResultsChart;
