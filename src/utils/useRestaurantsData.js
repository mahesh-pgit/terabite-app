import { useState, useEffect } from "react";
import getUserLocation from "./getUserLocation";

const useRestaurantsData = () => {
	const [resList, setResList] = useState([]);

	const [backupResList, setBackupResList] = useState([]);

	const [filteredResList, setfilteredResList] = useState([]);

	const [showWarning, setShowWarning] = useState(false);

	useEffect(() => {
		getUserLocation()
			.then((location) => {
				const { lat, lng } = location;
				fetchData(lat, lng);
			})
			.catch((error) => {
				console.error("Error fetching user location: ", error);
				setShowWarning(true);
			});
	}, []);

	const fetchData = async (lat, lng) => {
		const response = await fetch(
			`https://terabite-server.onrender.com/api/restaurants?lat=${lat}&lng=${lng}`
		);
		const jsonData = await response.json();
		const data = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
		setResList(data);
		setBackupResList(data);
		setfilteredResList(data);
	};

	return [backupResList, resList, setResList, filteredResList, setfilteredResList, showWarning];
};

export default useRestaurantsData;
