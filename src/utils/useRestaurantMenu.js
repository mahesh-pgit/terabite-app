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
		try {
			const response = await fetch(
				`/api/menu?lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`
			);
			if (!response.ok) {
				throw new Error("Response not OK");
			}
			const data = await response.json();
			setRestaurantMenuData(data);
		} catch (error) {
			console.error("Fetch Error:", error);
		}
	};

	return [restaurantMenuData, showLocationWarning];
};

export default useRestaurantMenu;
