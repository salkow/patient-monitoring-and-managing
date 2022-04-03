import "./Patient.css";

import Chart from "../../Components/Chart/Chart.js";
import axiosInstance from "../../axios.js";
import Accordion from "../../Components/Accordion/Accordion.js";
import PatientDetails from "./PatientDetails";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import DeviceThermostatTwoToneIcon from "@mui/icons-material/DeviceThermostatTwoTone";

const Patient = () => {
	const params = useParams();

	const [info, setInfo] = useState();

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
				`realmeasurements?patient_id=${patient_id}&detail=hour&lastvalues=24`
			)
			.then((res) => {
				setPastDaysValues(res.data);
			});
	}, [params.id]);

	return (
		<div>
			{info && (
				<div className="title mb-1rem">
					{info.firstname} {info.lastname}
				</div>
			)}

			{pastDaysValues && (
				<>
					<div className="cards">
						{pastDaysValues["heart_rate"] && (
							<div className="bg-green-blue patient-stat m-1rem pt-8px pb-14px">
								<MonitorHeartIcon className="all-patient-card-icon" />
								<span className="patient-card-key">
									Heart Rate:{" "}
								</span>
								{
									pastDaysValues["heart_rate"][
										pastDaysValues["heart_rate"].length - 1
									].heart_rate
								}{" "}
								bpm
							</div>
						)}
						{pastDaysValues["bloodpressure"] && (
							<>
								<div className="bg-green-blue patient-stat m-1rem pt-8px pb-14px">
									<BloodtypeIcon className="all-patient-card-icon" />
									<span className="patient-card-key">
										SYS Blood Pressure:{" "}
									</span>
									{
										pastDaysValues["bloodpressure"][
											pastDaysValues["bloodpressure"]
												.length - 1
										].sys_blood_pressure
									}{" "}
									mm/Hg
								</div>

								<div className="bg-green-blue patient-stat m-1rem pt-8px pb-14px">
									<BloodtypeIcon className="all-patient-card-icon" />
									<span className="patient-card-key">
										DIA Blood Pressure:{" "}
									</span>
									{
										pastDaysValues["bloodpressure"][
											pastDaysValues["bloodpressure"]
												.length - 1
										].dia_blood_pressure
									}{" "}
									mm/Hg
								</div>
							</>
						)}
						{pastDaysValues["temperature"] && (
							<div className="bg-green-blue patient-stat m-1rem pt-8px pb-14px">
								<DeviceThermostatTwoToneIcon className="all-patient-card-icon" />
								<span className="patient-card-key">
									Temperature:{" "}
								</span>
								{
									pastDaysValues["temperature"][
										pastDaysValues["temperature"].length - 1
									].temperature
								}{" "}
								°C
							</div>
						)}
					</div>

					<div className="charts">
						{pastDaysValues["heart_rate"] && (
							<Accordion
								title="Heartrate"
								content={
									<Chart
										data={pastDaysValues["heart_rate"]}
										value_name="heart_rate"
										value_name_color={{
											heart_rate: "#cd1fde",
										}}
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
										value_name_color={{
											temperature: "#ad612a",
										}}
									/>
								}
							/>
						)}

						<Accordion
							title="Patient Details"
							content={<PatientDetails info={info} />}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Patient;
