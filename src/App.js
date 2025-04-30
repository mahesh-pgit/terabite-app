import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="app select-none flex flex-col min-h-[100vh] max-w-[100vw]">
			<Header />
			<div className="flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default App;
