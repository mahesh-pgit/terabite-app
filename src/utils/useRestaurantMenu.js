import { useState, useEffect } from "react";
import { SWIGGY_API_MENU_URL } from "../utils/assets";

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const resData = await fetch(SWIGGY_API_MENU_URL + resId);
		const jsonData = await resData.json();
		setResInfo(jsonData);
	};
	return resInfo;
};

export default useRestaurantMenu;
