import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const AppLayout = () => {
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

export default AppLayout;
