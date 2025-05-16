import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import RestaurantPage from "../pages/RestaurantPage";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "home", element: <Navigate to="/" replace /> },
			{ path: "restaurants/:resId", element: <RestaurantPage /> },
			{ path: "cart", element: <Cart /> },
			{ path: "about", element: <About /> },
			{ path: "contact", element: <Contact /> },
		],
	},
]);

export default appRoutes;
