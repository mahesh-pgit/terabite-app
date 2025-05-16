import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./context/UserContext";
import AppLayout from "./layouts/AppLayout";

const App = () => {
	return (
		<GoogleOAuthProvider clientId="701474482859-kg2o2gb41o1v3d57i89mjl3pebkkqfj4.apps.googleusercontent.com">
			<UserProvider>
				<Provider store={appStore}>
					<AppLayout />
				</Provider>
			</UserProvider>
		</GoogleOAuthProvider>
	);
};

export default App;
