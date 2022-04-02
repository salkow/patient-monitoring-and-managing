import "./AllPatients.css";

import Title from "../Title/Title.js";

import axiosInstance from "../axios";

import PatientCard from "./PatientCard/PatientCard.js";

import { Link } from "react-router-dom";

import { useEffect } from "react";

import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";

const AllPatients = ({ patients, setPatients }) => {
	useEffect(() => {
		if (!patients) {
			let user_id = localStorage.getItem("user_id");

			// TODO: Set user_id from login.

			axiosInstance.get(`patients?user_id=18`).then((res) => {
				setPatients(res.data);
			});
		}
	}, []);

	return (
		<div>
			<Title text="All Patients" />

			<div className="add-patient-container">
				<Link
					className="right nav-button no-u"
					to={"/add-patient/"}
					style={{ width: "8em", paddingBottom: "1em" }}
				>
					<PersonAddTwoToneIcon className="all-patient-card-icon" />{" "}
					Add Patient
				</Link>
			</div>
			{patients && (
				<div className="all-patient-cards">
					{patients.map((patient) => (
						<PatientCard
							key={patient.patient_id}
							patient_id={patient.patient_id}
							firstName={patient.firstname}
							lastName={patient.lastname}
							heart_rate={patient.heart_rate}
							sex={patient.sex}
							sys_blood_pressure={patient.sys_blood_pressure}
							dia_blood_pressure={patient.dia_blood_pressure}
							z_accel={patient.z_accel}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default AllPatients;
