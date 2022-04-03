import { useState } from "react";

import ExpandLessTwoToneIcon from "@mui/icons-material/ExpandLessTwoTone";
import ExpandMoreTwoToneIcon from "@mui/icons-material/ExpandMoreTwoTone";

import "./Accordion.css";

const Accordion = ({ title, content }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="accordion mt-1rem bg-green-blue">
			<div
				className={"pt-1rem pb-1rem accordion-header"}
				onClick={() => setIsActive(!isActive)}
			>
				<div className="mt-5px ml-a">{title}</div>
				<div className="ml-a mr-1rem">
					{isActive ? (
						<ExpandLessTwoToneIcon />
					) : (
						<ExpandMoreTwoToneIcon />
					)}
				</div>
			</div>
			{isActive && <div className="accordion-content">{content}</div>}
		</div>
	);
};

export default Accordion;
