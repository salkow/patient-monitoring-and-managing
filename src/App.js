import AllPatients from "./AllPatients/AllPatients.js";
import Patient from "./Patient/Patient.js";
import Login from "./Login/Login.js";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AllPatients />} />
				<Route path="/login" element={<Login />} />
				<Route path="/patient/:id" element={<Patient />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
