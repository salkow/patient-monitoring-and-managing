import TextBox from "../../Components/TextBox/TextBox";

import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";
import EmailIcon from "@mui/icons-material/Email";
import WcTwoToneIcon from "@mui/icons-material/WcTwoTone";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import HealingIcon from "@mui/icons-material/Healing";

const PatientDetails = ({ info }) => {
	return (
		<div>
			{info && (
				<>
					<div className="group-items">
						<TextBox
							description={"Email"}
							text={info.email}
							icon={<EmailIcon className="p-05rem" />}
						/>

						<TextBox
							description={"Address"}
							text={`${info.address_number} ${info.address_street}, ${info.address_city} ${info.address_postalcode}`}
							icon={<HomeTwoToneIcon className="p-05rem" />}
						/>
					</div>
					<div className="group-items">
						<TextBox
							description={"Sex"}
							text={info.sex}
							icon={<WcTwoToneIcon className="p-05rem" />}
						/>
						<TextBox
							description={"Age"}
							text={info.age}
							icon={
								<CalendarTodayTwoToneIcon className="p-05rem" />
							}
						/>

						<TextBox
							description={"Phone"}
							text={info.phonenumber}
							icon={<LocalPhoneIcon className="p-05rem" />}
						/>
					</div>
					<div className="group-items">
						<TextBox
							description={"Facility"}
							text={`${info["facility"].facility_name}, ${info["facility"].facility_address}`}
							icon={
								<LocalHospitalTwoToneIcon className="p-05rem" />
							}
						/>
					</div>

					{info.conditions && (
						<div className="group-items">
							<TextBox
								description={"Conditions"}
								text={info.conditions.join(", ")}
								icon={<HealingIcon className="p-05rem" />}
							/>
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default PatientDetails;
