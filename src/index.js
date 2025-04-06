import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import RestaurantPage from "./components/RestaurantPage";
import Grocery from "./components/Grocery";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { Error } from "./components/Error";

const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <Body /> },
			{ path: "/restaurants/:resId", element: <RestaurantPage /> },
			{ path: "/grocery", element: <Grocery /> },
			{ path: "/about", element: <About /> },
			{ path: "/contact", element: <Contact /> },
			{ path: "/cart", element: <Cart /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
