import { useState, useEffect } from "react";
import getUserLocation from "./getUserLocation";

const useRestaurantMenu = (restaurantId) => {
	const [restaurantMenuData, setRestaurantMenuData] = useState(null);

	const [showLocationWarning, setShowLocationWarning] = useState(false);

	useEffect(() => {
		getUserLocation()
			.then((location) => {
				const { lat, lng } = location;
				fetchMenu(lat, lng, restaurantId);
			})
			.catch((error) => {
				console.error("Error fetching user location: ", error);
				setShowLocationWarning(true);
			});
	}, []);

	const fetchMenu = async (lat, lng, restaurantId) => {
		const response = await fetch(
			`https://terabite-server.onrender.com/api/menu?lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`
		);
		const data = await response.json();
		setRestaurantMenuData(data);
	};

	return [restaurantMenuData, showLocationWarning];
};

export default useRestaurantMenu;
