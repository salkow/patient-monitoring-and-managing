import "./InputBox.css";

import KeyIcon from "@mui/icons-material/Key";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import { useState } from "react";

const InputBox = ({ type, name, placeholder, setValue, icon }) => {
	return (
		<div className="m-10px input-container">
			{icon}
			<input
				required
				className="input-item white bg-dark-green-blue"
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
};

const MultipleChoiceBox = ({
	name,
	placeholder,
	value,
	setValue,
	icon,
	options,
}) => {
	return (
		<div className="m-10px input-container">
			{icon}
			<select
				defaultValue={placeholder}
				name={name}
				className={`input-item bg-dark-green-blue ${
					value ? "white" : "grey"
				}`}
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

const PasswordBox = ({ name, setValue, extraClass }) => {
	const [passwordShown, setPasswordShown] = useState(false);

	const togglePassword = (e) => {
		e.preventDefault();
		setPasswordShown(!passwordShown);
	};

	return (
		<div className="m-10px input-container">
			<KeyIcon className="p-05rem bg-dark-green-blue" />

			<input
				className={extraClass + " input-item white bg-dark-green-blue"}
				type={passwordShown ? "text" : "password"}
				name={name}
				placeholder="Password"
				onChange={(e) => setValue(e.target.value)}
			/>

			{passwordShown ? (
				<RemoveRedEyeIcon
					className="p-05rem bg-dark-green-blue"
					onClick={(e) => {
						togglePassword(e);
					}}
				/>
			) : (
				<VisibilityOffIcon
					className="p-05rem bg-dark-green-blue"
					onClick={(e) => {
						togglePassword(e);
					}}
				/>
			)}
		</div>
	);
};

export { InputBox, PasswordBox, MultipleChoiceBox };
