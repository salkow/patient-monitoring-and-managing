const TextBox = ({ description, text, icon }) => {
	return (
		<div className="input-container bg-dark-green-blue m-10px flex-center">
			{icon}
			<div className="input-item pt-12px">
				<span className="grey">{description}</span>
				{": "}
				<span className="white">{text}</span>
			</div>
		</div>
	);
};

export default TextBox;
