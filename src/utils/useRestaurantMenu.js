import { useState, useEffect } from "react";
import getLocation from "../utils/getLocation";

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		getLocation()
			.then((location) => {
				const { lat, lng } = location;
				fetchMenu(lat, lng, resId);
			})
			.catch((error) => {
				console.error("Error fetching location:", error);
			});
	}, []);

	const fetchMenu = async (lat, lng, resId) => {
		const resData = await fetch(
			`https://terabite-server.onrender.com/api/menu?lat=${lat}&lng=${lng}&restaurantId=${resId}`
		);
		const jsonData = await resData.json();
		setResInfo(jsonData);
	};

	return resInfo;
};

export default useRestaurantMenu;
