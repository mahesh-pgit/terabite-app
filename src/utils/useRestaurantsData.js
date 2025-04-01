import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "./constants";

const useRestaurantsData = () => {
	const [resList, setResList] = useState([]);
	const [backupResList, setBackupResList] = useState([]);
	const [filteredResList, setfilteredResList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const resData = await fetch(SWIGGY_API_URL);
		const jsonData = await resData.json();
		const data = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
		setResList(data);
		setBackupResList(data);
		setfilteredResList(data);
	};
	return [backupResList, resList, setResList, filteredResList, setfilteredResList];
};

export default useRestaurantsData;
