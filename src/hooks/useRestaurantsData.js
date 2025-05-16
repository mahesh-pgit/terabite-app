import { useState, useEffect } from "react";
import getUserLocation from "../services/getUserLocation";

const useRestaurantsData = () => {
	const [restaurantsList, setRestaurantsList] = useState([]);

	const [allRestaurantsList, setAllRestaurantsList] = useState([]);

	const [showLocationWarning, setShowLocationWarning] = useState(false);

	useEffect(() => {
		getUserLocation()
			.then((location) => {
				const { lat, lng } = location;
				fetchData(lat, lng);
			})
			.catch((error) => {
				console.error("Error fetching user location: ", error);
				setShowLocationWarning(true);
			});
	}, []);

	const fetchData = async (lat, lng) => {
		try {
			const response = await fetch(`/api/restaurants?lat=${lat}&lng=${lng}`);
			if (!response.ok) {
				throw new Error("Response not OK");
			}
			const jsonData = await response.json();
			const data =
				jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
			setAllRestaurantsList(data);
			setRestaurantsList(data);
		} catch (error) {
			console.error("Fetch Error:", error);
		}
	};

	return [allRestaurantsList, restaurantsList, setRestaurantsList, showLocationWarning];
};

export default useRestaurantsData;
