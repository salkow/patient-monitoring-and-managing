import AllPatients from "./AllPatients/AllPatients.js";
import Patient from "./Patient/Patient.js";
import Login from "./Login/Login.js";
import AddPatient from "./AddPatient/AddPatient.js";
import Navbar from "./Navbar/Navbar.js";

import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			{window.location.pathname !== "/login" && <Navbar />}
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<AllPatients />} />
				<Route path="/patient/:id" element={<Patient />} />
				<Route path="/add-patient" element={<AddPatient />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
