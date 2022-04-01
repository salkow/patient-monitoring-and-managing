import "./Navbar.css";

import logo from "../assets/wings-logo-4.png";

import { useNavigate } from "react-router-dom";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";

const Navbar = () => {
	let navigate = useNavigate();

	return (
		<nav id="nav">
			<div
				onClick={() => {
					navigate(-1);
				}}
				className="hor-center point-cursor nav-button"
				to="/"
			>
				<ArrowBackIosNewTwoToneIcon className="all-patient-card-icon" />
				Go back
			</div>

			<img className="logo-image" src={logo} alt="Logo" />

			<div className="hor-center point-cursor nav-button">
				<LogoutTwoToneIcon className="all-patient-card-icon" /> Log Out
			</div>
		</nav>
	);
};

export default Navbar;
