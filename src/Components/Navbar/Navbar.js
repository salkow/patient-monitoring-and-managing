import "./Navbar.css";

import logo from "../../assets/wings-logo-4.png";

import { useNavigate, Link, Outlet } from "react-router-dom";

import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";

const Navbar = () => {
	let navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem("user_id");

		navigate("/login", { replace: true });
	};

	return (
		<>
			<nav id="nav" className="mb-1rem">
				<div
					onClick={() => {
						navigate(-1);
					}}
					className="pt-6px point-cursor small-button bg-blue"
				>
					<ArrowBackIosNewTwoToneIcon className="all-patient-card-icon" />
					<span className="hide-when-small">Go back</span>
				</div>

				<Link to="/">
					<img className="logo-image" src={logo} alt="Logo" />
				</Link>

				<div
					className="pt-6px point-cursor small-button bg-blue"
					onClick={() => {
						logout();
					}}
				>
					<LogoutTwoToneIcon className="all-patient-card-icon" />
					<span className="hide-when-small">Log Out</span>
				</div>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
