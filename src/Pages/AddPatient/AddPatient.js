import "./AddPatient.css";

import axiosInstance from "../../axios";
import {
	InputBox,
	MultipleChoiceBox,
} from "../../Components/InputBox/InputBox.js";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import WcTwoToneIcon from "@mui/icons-material/WcTwoTone";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SignpostIcon from "@mui/icons-material/Signpost";
import FaceIcon from "@mui/icons-material/Face";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

const AddPatient = ({ setPatients }) => {
	useEffect(() => {
		axiosInstance.get("facilities").then((res) => {
			setAllFacilities(res.data);
		});
	}, []);

	const parseFacilities = () => {
		let facilities = {};

		allFacilities.map((facility) => {
			facilities[facility.facility_id] = facility.facility_name;
			return facilities;
		});

		return facilities;
	};

	const [allFacilities, setAllFacilities] = useState([]);

	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [street, setStreet] = useState("");
	const [number, setNumber] = useState();
	const [city, setCity] = useState();
	const [postalCode, setPostalCode] = useState();
	const [amka, setAmka] = useState();
	const [phone, setPhone] = useState();
	const [sex, setSex] = useState();
	const [age, setAge] = useState();
	const [facility, setFacility] = useState();

	const [showMissingValuesError, setShowMissignValuesError] = useState(false);

	let navigate = useNavigate();

	const addPatient = (e) => {
		e.preventDefault();

		if (
			!firstName ||
			!lastName ||
			!email ||
			!street ||
			!number ||
			!city ||
			!postalCode ||
			!amka ||
			!sex ||
			!facility
		) {
			setShowMissignValuesError(true);
		} else {
			axiosInstance.post("patients", {
				firstname: firstName,
				lastname: lastName,
				email,
				facility_id: facility,
				address_street: street,
				address_number: number,
				address_city: city,
				address_postalcode: postalCode,
				phonenumber: phone,
				sex,
				age,
				amka,
				ext_patient: true,
			});

			setPatients();
			navigate("/", { replace: true });
		}
	};

	return (
		<div className="add-patient-container">
			<div className="title mb-1rem">Add Patient</div>

			<form>
				{showMissingValuesError && (
					<h3 className="red m-10px">
						Please fill all the required fields.
					</h3>
				)}

				<div className="group-items">
					<InputBox
						type="text"
						name="first-name"
						placeholder="First Name *"
						setValue={setFirstName}
						icon={
							<PersonIcon className="p-05rem bg-dark-green-blue" />
						}
					/>
					<InputBox
						type="text"
						name="last-name"
						placeholder="Last Name *"
						setValue={setLastName}
						icon={
							<PersonIcon className="p-05rem bg-dark-green-blue" />
						}
					/>
				</div>
				<div className="group-items">
					<InputBox
						type="email"
						name="email"
						placeholder="Email *"
						setValue={setEmail}
						icon={
							<EmailIcon className="p-05rem bg-dark-green-blue" />
						}
					/>

					<MultipleChoiceBox
						name="Facility Name"
						placeholder="Facility Name *"
						value={facility}
						setValue={setFacility}
						icon={
							<LocalHospitalTwoToneIcon className="p-05rem bg-dark-green-blue" />
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
						icon={
							<SignpostIcon className="p-05rem bg-dark-green-blue" />
						}
					/>

					<InputBox
						type="number"
						name="numbre"
						placeholder="Street Number *"
						setValue={setNumber}
						icon={
							<SignpostIcon className="p-05rem bg-dark-green-blue" />
						}
					/>

					<InputBox
						type="text"
						name="city"
						placeholder="City *"
						setValue={setCity}
						icon={
							<HomeTwoToneIcon className="p-05rem bg-dark-green-blue" />
						}
					/>
					<InputBox
						type="number"
						name="postal_code"
						placeholder="Postal Code *"
						setValue={setPostalCode}
						icon={
							<HomeTwoToneIcon className="p-05rem bg-dark-green-blue" />
						}
					/>
				</div>
				<div className="group-items">
					<InputBox
						type="number"
						name="age"
						placeholder="Age * "
						setValue={setAge}
						icon={
							<CalendarTodayTwoToneIcon className="p-05rem bg-dark-green-blue" />
						}
					/>

					<MultipleChoiceBox
						name="sex"
						placeholder="Sex *"
						value={sex}
						setValue={setSex}
						icon={
							<WcTwoToneIcon className="p-05rem bg-dark-green-blue" />
						}
						options={{ Male: "Male", Female: "Female" }}
					/>

					<InputBox
						type="number"
						name="amka"
						placeholder="Social Security Number *"
						setValue={setAmka}
						icon={
							<FaceIcon className="p-05rem bg-dark-green-blue" />
						}
					/>
					<InputBox
						type="tel"
						name="Phone"
						placeholder="Phone"
						setValue={setPhone}
						icon={
							<LocalPhoneIcon className="p-05rem bg-dark-green-blue" />
						}
					/>
				</div>

				<div className="m-10px grey">
					Every field with * is required.
				</div>
				<div className="center">
					<button
						className="button bg-blue"
						type="submit"
						onClick={(e) => {
							addPatient(e);
						}}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddPatient;
