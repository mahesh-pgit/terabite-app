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
				className="w-[100%] text-[17px] text-[#02060CEB] py-[10px] font-[500] bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.1cm] shadow-[0px_5px_10px_#E9E9E9] cursor-pointer md:hover:bg-[#F2F2F2] md:hover:shadow-none md:hover:border-none max-[700px]:text-[15px] max-[700px]:py-[8px] max-[500px]:text-[13px]"
				onClick={() => (!isLoggedIn ? login() : logout())}>
				{!isLoggedIn ? "Login" : "Logout"}
			</button>
		</div>
	);
};

export default LoginButton;
