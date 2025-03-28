import { useState } from "react";
import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");
	return (
		<div className="header">
			<div className="logo-container">
				<Link to="/" className="logo-link">
					<img className="logo" src={APP_LOGO_URL} alt="App-Logo" />
				</Link>
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link to="/" className="link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/grocery" className="link">
							Grocery
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
