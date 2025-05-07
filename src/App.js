import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { GoogleOAuthProvider } from "@react-oauth/google";
import getGoogleUserData from "./utils/getGoogleUserData";

const App = () => {
	const [userInfo, setUserInfo] = useState(null);

	useEffect(() => {
		if (localStorage.getItem("accessToken")) {
			getGoogleUserData(localStorage.getItem("accessToken")).then((data) => {
				if (data) {
					setUserInfo(data);
				} else {
					console.error("Failed to fetch user data");
				}
			});
		}
	}, []);

	return (
		<GoogleOAuthProvider clientId="701474482859-kg2o2gb41o1v3d57i89mjl3pebkkqfj4.apps.googleusercontent.com">
			<UserContext.Provider value={{ userInfo: userInfo, setUserInfo }}>
				<Provider store={appStore}>
					<div className="app select-none flex flex-col min-h-[100vh] max-w-[100vw]">
						<Header />
						<div className="flex-1">
							<Outlet />
						</div>
						<Footer />
					</div>
				</Provider>
			</UserContext.Provider>
		</GoogleOAuthProvider>
	);
};

export default App;
