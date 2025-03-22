import { useEffect, useState } from "react";
import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import Shimmer from "./Shimmer";
import RestaurantContainer from "./RestaurantContainer";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
	const [resList, setResList] = useState([]);
	const [filteredResList, setFilteredResList] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const resData = await fetch(SWIGGY_API_URL);
		const jsonData = await resData.json();
		setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
		setFilteredResList(
			jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	};

	return (
		<div className="body">
			<div className="filters">
				<Search resList={resList} setFilteredResList={setFilteredResList} />
				<TopRatedBtn
					resList={resList}
					filteredResList={filteredResList}
					setFilteredResList={setFilteredResList}
				/>
			</div>
			{resList.length === 0 ? (
				<Shimmer />
			) : (
				<RestaurantContainer filteredResList={filteredResList} />
			)}
		</div>
	);
};

export default Body;
