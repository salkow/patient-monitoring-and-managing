import "./Patient.css";

import Chart from "./Chart/Chart.js";

import axiosInstance from "../axios.js";

import Accordion from "../Accordion/Accordion.js";

import PatientStat from "./PatientStat/PatientStat.js";

import PatientDetails from "./PatientDetails/PatientDetails";

import Title from "../Title/Title.js";

import { useParams } from "react-router-dom";

import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import DeviceThermostatTwoToneIcon from "@mui/icons-material/DeviceThermostatTwoTone";
import { useEffect, useState } from "react";

const Patient = () => {
	const params = useParams();

	const [info, setInfo] = useState();

	const [latestValues, setLatestValues] = useState();
	const [pastDaysValues, setPastDaysValues] = useState();

	useEffect(() => {
		const patient_id = params.id;

		axiosInstance
			.get(`patients?patient_id=${patient_id}&details=true`)
			.then((res) => {
				setInfo(res.data[0]);
			});

		axiosInstance
			.get(
				`realmeasurements?patient_id=${patient_id}&detail=second&lastvalues=1`
			)
			.then((res) => {
				setLatestValues(res.data);
			});

		axiosInstance
			.get(
				`realmeasurements?patient_id=${patient_id}&detail=hour&lastvalues=24`
			)
			.then((res) => {
				setPastDaysValues(res.data);
			});

		// TODO: Set user_id from login.
	}, []);

	return (
		<div>
			{info && (
				<Title text={`Patient: ${info.firstname} ${info.lastname}`} />
			)}

			{latestValues && (
				<div className="cards">
					{latestValues.heart_rate && (
						<PatientStat
							icon={
								<MonitorHeartIcon className="all-patient-card-icon" />
							}
							text={`Heart Rate: ${latestValues.heart_rate[0].heart_rate} bpm`}
						/>
					)}

					{latestValues.bloodpressure && (
						<>
							<PatientStat
								icon={
									<BloodtypeIcon className="all-patient-card-icon" />
								}
								text={`SYS Blood Pressure: ${latestValues.bloodpressure[0].sys_blood_pressure} mm/Hg`}
							/>

							<PatientStat
								icon={
									<BloodtypeIcon className="all-patient-card-icon" />
								}
								text={`DIA Blood Pressure: ${latestValues.bloodpressure[0].dia_blood_pressure} mm/Hg`}
							/>
						</>
					)}

					{latestValues.temperature && (
						<PatientStat
							icon={
								<DeviceThermostatTwoToneIcon className="all-patient-card-icon" />
							}
							text={`Temperature: 
							${latestValues.temperature[0].temperature} °C`}
						/>
					)}
				</div>
			)}

			{pastDaysValues && (
				<div className="charts">
					{pastDaysValues["heart_rate"] && (
						<Accordion
							title="Heartrate"
							content={
								<Chart
									data={pastDaysValues["heart_rate"]}
									value_name="heart_rate"
									value_name_color={{ heart_rate: "blue" }}
								/>
							}
						/>
					)}

					{pastDaysValues["bloodpressure"] && (
						<Accordion
							title="Bloddpressure"
							content={
								<Chart
									data={pastDaysValues["bloodpressure"]}
									value_name_color={{
										sys_blood_pressure: "green",
										dia_blood_pressure: "orange",
									}}
								/>
							}
						/>
					)}

					{pastDaysValues["temperature"] && (
						<Accordion
							title={"Temperature"}
							content={
								<Chart
									data={pastDaysValues["temperature"]}
									value_name_color={{ temperature: "red" }}
								/>
							}
						/>
					)}

					<Accordion
						title="Patient Details"
						content={<PatientDetails info={info} />}
					/>
				</div>
			)}
		</div>
	);
};

export default Patient;