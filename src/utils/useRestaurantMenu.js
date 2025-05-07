import { useState, useEffect } from "react";
import getUserLocation from "./getUserLocation";

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		getUserLocation()
			.then((location) => {
				const { lat, lng } = location;
				fetchMenu(lat, lng, resId);
			})
			.catch((error) => {
				console.error("Error fetching user location: ", error);
			});
	}, []);

	const fetchMenu = async (lat, lng, resId) => {
		const response = await fetch(
			`https://terabite-server.onrender.com/api/menu?lat=${lat}&lng=${lng}&restaurantId=${resId}`
		);
		const data = await response.json();
		setResInfo(data);
	};

	return resInfo;
};

export default useRestaurantMenu;
