import "./TextBox.css";

const TextBox = ({ description, text, icon }) => {
	return (
		<div className="input-container flex-center">
			{icon}
			<div style={{ paddingTop: "10px" }} className="input-item">
				{description}
				{": "}
				<span style={{ color: "black" }}>{text}</span>
			</div>
		</div>
	);
};

export default TextBox;
