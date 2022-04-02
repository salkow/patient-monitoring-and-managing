import "./PatientDetails.css";

import TextBox from "./TextBox/TextBox";

import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";
import EmailIcon from "@mui/icons-material/Email";
import WcTwoToneIcon from "@mui/icons-material/WcTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import HealingIcon from "@mui/icons-material/Healing";

const PatientDetails = ({ info }) => {
	info = info_2;

	return (
		<div>
			<div className="group-items">
				<TextBox
					description={"Email"}
					text={info.email}
					icon={<EmailIcon className="input-icon" />}
				/>

				<TextBox
					description={"Address"}
					text={`${info.address_number} ${info.address_street}, ${info.address_city} ${info.address_postalcode}`}
					icon={<HomeTwoToneIcon className="input-icon" />}
				/>
			</div>
			<div className="group-items">
				<TextBox
					description={"Sex"}
					text={info.sex}
					icon={<WcTwoToneIcon className="input-icon" />}
				/>
				<TextBox
					description={"Age"}
					text={info.age}
					icon={<CalendarTodayTwoToneIcon className="input-icon" />}
				/>

				<TextBox
					description={"Phone"}
					text={info.phonenumber}
					icon={<LocalPhoneIcon className="input-icon" />}
				/>
			</div>
			<div className="group-items">
				<TextBox
					description={"Facility"}
					text={`${info["facility"].facility_name}, ${info["facility"].facility_address}`}
					icon={<LocalHospitalTwoToneIcon className="input-icon" />}
				/>
			</div>

			<div className="group-items">
				<TextBox
					description={"Conditions"}
					text={info.conditions.join(", ")}
					icon={<HealingIcon className="input-icon" />}
				/>
			</div>
		</div>
	);
};

export default PatientDetails;

const info_1 = {
	conditions: ["Heart", "Liver"],
};

const info_2 = {
	patient_id: 11,
	email: "jsmith@gmail.com",
	conditions: ["ATROPHY"],
	sex: "Male",
	address_street: "Syggrou",
	address_number: "189",
	address_city: "Athens",
	address_postalcode: "17673",
	latitude: 0.0,
	longitude: 0.0,
	user: { user_id: 19 },
	firstname: "John",
	lastname: "Smith",
	phonenumber: "+306991314142",
	age: 80,
	facility: {
		facility_id: 1,
		facility_name: "KAPH DIMOU VYRONA",
		facility_address: "AGIAS TRIADAS 13",
	},
	medicalpersonnel: [
		{
			medicalperson_id: 1,
			email: "ty@gmail.com",
			specialty: "Cardiologist",
			hospitals: "Evaggelismos",
			user: { user_id: 16 },
			address: "Athens",
			firstname: "Nickolas",
			lastname: "Perry",
		},
		{
			medicalperson_id: 2,
			email: "zt@gmail.com",
			specialty: "Cardiologist /MD",
			hospitals: "Evaggelismos",
			user: { user_id: 20 },
			address: "Athens",
			firstname: "Elian",
			lastname: "Sherman",
		},
		{
			medicalperson_id: 6,
			email: "doctor@why.com",
			hospitals: "Grey Sloan Memorial",
			address: "Home 1",
			firstname: "Doctor",
			lastname: "WHy",
		},
		{
			medicalperson_id: 5,
			email: "doctor@who.com",
			hospitals: "General Hospital, Hospital One",
			address: "Home 1",
			firstname: "Manos",
			lastname: "Who",
		},
	],
	pending_alerts: 30,
};
