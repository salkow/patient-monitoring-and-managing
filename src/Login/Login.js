import "./Login.css";

import Title from "../Title/Title.js";

import { useNavigate } from "react-router-dom";

import axiosInstance from "../axios.js";

import PersonIcon from "@mui/icons-material/Person";

import { InputBox, PasswordBox } from "../InputBox/InputBox.js";

import { useState } from "react";

import logo from "../assets/wings-logo-4.png";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [wrongCredentials, setWrongCredentials] = useState(false);

	let navigate = useNavigate();

	const login = (e) => {
		e.preventDefault();

		axiosInstance
			.post(`users/login`, {
				username,
				password,
			})
			.catch(() => {
				setWrongCredentials(true);
			})
			.then((res) => {
				localStorage.setItem("user_id", res.data.user_id);
				navigate("/", { replace: true });
			});
	};

	return (
		<div id="container">
			<img id="logo-image" src={logo} alt="Logo" />

			<Title text="Login" />

			{wrongCredentials && (
				<h3 className="red">
					Incorrect username or password, please try again.
				</h3>
			)}

			<form>
				<InputBox
					classNamee="login-input"
					type="text"
					name="username"
					placeholder="User Name"
					setValue={setUsername}
					icon={<PersonIcon className="input-icon" />}
				/>

				<br />

				<PasswordBox
					classNamee="login-input"
					name="password"
					setValue={setPassword}
				/>

				<br />

				<div style={{ textAlign: "center" }}>
					<button
						className="login-button"
						type="button"
						onClick={(e) => login(e)}
					>
						Log In
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
