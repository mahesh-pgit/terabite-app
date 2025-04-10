import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
	return (
		<Provider store={appStore}>
			<div className="app select-none flex flex-col min-h-[100vh]">
				<div className="flex-grow">
					<Header />
					<Outlet />
				</div>
				<Footer />
			</div>
		</Provider>
	);
};

export default App;
