import { useState, useEffect } from "react";
import getUserLocation from "./getUserLocation";

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
		const response = await fetch(
			`https://terabite-server.onrender.com/api/restaurants?lat=${lat}&lng=${lng}`
		);
		const jsonData = await response.json();
		const data = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
		setAllRestaurantsList(data);
		setRestaurantsList(data);
	};

	return [allRestaurantsList, restaurantsList, setRestaurantsList, showLocationWarning];
};

export default useRestaurantsData;
