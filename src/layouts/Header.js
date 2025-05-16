import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { APP_LOGO_URL } from "../assets/assets";
import { CART_ICON_URL } from "../assets/assets";
import LoginButton from "../components/LoginButton";
import getGoogleUserData from "../services/getGoogleUserData";
import UserProfile from "../features/user/UserProfile";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const { setUserInfo } = useUserContext();

	const cartItems = useSelector((store) => store.cart.cartItems);

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			getGoogleUserData(localStorage.getItem("accessToken")).then((data) => {
				if (data) {
					setUserInfo(data);
					setIsLoggedIn(true);
				} else {
					setIsLoggedIn(false);
					localStorage.removeItem("accessToken");
				}
			});
		}
	}, []);

	let cartCount = 0;
	cartItems.forEach((cartItem) => {
		cartCount = cartCount + cartItem.itemsInCart;
	});

	const navItemStyles =
		"text-[20px] text-[#02060CEB] font-[500] mx-[30px] list-none cursor-pointer md:hover:text-[#BFBFBF] max-[900px]:text-[18px] max-[900px]:mx-[20px] max-[700px]:text-[15px] max-[700px]:mx-[10px] max-[400px]:mx-[5px] ";

	return (
		<div className="header flex justify-between h-[100px] shadow-[0_4px_6px_-1px_#0000001A] max-[700px]:h-[75px] max-[500px]:h-[60px]">
			<div className="app-logo w-2/15 max-[1200px]:w-2/12 max-[900px]:w-2/9 max-[500px]:w-1/7">
				<div className="w-1/2 h-[100%] mx-auto max-[1300px]:w-2/3 max-[500px]:w-[90%] max-[500px]:ml-[10%]">
					<Link to="/">
						<img
							className="w-[100%] h-[100%] object-contain"
							src={APP_LOGO_URL}
							onContextMenu={(e) => e.preventDefault()}
							onDragStart={(e) => e.preventDefault()}
							alt="app-logo"
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
									onContextMenu={(e) => e.preventDefault()}
									onDragStart={(e) => e.preventDefault()}
									alt="shopping-bag"
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
					{!isLoggedIn ? (
						<LoginButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
					) : (
						<UserProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
