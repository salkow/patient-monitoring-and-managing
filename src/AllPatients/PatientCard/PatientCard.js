import "./PatientCard.css";

import Avatar from "@mui/material/Avatar";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import SpeedIcon from "@mui/icons-material/Speed";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import ListIcon from "@mui/icons-material/List";

import { Link } from "react-router-dom";

const PatientCard = ({
	patient_id,
	firstName,
	lastName,
	heart_rate,
	sex,
	sys_blood_pressure,
	dia_blood_pressure,
	z_accel,
}) => {
	return (
		<div className="all-patient-card rounded-corners">
			<span className="patient-card-name center-text">
				<h3>
					{firstName} {lastName}{" "}
				</h3>
			</span>

			<span className="center-text bm1-5">
				{sex === "Male" || sex === "Άντρας" ? (
					<ManIcon className="all-patient-card-icon" />
				) : (
					<WomanIcon className="all-patient-card-icon" />
				)}
				{sex}
			</span>

			{heart_rate && (
				<span>
					<MonitorHeartIcon className="all-patient-card-icon" />
					<span className="patient-card-key">Heart Rate: </span>
					{heart_rate} bpm
					<hr className="patient-card-line" />
				</span>
			)}

			{sys_blood_pressure && dia_blood_pressure && (
				<span>
					<BloodtypeIcon className="all-patient-card-icon" />
					<span className="patient-card-key">Blood Pressure: </span>
					{sys_blood_pressure} / {dia_blood_pressure}
					<hr className="patient-card-line" />
				</span>
			)}
			{z_accel && (
				<span>
					<SpeedIcon className="all-patient-card-icon" />
					<span className="patient-card-key">Z Accel: </span>
					{z_accel} m/s
					<sup>2</sup>
					<hr className="patient-card-line" />
				</span>
			)}

			<div className="bottom-right">
				<Link to={`patient/${patient_id}`}>
					<Avatar sx={{ bgcolor: "blue" }} className="shadow">
						<ListIcon />
					</Avatar>
				</Link>
			</div>
		</div>
	);
};

export default PatientCard;
