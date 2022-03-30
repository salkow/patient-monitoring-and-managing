import "./Patient.css";

import Chart from "./Chart/Chart.js";

import { useParams, Link } from "react-router-dom";

const patient = {
	heart_rate: [
		{
			timestamp: "2021-11-11 12:19:46",
			patient_id: 11,
			heart_rate: "80",
		},
	],
	bloodpressure: [
		{
			timestamp: "2021-11-11 12:19:46",
			patient_id: 11,
			sys_blood_pressure: "156",
			dia_blood_pressure: "120",
		},
	],
	temperature: [
		{
			timestamp: "2021-11-22 18:13:25",
			patient_id: 11,
			temperature: "36.3",
		},
	],
	patient_id: 11,
};

const info = [
	{
		patient_id: 11,
		email: "jsmith@gmail.com",
		conditions: ["Heart", "Liver"],
		sex: "Male",
		address_street: "Syggrou",
		address_number: "189",
		address_city: "Athens",
		address_postalcode: "17673",
		firstname: "John",
		lastname: "Smith",
		phonenumber: "6991614152",
		age: 40,
		facility: {
			facility_id: 1,
			facility_name: "KAPH DIMOU VYRONA",
			facility_address: "AGIAS TRIADAS 13",
		},
	},
];

const Patient = () => {
	const params = useParams();

	return (
		<div>
			<Link to="/">Back</Link>
			<div className="cards">
				<div className="card">
					Heart Rate: {patient.heart_rate[0].heart_rate} bpm
				</div>

				<div className="card">
					{patient.bloodpressure && (
						<>
							Blood Pressure:{" "}
							{patient.bloodpressure[0].sys_blood_pressure} /{" "}
							{patient.bloodpressure[0].dia_blood_pressure}
						</>
					)}
				</div>

				<div className="card">
					{patient.heart_rate && (
						<>
							Heart Rate: {patient.heart_rate[0].heart_rate} m/s
							<sup>2</sup>
						</>
					)}
				</div>

				<div className="card">
					{patient.temperature && (
						<>
							Temperature: {patient.temperature[0].temperature} °C
						</>
					)}
				</div>
			</div>

			<Chart />
		</div>
	);
};

export default Patient;
