import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dashboard from "src/views/App/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Sidebar from "src/views/App/components/Sidebar";
import NavBar from "src/views/App/components/NavBar";

import AllModels from "src/views/App/AllModels";
import ModelDetails from "src/views/App/ModelDetails";


function Router() {
	const userData = useSelector((state: any) => state.user);
	const navigate = useNavigate();
	useEffect(() => {
		if (!userData.token) {
			navigate("/login");
		}
	}, [userData]);
	if (!userData.token) return null;
	return (
		<div>
			<ToastContainer autoClose={1500} hideProgressBar={true} position={"top-center"} /> 
			<Sidebar />
			<main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
				<NavBar />
				<Routes>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/models" element={<AllModels />} />
					<Route path="/model/:username" element={<ModelDetails />} />
				</Routes>
			</main>
		</div>
	);
}



export default Router;
