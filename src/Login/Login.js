import "./Login.css";

import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const printVar = () => {
		console.log(email);
		console.log(password);
	};

	return (
		<div id="container">
			<form id="form_login">
				<p>
					<input
						type="text"
						className="input-box"
						placeholder="Username"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</p>
				<p>
					<input
						type="password"
						className="input-box"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</p>
				<p>
					<button type="button" onClick={printVar}>
						Log In
					</button>
				</p>
			</form>
		</div>
	);
};

export default Login;
