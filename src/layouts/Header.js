import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useUserContext } from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";
import {
	APP_LOGO_URL,
	HOME_SVG,
	INFO_SVG,
	CHAT_SVG,
	CART_SVG,
	SHOPPING_BAG_SVG,
} from "../assets/assets";
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
		"text-[20px] font-[500] mx-[30px] my-auto max-[900px]:text-[16px] max-[900px]:mx-[15px] max-[480px]:mx-[10px] max-[425px]:mx-[5px] ";

	const addActiveLinkStyles = ({ isActive }) =>
		isActive ? "text-[#E56A77] " : "text-[#595959] md:hover:text-[#E56A77] transition ";

	return (
		<div className="header fixed top-0 left-0 right-0 h-[75px] bg-[#FFF] z-100 flex justify-between shadow-[0_15px_40px_-20px_#282C3F26] max-[610px]:h-[60px] max-[400px]:pr-[10px]">
			<div className="app-logo w-2/15 flex h-full">
				<div className="mx-auto">
					<Link to="/">
						<img
							src={APP_LOGO_URL}
							alt="app-logo"
							className="h-full object-contain"
							onContextMenu={(e) => e.preventDefault()}
							onDragStart={(e) => e.preventDefault()}
						/>
					</Link>
				</div>
			</div>
			<div className="nav-items w-11/15 flex justify-center items-center">
				<ul className="flex">
					<li className={navItemStyles}>
						<NavLink to="/" className={addActiveLinkStyles}>
							<div className="flex">
								<div className="w-[25px] h-[26px] max-[900px]:w-[20px] max-[900px]:h-[22px] max-[610px]:hidden">
									{HOME_SVG}
								</div>
								&nbsp;
								<h1>Home</h1>
							</div>
						</NavLink>
					</li>
					<li className={navItemStyles}>
						<NavLink to="/about" className={addActiveLinkStyles}>
							<div className="flex">
								<div className="w-[25px] h-[28px] max-[900px]:w-[20px] max-[900px]:h-[23px] max-[610px]:hidden">
									{INFO_SVG}
								</div>
								&nbsp;
								<h1>About Us</h1>
							</div>
						</NavLink>
					</li>
					<li className={navItemStyles}>
						<NavLink to="/contact" className={addActiveLinkStyles}>
							<div className="flex">
								<div className="w-[25px] h-[25px] max-[900px]:w-[20px] max-[900px]:h-[22px] max-[610px]:hidden">
									{CHAT_SVG}
								</div>
								&nbsp;
								<h1>Contact Us</h1>
							</div>
						</NavLink>
					</li>
					<li className={navItemStyles}>
						<NavLink to="/cart" className={addActiveLinkStyles}>
							<div className="flex max-[610px]:hidden">
								<div className="relative w-[30px] h-[30px] max-[900px]:w-[25px] max-[900px]:h-[25px]">
									{CART_SVG}
									<h1 className="absolute text-[12px] left-[9px] top-[5px] max-[900px]:text-[10px] max-[900px]:left-[7px] max-[900px]:top-[4px]">
										{cartCount}
									</h1>
								</div>
								&nbsp;
								<h1 className="my-auto">Cart</h1>
							</div>

							<div className="relative h-[27px] w-[27px] min-[610px]:hidden">
								{SHOPPING_BAG_SVG}
								<h1 className="absolute text-[13px] left-[7px] top-[7px]">
									{cartCount}
								</h1>
							</div>
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="login-btn w-2/15 flex justify-center items-center">
				{!isLoggedIn ? (
					<LoginButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
				) : (
					<UserProfile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
				)}
			</div>
		</div>
	);
};

export default Header;
