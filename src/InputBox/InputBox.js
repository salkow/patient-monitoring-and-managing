import "./InputBox.css";

import KeyIcon from "@mui/icons-material/Key";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { useState } from "react";

const InputBox = ({ type, name, placeholder, setValue, icon }) => {
	return (
		<div className="input-container">
			{icon}
			<input
				required
				className="input-item"
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

const MultipleChoiceBox = ({ name, placeholder, setValue, icon, options }) => {
	return (
		<div className="input-container">
			{icon}
			<select
				defaultValue={placeholder}
				name={name}
				className="input-item select-item white"
				onChange={(e) => setValue(e.target.value)}
			>
				<option disabled className="hide">
					{placeholder}
				</option>
				{Object.entries(options).map(([key, value]) => (
					<option value={key} key={key}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
};

const PasswordBox = ({ name, setValue, classNamee }) => {
	const [passwordShown, setPasswordShown] = useState(false);

	const togglePassword = (e) => {
		e.preventDefault();
		setPasswordShown(!passwordShown);
	};

	return (
		<div className="input-container">
			<KeyIcon className="input-icon" />

			<input
				className={classNamee + " input-item"}
				style={{ padding: "0.5em" }}
				type={passwordShown ? "text" : "password"}
				name={name}
				placeholder="Password"
				onChange={(e) => setValue(e.target.value)}
			/>

			{/* {passwordShown ? (
				<RemoveRedEyeIcon
					className="input-icon"
					onClick={(e) => {
						togglePassword(e);
					}}
				/>
			) : (
				<VisibilityOffIcon
					className="input-icon"
					onClick={(e) => {
						togglePassword(e);
					}}
				/>
			)} */}
		</div>
	);
};

export { InputBox, PasswordBox, MultipleChoiceBox };
