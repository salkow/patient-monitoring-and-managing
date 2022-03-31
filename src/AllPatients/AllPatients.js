import "./AllPatients.css";

import axiosInstance from "../axios";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

const patients1 = [
	{
		firstname: "Kason",
		lastname: "Frye",
		patient_id: 2,
		heart_rate: "75",
		email: "kasfr@gmail.com",
		z_accel: "1",
		sex: "Female",
		address_street: "Syggrou",
		address_number: "189",
		address_city: "Athens",
		address_postalcode: "17673",
	},
	{
		firstname: "John",
		lastname: "Smith",
		patient_id: 11,
		heart_rate: "75",
		sys_blood_pressure: "128",
		dia_blood_pressure: "97",
		email: "jsmith@gmail.com",
		sex: "Male",
		address_street: "Syggrou",
		address_number: "189",
		address_city: "Athens",
		address_postalcode: "17673",
	},
	{
		firstname: "Mary",
		lastname: "Jones",
		patient_id: 12,
		heart_rate: "58",
		email: "mjones@gmail.com",
		sex: "Female",
		address_street: "Syggrou",
		address_number: "189",
		address_city: "Athens",
		address_postalcode: "17673",
	},
];

const AllPatients = () => {
	const [patients, setPatients] = useState([]);

	useEffect(() => {
		let user_id = localStorage.getItem("user_id");

		// TODO: Set user_id from login.

		axiosInstance.get(`patients?user_id=18`).then((res) => {
			setPatients(res.data);
		});
	}, []);

	return (
		<div className="cards">
			{patients.map((patient, index) => (
				<div className="card" key={index}>
					<table>
						<tbody>
							<tr>
								<td>
									Name: {patient.firstname} {patient.lastname}
								</td>
							</tr>

							<tr>
								<td>Heart Rate: {patient.heart_rate} bpm</td>
							</tr>

							<tr>
								<td>Gender: {patient.sex} </td>
							</tr>

							{patient.sys_blood_pressure &&
								patient.dia_blood_pressure && (
									<tr>
										<td>
											Blood Pressure:{" "}
											{patient.sys_blood_pressure} /{" "}
											{patient.dia_blood_pressure}
										</td>
									</tr>
								)}

							{patient.z_accel && (
								<tr>
									<td>
										Z Accel: {patient.z_accel} m/s
										<sup>2</sup>
									</td>
								</tr>
							)}
						</tbody>
					</table>
					<br />
					<Link to={`/patient/${patient.patient_id}`}>Details</Link>
				</div>
			))}

			<Link to={"/add-patient/"}>Add Patient</Link>
		</div>
	);
};

export default AllPatients;
