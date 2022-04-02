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
		</div>
	);
};

export default Patient;

// const latestValues = {
// 	heart_rate: [
// 		{
// 			timestamp: "2021-11-11 12:19:46",
// 			patient_id: 11,
// 			heart_rate: "80",
// 		},
// 	],
// 	bloodpressure: [
// 		{
// 			timestamp: "2021-11-11 12:19:46",
// 			patient_id: 11,
// 			sys_blood_pressure: "156",
// 			dia_blood_pressure: "120",
// 		},
// 	],
// 	temperature: [
// 		{
// 			timestamp: "2021-11-22 18:13:25",
// 			patient_id: 11,
// 			temperature: "36.3",
// 		},
// 	],
// 	patient_id: 11,
// };

const pastDaysValues = {
	heart_rate: [
		{ timestamp: "2021-11-11 12:00:00", patient_id: 11, heart_rate: "80" },
		{ timestamp: "2021-11-10 18:00:00", patient_id: 11, heart_rate: "80" },
		{ timestamp: "2021-11-04 13:00:00", patient_id: 11, heart_rate: "82" },
		{ timestamp: "2021-09-29 10:00:00", patient_id: 11, heart_rate: "61" },
		{ timestamp: "2021-09-28 15:00:00", patient_id: 11, heart_rate: "81" },
		{ timestamp: "2021-09-27 15:00:00", patient_id: 11, heart_rate: "80" },
		{ timestamp: "2021-09-27 14:00:00", patient_id: 11, heart_rate: "88" },
		{ timestamp: "2021-09-27 11:00:00", patient_id: 11, heart_rate: "94" },
		{ timestamp: "2021-09-13 11:00:00", patient_id: 11, heart_rate: "80" },
		{ timestamp: "2021-06-08 14:00:00", patient_id: 11, heart_rate: "79" },
		{ timestamp: "2021-02-10 12:00:00", patient_id: 11, heart_rate: "84" },
		{ timestamp: "2020-12-02 10:00:00", patient_id: 11, heart_rate: "88" },
		{ timestamp: "2020-10-01 13:00:00", patient_id: 11, heart_rate: "70" },
		{ timestamp: "2020-09-30 18:00:00", patient_id: 11, heart_rate: "70" },
		{ timestamp: "2020-07-23 15:00:00", patient_id: 11, heart_rate: "75" },
		{ timestamp: "2020-07-23 13:00:00", patient_id: 11, heart_rate: "66" },
		{ timestamp: "2020-07-10 12:00:00", patient_id: 11, heart_rate: "81" },
		{ timestamp: "2020-07-09 15:00:00", patient_id: 11, heart_rate: "71" },
		{ timestamp: "2020-07-09 13:00:00", patient_id: 11, heart_rate: "73" },
		{ timestamp: "2020-07-08 10:00:00", patient_id: 11, heart_rate: "89" },
		{ timestamp: "2020-07-07 18:00:00", patient_id: 11, heart_rate: "71" },
		{ timestamp: "2020-07-03 18:00:00", patient_id: 11, heart_rate: "76" },
		{ timestamp: "2020-07-02 17:00:00", patient_id: 11, heart_rate: "80" },
		{ timestamp: "2020-07-02 16:00:00", patient_id: 11, heart_rate: "80" },
	],
	bloodpressure: [
		{
			timestamp: "2021-11-11 12:00:00",
			patient_id: 11,
			sys_blood_pressure: "156",
			dia_blood_pressure: "120",
		},
		{
			timestamp: "2021-11-10 18:00:00",
			patient_id: 11,
			sys_blood_pressure: "155",
			dia_blood_pressure: "118",
		},
		{
			timestamp: "2021-11-04 13:00:00",
			patient_id: 11,
			sys_blood_pressure: "125",
			dia_blood_pressure: "79",
		},
		{
			timestamp: "2021-09-29 10:00:00",
			patient_id: 11,
			sys_blood_pressure: "122",
			dia_blood_pressure: "78",
		},
		{
			timestamp: "2021-09-28 15:00:00",
			patient_id: 11,
			sys_blood_pressure: "122",
			dia_blood_pressure: "84",
		},
		{
			timestamp: "2021-09-27 15:00:00",
			patient_id: 11,
			sys_blood_pressure: "116",
			dia_blood_pressure: "80",
		},
		{
			timestamp: "2021-09-27 14:00:00",
			patient_id: 11,
			sys_blood_pressure: "140",
			dia_blood_pressure: "94",
		},
		{
			timestamp: "2021-09-27 11:00:00",
			patient_id: 11,
			sys_blood_pressure: "139",
			dia_blood_pressure: "100",
		},
		{
			timestamp: "2021-09-13 11:00:00",
			patient_id: 11,
			sys_blood_pressure: "124",
			dia_blood_pressure: "92",
		},
		{
			timestamp: "2021-06-08 14:00:00",
			patient_id: 11,
			sys_blood_pressure: "143",
			dia_blood_pressure: "106",
		},
		{
			timestamp: "2021-02-10 12:00:00",
			patient_id: 11,
			sys_blood_pressure: "143",
			dia_blood_pressure: "102",
		},
		{
			timestamp: "2020-12-02 10:00:00",
			patient_id: 11,
			sys_blood_pressure: "120",
			dia_blood_pressure: "86",
		},
		{
			timestamp: "2020-10-01 13:00:00",
			patient_id: 11,
			sys_blood_pressure: "136",
			dia_blood_pressure: "96",
		},
		{
			timestamp: "2020-09-30 18:00:00",
			patient_id: 11,
			sys_blood_pressure: "142",
			dia_blood_pressure: "104",
		},
		{
			timestamp: "2020-07-23 15:00:00",
			patient_id: 11,
			sys_blood_pressure: "128",
			dia_blood_pressure: "97",
		},
		{
			timestamp: "2020-07-23 13:00:00",
			patient_id: 11,
			sys_blood_pressure: "134",
			dia_blood_pressure: "89",
		},
		{
			timestamp: "2020-07-10 12:00:00",
			patient_id: 11,
			sys_blood_pressure: "145",
			dia_blood_pressure: "98",
		},
		{
			timestamp: "2020-07-09 15:00:00",
			patient_id: 11,
			sys_blood_pressure: "139",
			dia_blood_pressure: "91",
		},
		{
			timestamp: "2020-07-09 13:00:00",
			patient_id: 11,
			sys_blood_pressure: "134",
			dia_blood_pressure: "91",
		},
		{
			timestamp: "2020-07-08 10:00:00",
			patient_id: 11,
			sys_blood_pressure: "135",
			dia_blood_pressure: "95",
		},
		{
			timestamp: "2020-07-07 18:00:00",
			patient_id: 11,
			sys_blood_pressure: "140",
			dia_blood_pressure: "96",
		},
		{
			timestamp: "2020-07-02 17:00:00",
			patient_id: 11,
			sys_blood_pressure: "131",
			dia_blood_pressure: "92",
		},
		{
			timestamp: "2020-07-02 16:00:00",
			patient_id: 11,
			sys_blood_pressure: "137",
			dia_blood_pressure: "90",
		},
		{
			timestamp: "2020-07-01 11:00:00",
			patient_id: 11,
			sys_blood_pressure: "128",
			dia_blood_pressure: "82",
		},
	],
	temperature: [
		{
			timestamp: "2021-11-22 18:00:00",
			patient_id: 11,
			temperature: "36.3",
		},
		{
			timestamp: "2021-11-22 16:00:00",
			patient_id: 11,
			temperature: "36.5",
		},
		{
			timestamp: "2021-11-22 15:00:00",
			patient_id: 11,
			temperature: "37.4",
		},
		{
			timestamp: "2021-11-19 20:00:00",
			patient_id: 11,
			temperature: "36.8",
		},
		{
			timestamp: "2021-11-19 10:00:00",
			patient_id: 11,
			temperature: "35.7",
		},
		{
			timestamp: "2021-11-18 09:00:00",
			patient_id: 11,
			temperature: "36.4",
		},
		{
			timestamp: "2021-11-17 17:00:00",
			patient_id: 11,
			temperature: "37.3",
		},
		{
			timestamp: "2021-11-17 15:00:00",
			patient_id: 11,
			temperature: "37.3",
		},
		{
			timestamp: "2021-11-17 10:00:00",
			patient_id: 11,
			temperature: "37.2",
		},
		{
			timestamp: "2021-11-16 22:00:00",
			patient_id: 11,
			temperature: "36.4",
		},
		{
			timestamp: "2021-11-16 21:00:00",
			patient_id: 11,
			temperature: "37.3",
		},
		{
			timestamp: "2021-11-16 16:00:00",
			patient_id: 11,
			temperature: "37.1",
		},
	],
	patient_id: 11,
};