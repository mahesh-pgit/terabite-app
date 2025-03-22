import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} alt="App-Logo" />
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
			<div className="login">
				<button
					onClick={() =>
						loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
					}
					className="login-btn">
					{loginBtn}
				</button>
			</div>
		</div>
	);
};

export default Header;
