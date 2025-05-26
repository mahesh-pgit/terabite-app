import { useGoogleLogin } from "@react-oauth/google";
import { useUserContext } from "../context/UserContext";
import getGoogleUserData from "../services/getGoogleUserData";

const LoginButton = ({ isLoggedIn, setIsLoggedIn }) => {
	const { setUserInfo } = useUserContext();

	const login = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			setIsLoggedIn(true);
			const userData = await getGoogleUserData(tokenResponse.access_token);
			setUserInfo(userData);
			localStorage.setItem("accessToken", tokenResponse.access_token);
		},
		onError: (error) => {
			console.error("Login Failed: ", error);
		},
	});

	const logout = () => {
		setIsLoggedIn(false);
		setUserInfo(null);
		localStorage.removeItem("accessToken");
	};

	return (
		<div>
			<button
				className="px-[16px] py-[6px] text-[16px] text-[#02060CEB] font-[500] bg-[#FFF] border-1 border-[#D9DADB] rounded-[0.1cm] cursor-pointer md:hover:scale-95 max-[885px]:text-[14px] max-[610px]:text-[12px] max-[610px]:px-[10px]"
				onClick={() => (!isLoggedIn ? login() : logout())}>
				{!isLoggedIn ? "Login" : "Logout"}
			</button>
		</div>
	);
};

export default LoginButton;
