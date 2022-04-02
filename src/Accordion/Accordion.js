import { useState } from "react";

import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";

import "./Accordion.css";

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="accordion">
			<div
				className="accordion-header"
				onClick={() => setIsActive(!isActive)}
			>
				<div className="accordion-title">{title}</div>
				<div className="accordion-icon">
					{isActive ? (
						<RemoveCircleOutlineTwoToneIcon />
					) : (
						<AddCircleOutlineTwoToneIcon />
					)}
				</div>
			</div>
			{isActive && <div className="accordion-content">{content}</div>}
		</div>
	);
};

export default Accordion;
