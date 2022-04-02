import AllPatients from "./AllPatients/AllPatients.js";
import Patient from "./Patient/Patient.js";
import Login from "./Login/Login.js";
import AddPatient from "./AddPatient/AddPatient.js";
import Navbar from "./Navbar/Navbar.js";

import { useState } from "react";

import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

function App() {
	const [patients, setPatients] = useState();

	return (
		<BrowserRouter>
			{window.location.pathname !== "/login" && <Navbar />}
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route
					path="/"
					element={
						<AllPatients
							patients={patients}
							setPatients={setPatients}
						/>
					}
				/>
				<Route path="/patient/:id" element={<Patient />} />
				<Route
					path="/add-patient"
					element={<AddPatient setPatients={setPatients} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
