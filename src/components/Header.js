import { useState } from "react";
import { APP_LOGO_URL } from "../utils/assets";
import { CART_ICON_URL } from "../utils/assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const [loginBtn, setLoginBtn] = useState("Login");

	const cartItems = useSelector((store) => store.cart.cartItems);

	let cartCount = 0;
	cartItems.forEach((cartItem) => {
		cartCount = cartCount + cartItem.itemsInCart;
	});

	const navItemStyles =
		"text-[20px] font-[500] mx-[30px] list-none cursor-pointer md:hover:text-[#BFBFBF] max-[900px]:text-[18px] max-[900px]:mx-[20px] max-[700px]:text-[15px] max-[700px]:mx-[10px] max-[400px]:mx-[5px] ";

	return (
		<div className="header flex justify-between h-[100px] shadow-[0_4px_6px_-1px_#0000001A] max-[700px]:h-[75px] max-[500px]:h-[60px]">
			<div className="app-logo w-2/15 max-[1200px]:w-2/12 max-[900px]:w-2/9 max-[500px]:w-1/7">
				<div className="w-1/2 h-[100%] mx-auto max-[1300px]:w-2/3 max-[500px]:w-[90%] max-[500px]:ml-[10%]">
					<Link to="/">
						<img
							className="w-[100%] h-[100%] object-contain"
							src={APP_LOGO_URL}
							alt="app-logo"
							onContextMenu={(e) => e.preventDefault()}
							onDragStart={(e) => e.preventDefault()}
						/>
					</Link>
				</div>
			</div>
			<div className="nav-items w-11/15 flex justify-center items-center max-[1200px]:w-8/12 max-[900px]:5/9 max-[500px]:w-5/7">
				<ul className="flex">
					<li className={navItemStyles}>
						<Link to="/">Home</Link>
					</li>
					<li className={navItemStyles}>
						<Link to="/about">About Us</Link>
					</li>
					<li className={navItemStyles}>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li
						className={
							"cart-icon " +
							navItemStyles +
							"mr-[65px] max-[900px]:mr-[55px] max-[700px]:mr-[40px] max-[500px]:mr-[35px] max-[400px]:mr-[30px] "
						}>
						<Link to="/cart">
							<div className="absolute mt-[-8px] max-[500px]:mt-[-5px]">
								<img
									className="w-[35px] h-[35px] max-[700px]:w-[30px] max-[700px]:h-[30px] max-[500px]:w-[25px] max-[500px]:h-[25px]"
									src={CART_ICON_URL}
									alt="shopping-bag"
									onContextMenu={(e) => e.preventDefault()}
									onDragStart={(e) => e.preventDefault()}
								/>
								<h1 className="absolute text-[17px] font-[500] left-[12px] bottom-[-2px] max-[700px]:text-[15px] max-[700px]:left-[10px] max-[700px]:bottom-[-1px] max-[500px]:text-[12px] max-[500px]:left-[8px] max-[500px]:bottom-[-2px]">
									{cartCount}
								</h1>
							</div>
						</Link>
					</li>
				</ul>
			</div>
			<div className="login-btn w-2/15 flex justify-center items-center max-[1200px]:w-2/12 max-[900px]:w-2/9 max-[500px]:w-1/7">
				<div className="w-1/2 max-[900px]:w-2/3 max-[500px]:w-[90%]">
					<button
						className="w-[100%] text-[17px] py-[10px] font-[500] border-1 border-[#E9E9E9] rounded-[0.1cm] shadow-[0px_5px_10px_#E9E9E9] cursor-pointer md:hover:bg-[#F2F2F2] md:hover:shadow-none md:hover:border-none max-[700px]:text-[15px] max-[700px]:py-[8px] max-[500px]:text-[13px]"
						onClick={() =>
							loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
						}>
						{loginBtn}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
