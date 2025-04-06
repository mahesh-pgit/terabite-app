import { useState } from "react";
import { APP_LOGO_URL } from "../utils/assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");

	const cartItems = useSelector((store) => store.cart.cartItems);

	let cartCount = 0;
	cartItems.forEach((element) => {
		cartCount = cartCount + element.itemsInCart;
	});

	const li_styleClasses = "mx-[30px] list-none hover:cursor-pointer hover:text-[#bfbfbf]";

	return (
		<div className="header flex justify-between h-[100px] shadow-[0_4px_6px_-1px_#0000001a]">
			<div className="logo w-[100px] mx-[50px]">
				<Link to="/">
					<img
						className="w-[100px] h-[100px] object-cover"
						src={APP_LOGO_URL}
						alt="App-Logo"
					/>
				</Link>
			</div>
			<div className="nav-items">
				<ul className="text-[20px] font-[500] flex my-[35px]">
					<li className={li_styleClasses}>
						<Link to="/">Home</Link>
					</li>
					<li className={li_styleClasses}>
						<Link to="/grocery">Grocery</Link>
					</li>
					<li className={li_styleClasses}>
						<Link to="/about">About Us</Link>
					</li>
					<li className={li_styleClasses}>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className={li_styleClasses}>
						<Link to="/cart">Cart ({cartCount})</Link>
					</li>
				</ul>
			</div>
			<div className="login">
				<button
					className="py-[10px] px-[20px] my-[28px] mx-[60.6px] text-[15px] font-[500] border-1 border-[#e9e9e9] rounded-[0.1cm] shadow-[0px_5px_10px_#e9e9e9] hover:cursor-pointer hover:bg-[#f2f2f2] hover:shadow-none hover:border-[none]"
					onClick={() =>
						loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
					}>
					{loginBtn}
				</button>
			</div>
		</div>
	);
};

export default Header;
