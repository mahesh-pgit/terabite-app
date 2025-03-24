import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src={LOGO_URL} alt="App-Logo" />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/" className="link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className="link">
							About Us
						</Link>
					</li>
					<li>
						<Link to="/contact" className="link">
							Contact Us
						</Link>
					</li>
					<li>
						<Link to="/cart" className="link">
							Cart
						</Link>
					</li>
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
