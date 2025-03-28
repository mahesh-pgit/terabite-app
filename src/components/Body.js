import { useEffect, useState } from "react";
import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import { Shimmer } from "./Shimmer";
import RestaurantContainer from "./RestaurantContainer";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
	const [resList, setResList] = useState([]);
	const [filteredResList, setFilteredResList] = useState([]);
	const [searchText, setSearchText] = useState("");
	const [clicked, setClicked] = useState(false);

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
				<Search
					resList={resList}
					setFilteredResList={setFilteredResList}
					searchText={searchText}
					setSearchText={setSearchText}
					setClicked={setClicked}
				/>
				<TopRatedBtn
					resList={resList}
					filteredResList={filteredResList}
					setFilteredResList={setFilteredResList}
					clicked={clicked}
					setClicked={setClicked}
				/>
			</div>

			{resList.length === 0 ? (
				<Shimmer />
			) : filteredResList.length === 0 ? (
				<div className="error-message">
					<h1>Sorry, No results found for "{searchText}"</h1>
					<h2>Please check the spelling or try searching for something else...</h2>
				</div>
			) : (
				<RestaurantContainer filteredResList={filteredResList} />
			)}
		</div>
	);
};

export default Body;
