import { useState } from "react";
import { APP_LOGO_URL } from "../utils/assets";
import { CART_ICON_URL } from "../utils/assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");

	const cartItems = useSelector((store) => store.cart.cartItems);

	let cartCount = 0;
	cartItems.forEach((element) => {
		cartCount = cartCount + element.itemsInCart;
	});

	const li_styleClasses = "mx-[30px] list-none hover:cursor-pointer hover:text-[#BFBFBF]";

	return (
		<div className="header flex justify-between h-[100px] shadow-[0_4px_6px_-1px_#0000001A]">
			<div className="logo w-[100px] mx-[50px]">
				<Link to="/">
					<img
						className="w-[100px] h-[100px] object-cover"
						src={APP_LOGO_URL}
						onContextMenu={(e) => e.preventDefault()}
						onDragStart={(e) => e.preventDefault()}
						alt="App-Logo"
					/>
				</Link>
			</div>
			<div className="nav-items flex">
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
				</ul>
				<div className="cart-logo">
					<Link to="/cart">
						<div className="relative mt-[25px] mx-[30px] list-none hover:cursor-pointer hover:text-[#BFBFBF]">
							<img
								className="w-[40px] h-[40px]"
								src={CART_ICON_URL}
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
								alt="shopping-bag--v1"
							/>
							<h1 className=" absolute text-[17px] font-[500]  ml-[14px] bottom-[2px]  ">
								{cartCount}
							</h1>
						</div>
					</Link>
				</div>
			</div>
			<div className="login">
				<button
					className="py-[10px] px-[20px] my-[28px] mx-[60.6px] text-[15px] font-[500] border-1 border-[#E9E9E9] rounded-[0.1cm] shadow-[0px_5px_10px_#E9E9E9] hover:cursor-pointer hover:bg-[#F2F2F2] hover:shadow-none hover:border-[none]"
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
