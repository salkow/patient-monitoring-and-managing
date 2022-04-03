import AllPatients from "./Pages/AllPatients/AllPatients.js";
import Patient from "./Pages/Patient/Patient.js";
import Login from "./Pages/Login/Login.js";
import AddPatient from "./Pages/AddPatient/AddPatient.js";
import Navbar from "./Components/Navbar/Navbar.js";

import "./Common.css";

import { useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
	const [patients, setPatients] = useState();

	document.body.style = "background: #202B33;color: white;";

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Navbar />}>
					<Route
						path="/"
						element={
							<AllPatients
								patients={patients}
								setPatients={setPatients}
							/>
						}
					/>

					<Route
						path="/add-patient"
						element={<AddPatient setPatients={setPatients} />}
					/>

					<Route path="/patient/:id" element={<Patient />} />
				</Route>
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
