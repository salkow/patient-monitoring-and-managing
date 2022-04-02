import "./PatientDetails.css";

import TextBox from "./TextBox/TextBox";

import EmailIcon from "@mui/icons-material/Email";
import WcTwoToneIcon from "@mui/icons-material/WcTwoTone";

const PatientDetails = ({ info }) => {
	return (
		<div>
			<TextBox
				text={info.email}
				icon={<EmailIcon className="input-icon" />}
			/>
			<TextBox
				text={info.sex}
				icon={<WcTwoToneIcon className="input-icon" />}
			/>
		</div>
	);
};

export default PatientDetails;

const info_1 = {
	email: "jsmith@gmail.com",
	conditions: ["Heart", "Liver"],
	sex: "Male",
	address_street: "Syggrou",
	address_number: "189",
	address_city: "Athens",
	address_postalcode: "17673",
	phonenumber: "6991614152",
	age: 40,
	facility: {
		facility_id: 1,
		facility_name: "KAPH DIMOU VYRONA",
		facility_address: "AGIAS TRIADAS 13",
	},
};
