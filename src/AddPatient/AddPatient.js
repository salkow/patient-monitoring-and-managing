import "./AddPatient.css";

import { InputBox, MultipleChoiceBox, DateBox } from "../InputBox/InputBox.js";

import Title from "../Title/Title.js";

import { useState } from "react";

import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import WcTwoToneIcon from "@mui/icons-material/WcTwoTone";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SignpostIcon from "@mui/icons-material/Signpost";
import FaceIcon from "@mui/icons-material/Face";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

let fac = [
	{
		facility_id: 1,
		facility_name: "KAPH DIMOU VYRONA",
		facility_address: "AGIAS TRIADAS 13",
	},
	{
		facility_id: 2,
		facility_name: "SAPH DIMOU VYRONA",
		facility_address: "GAGIAS TRIADAS 13",
	},
];

const AddPatient = () => {
	const parseFacilities = () => {
		let facilities = {};

		fac.map((facility) => {
			facilities[facility.facility_id] = facility.facility_name;
		});

		return facilities;
	};

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [street, setStreet] = useState("");
	const [number, setNumber] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [amka, setAmka] = useState("");
	const [phone, setPhone] = useState("");
	const [sex, setSex] = useState("");
	const [age, setAge] = useState("");

	const printVar = () => {
		// console.log(firstName);
		// console.log(lastName);
	};

	return (
		<div id="container">
			<Title text="Add Patient" />

			<form>
				<div className="group-items">
					<InputBox
						type="text"
						name="first-name"
						placeholder="First Name *"
						setValue={setFirstName}
						icon={<PersonIcon className="input-icon" />}
					/>
					<InputBox
						type="text"
						name="last-name"
						placeholder="Last Name *"
						setValue={setLastName}
						icon={<PersonIcon className="input-icon" />}
					/>
				</div>

				<div className="group-items">
					<InputBox
						type="email"
						name="email"
						placeholder="Email *"
						setValue={setEmail}
						icon={<EmailIcon className="input-icon" />}
					/>

					<MultipleChoiceBox
						name="Facility Name"
						placeholder="Facility Name *"
						setValue={setSex}
						icon={
							<LocalHospitalTwoToneIcon className="input-icon" />
						}
						options={parseFacilities()}
					/>
				</div>

				<div className="group-items">
					<InputBox
						type="text"
						name="street"
						placeholder="Street *"
						setValue={setStreet}
						icon={<SignpostIcon className="input-icon" />}
					/>

					<InputBox
						type="number"
						name="numbre"
						placeholder="Number *"
						setValue={setNumber}
						icon={<SignpostIcon className="input-icon" />}
					/>

					<InputBox
						type="text"
						name="city"
						placeholder="City *"
						setValue={setCity}
						icon={<HomeTwoToneIcon className="input-icon" />}
					/>
					<InputBox
						type="number"
						name="postal_code"
						placeholder="Postal Code *"
						setValue={setPostalCode}
						icon={<HomeTwoToneIcon className="input-icon" />}
					/>
				</div>

				<div className="group-items">
					<InputBox
						type="number"
						name="age"
						placeholder="Age * "
						setValue={setAge}
						icon={
							<CalendarTodayTwoToneIcon className="input-icon" />
						}
					/>

					<MultipleChoiceBox
						name="sex"
						placeholder="Sex *"
						setValue={setSex}
						icon={<WcTwoToneIcon className="input-icon" />}
						options={{ Male: "Male", Female: "Female" }}
					/>

					<InputBox
						type="number"
						name="amka"
						placeholder="Social Security Number *"
						setValue={setAmka}
						icon={<FaceIcon className="input-icon" />}
					/>
					<InputBox
						type="tel"
						name="Phone"
						placeholder="Phone"
						setValue={setPhone}
						icon={<LocalPhoneIcon className="input-icon" />}
					/>
				</div>
				<div style={{ textAlign: "center" }}>
					<button
						className="login-button"
						type="button"
						onClick={printVar}
					>
						Add Patient
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddPatient;
