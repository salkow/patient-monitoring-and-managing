import "./PatientStat.css";

const PatientStat = ({ text, icon }) => {
	return (
		<div className="patient-stat">
			{icon} {text}
		</div>
	);
};

export default PatientStat;
