import "./Login.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axiosInstance from "../../axios.js";
import { InputBox, PasswordBox } from "../../Components/InputBox/InputBox.js";

import PersonIcon from "@mui/icons-material/Person";

import logo from "../../assets/wings-logo-4.png";

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
		<div className="login-container">
			<img className="pt-5px" src={logo} alt="Logo" />

			<div className="title mb-1rem">Login</div>
			<div>
				{wrongCredentials && (
					<h3 className="red">
						Incorrect username or password, please try again.
					</h3>
				)}

				<form>
					<InputBox
						className="login-input"
						type="text"
						name="username"
						placeholder="User Name"
						setValue={setUsername}
						icon={
							<PersonIcon className="p-05rem bg-dark-green-blue" />
						}
					/>

					<br />

					<PasswordBox
						extraClass="login-input"
						name="password"
						setValue={setPassword}
					/>

					<br />

					<div className="center">
						<button
							className="button bg-blue"
							type="submit"
							onClick={(e) => login(e)}
						>
							Log In
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
