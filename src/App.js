import AllPatients from "./AllPatients/AllPatients.js";
import Patient from "./Patient/Patient.js";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AllPatients />} />
				<Route path="/patient/:id" element={<Patient />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
