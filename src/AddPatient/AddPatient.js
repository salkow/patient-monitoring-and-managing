import "./AddPatient.css";

import { InputBox } from "../InputBox/InputBox.js";

import { useState } from "react";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import SignpostIcon from "@mui/icons-material/Signpost";
import FaceIcon from "@mui/icons-material/Face";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const AddPatient = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [street, setStreet] = useState("");
	const [number, setNumber] = useState("");
	const [city, setCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [amka, setAmka] = useState("");
	const [phone, setPhone] = useState("");

	const printVar = () => {
		console.log(firstName);
		console.log(lastName);
	};

	return (
		<div id="container">
			<form>
				<InputBox
					type="text"
					name="first-name"
					placeholder="First Name"
					setValue={setFirstName}
					icon={<PersonIcon className="input-icon" />}
				/>

				<br />

				<InputBox
					type="text"
					name="last-name"
					placeholder="Last Name"
					setValue={setLastName}
					icon={<PersonIcon className="input-icon" />}
				/>

				<br />

				<InputBox
					type="email"
					name="email"
					placeholder="Email"
					setValue={setEmail}
					icon={<EmailIcon className="input-icon" />}
				/>

				<br />

				<InputBox
					type="text"
					name="street"
					placeholder="Street"
					setValue={setStreet}
					icon={<SignpostIcon className="input-icon" />}
				/>

				<br />

				<InputBox
					type="text"
					name="city"
					placeholder="City"
					setValue={setCity}
					icon={<SignpostIcon className="input-icon" />}
				/>

				<br />
				<InputBox
					type="number"
					name="Postal Code"
					placeholder="Postal Code"
					setValue={setPostalCode}
					icon={<SignpostIcon className="input-icon" />}
				/>

				<br />
				<InputBox
					type="number"
					name="amka"
					placeholder="Social Security Number"
					setValue={setAmka}
					icon={<FaceIcon className="input-icon" />}
				/>

				<br />
				<InputBox
					type="tel"
					name="Phone"
					placeholder="Phone"
					setValue={setPhone}
					icon={<LocalPhoneIcon className="input-icon" />}
				/>

				<p>
					<button type="button" onClick={printVar}>
						Add Patient
					</button>
				</p>
			</form>
		</div>
	);
};

export default AddPatient;
