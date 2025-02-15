import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "src/redux/user";

function Navbar() {
	const [showDropdown, setShowDropdown] = useState(false);
	const dispatch = useDispatch();
	const userData = useSelector((state: any) => state.user);
	console.log(userData);
	return (
		<>
			<div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
				<button type="button" className="text-lg text-gray-900 font-semibold sidebar-toggle">
					<i className="ri-menu-line" />
				</button>
				<ul className="ml-auto flex items-center">
					<li className="dropdown ml-3 relative">
						<button onClick={() => setShowDropdown(!showDropdown)} type="button" className="dropdown-toggle flex items-center">
							<div className="flex-shrink-0 w-10 h-10 relative">
								<div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
									<img className="w-8 h-8 rounded-full" src="https://st4.depositphotos.com/9998432/24360/v/450/depositphotos_243600690-stock-illustration-person-gray-photo-placeholder-girl.jpg" alt="" />
									<div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping" />
									<div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full" />
								</div>
							</div>
							<div className="p-2 md:block text-left">
								<h2 className="text-sm font-semibold text-gray-800">{userData.user.username}</h2>
								<p className="text-xs text-gray-500">Globalfun Admin</p>
							</div>
						</button>
						{showDropdown && (
							<ul className="dropdown-menu absolute shadow-md shadow-black/5 z-30  py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
								{/* <li>
                <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Profile</a>
              </li>
              <li>
                <a href="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Settings</a>
              </li> */}
								<li>
									<form method="POST">
										<a
											onClick={(e) => {
												e.preventDefault();
												dispatch(logOut());
											}}
											role="menuitem"
											className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
										>
											Log Out
										</a>
									</form>
								</li>
							</ul>
						)}
					</li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;
