import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { UserProvider } from "./context/UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GOOGLE_OAUTH_CLIENT_ID } from "./config/googleOAuthClientId";
import AppLayout from "./layouts/AppLayout";

const App = () => {
	return (
		<GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
			<UserProvider>
				<Provider store={appStore}>
					<AppLayout />
				</Provider>
			</UserProvider>
		</GoogleOAuthProvider>
	);
};

export default App;
