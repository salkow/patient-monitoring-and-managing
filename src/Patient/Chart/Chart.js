import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const data = [
	{
		key: "2021-11-11 12:00:00",
		value: "80",
	},
	{
		key: "2021-11-10 18:00:00",
		value: "90",
	},
	{
		key: "2021-11-10 18:00:00",
		value: "50",
	},
];

const values = data.map((data) => {
	return data.value;
});

const max_value = Math.max(...values);

const Chart = () => {
	return (
		<LineChart
			width={1500}
			height={300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="key" interval="preserveStartEnd" />
			<YAxis domain={[0, max_value + 10]} />
			<Tooltip />
			<Legend />
			<Line
				type="monotone"
				dataKey="value"
				stroke="#8884d8"
				activeDot={{ r: 8 }}
			/>
			{/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
		</LineChart>
	);
};

export default Chart;
