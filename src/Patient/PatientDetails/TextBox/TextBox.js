import "./TextBox.css";

const TextBox = ({ text, icon }) => {
	return (
		<div className="input-container">
			{icon}
			<div style={{ paddingTop: "10px" }} className="input-item">
				{text}
			</div>
		</div>
	);
};

export default TextBox;
