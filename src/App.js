import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentRegistration from "./Components/StudentRegistration";
import { ViewStudents } from "./Components/ViewStudents";
import BukolaPage from "./Components/BukolaPage";
import HomeView from "./Components/HomeView";
import UbaniPage from "./Components/UbaniPage";
import KelechiPage from "./Components/KelechiPage";
import AdminCreateQuestion from "./Components/Questions/AdminCreateQuestion";
import AllQuestion from "./Components/Questions/AllQuestions";
import EntryUserPage from "./Components/EnteryUserPage";
import { useRecoilValue } from "recoil";
import { UserData } from "./Components/Global/GlobalState";
import { useState } from "react";

function App() {
	const user = useRecoilValue(UserData);

	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<StudentRegistration />} />
					<Route path='/studentview' element={<HomeView />} />
					<Route path='/logic-iqtest-page' element={<EntryUserPage />} />
					<Route
						path='/student-iq-test-457erhfbdr46364783-codelab-intake-578349ffdnbghg-question'
						element={<AllQuestion />}
					/>
					<Route path='/admin-createquest' element={<AdminCreateQuestion />} />
					<Route path='/allintake-students' element={<ViewStudents />} />
					<Route path='/admin-psychologicalPage' element={<BukolaPage />} />
					<Route path='/Admin-LogicPage' element={<UbaniPage />} />
					<Route path='/admin-leadershipPage' element={<KelechiPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App
