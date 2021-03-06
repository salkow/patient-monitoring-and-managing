import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const Chart = ({ data, value_name_color }) => {
	return (
		<div className="chart">
			<ResponsiveContainer width="100%" height={300}>
				<LineChart
					data={data}
					margin={{
						top: 30,
						right: 0,
						left: 0,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="timestamp"
						interval="preserveStartEnd"
						tick={{ angle: 3 }}
						stroke="white"
					/>
					<YAxis stroke="white" />
					<Tooltip />
					<Legend />

					{Object.entries(value_name_color).map(
						([value_name, color]) => (
							<Line
								key={value_name}
								type="monotone"
								dataKey={value_name}
								stroke={color}
								activeDot={{ r: 8 }}
							/>
						)
					)}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
