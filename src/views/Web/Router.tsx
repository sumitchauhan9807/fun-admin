import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Login from "src/views/Web/Login";

import { useSelector } from "react-redux";
import { useEffect } from "react";

function Router() {
	const userData = useSelector((state: any) => state.user);
	const navigate = useNavigate();
	useEffect(() => {
		if (userData.token) {
			navigate("/dashboard");
		}
	}, [userData]);
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default Router;
