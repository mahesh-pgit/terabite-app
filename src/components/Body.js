import { useEffect, useState } from "react";
import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import Shimmer from "./Shimmer";
import RestaurantContainer from "./RestaurantContainer";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
	const [resList, setResList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const resData = await fetch(SWIGGY_API_URL);
		console.log(resData);
		const jsonData = await resData.json();
		console.log(jsonData);
		setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	};

	return (
		<div className="body">
			<Search />
			<TopRatedBtn resList={resList} setResList={setResList} />
			{resList.length === 0 ? <Shimmer /> : <RestaurantContainer resList={resList} />}
		</div>
	);
};

export default Body;
