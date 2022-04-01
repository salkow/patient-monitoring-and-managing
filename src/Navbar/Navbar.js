import "./Navbar.css";

import { Link, useNavigate } from "react-router-dom";
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
				className="hor-center point-cursor"
				to="/"
			>
				<ArrowBackIosNewTwoToneIcon />
			</div>
			<div className="hor-center point-cursor" to="dashboard">
				<LogoutTwoToneIcon />
			</div>
		</nav>
	);
};

export default Navbar;
