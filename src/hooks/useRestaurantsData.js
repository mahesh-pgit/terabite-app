import { useState, useEffect } from "react";
import getUserLocation from "../services/getUserLocation";
import { API_BASE_URL } from "../config/apiBaseUrl";
import { DEFAULT_LAT, DEFAULT_LNG } from "../config/defaultLatLng";

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
			let response = await fetch(`${API_BASE_URL}/restaurants?lat=${lat}&lng=${lng}`);
			if (!response.ok) {
				throw new Error("Response not OK");
			}
			let jsonData = await response.json();
			let data =
				jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

			if (!data) {
				response = await fetch(
					`${API_BASE_URL}/restaurants?lat=${DEFAULT_LAT}&lng=${DEFAULT_LNG}`
				);
				if (!response.ok) {
					throw new Error("Response not OK");
				}
				jsonData = await response.json();
				data =
					jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
			}

			setAllRestaurantsList(data);
			setRestaurantsList(data);
		} catch (error) {
			console.error("Fetch Error:", error);
		}
	};

	return [allRestaurantsList, restaurantsList, setRestaurantsList, showLocationWarning];
};

export default useRestaurantsData;
