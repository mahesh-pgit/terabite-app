import { useState, useEffect } from "react";
import getLocation from "./getLocation";

const useRestaurantsData = () => {
	const [resList, setResList] = useState([]);

	const [backupResList, setBackupResList] = useState([]);

	const [filteredResList, setfilteredResList] = useState([]);

	useEffect(() => {
		getLocation()
			.then((location) => {
				const { lat, lng } = location;
				fetchData(lat, lng);
			})
			.catch((error) => {
				console.error("Error fetching location:", error);
			});
	}, []);

	const fetchData = async (lat, lng) => {
		const resData = await fetch(
			`https://terabite-server.onrender.com/api/restaurants?lat=${lat}&lng=${lng}`
		);
		const jsonData = await resData.json();
		const data = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
		setResList(data);
		setBackupResList(data);
		setfilteredResList(data);
	};

	return [backupResList, resList, setResList, filteredResList, setfilteredResList];
};

export default useRestaurantsData;
