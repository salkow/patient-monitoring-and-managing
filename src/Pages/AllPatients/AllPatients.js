import "./AllPatients.css";

import axiosInstance from "../../axios";
import PatientCard from "./PatientCard.js";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import PersonAddTwoToneIcon from "@mui/icons-material/PersonAddTwoTone";

const AllPatients = ({ patients, setPatients }) => {
	let navigate = useNavigate();

	useEffect(() => {
		if (!patients) {
			let user_id = localStorage.getItem("user_id");

			if (!user_id) {
				navigate("/login", { replace: true });
			}

			axiosInstance.get(`patients?user_id=${user_id}`).then((res) => {
				setPatients(res.data);
			});
		}
	});

	return (
		<div>
			<div className="title mb-1rem">All Patients</div>

			<div className="add-patient-container">
				<Link
					className="p-12px pb-1rem w-8em small-button bg-blue no-u"
					to={"/add-patient/"}
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
