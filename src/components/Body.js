import { useState } from "react";
import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import { Shimmer } from "./Shimmer";
import useRestaurantsData from "../utils/useRestaurantsData";
import RestaurantContainer from "./RestaurantContainer";

const Body = () => {
	const [searchText, setSearchText] = useState("");

	const [clicked, setClicked] = useState(false);

	const [backupResList, resList, setResList, filteredResList, setfilteredResList] =
		useRestaurantsData();

	return (
		<div className="body">
			<div className="filters flex justify-between my-[15px]">
				<Search
					backupResList={backupResList}
					resList={resList}
					setResList={setResList}
					setfilteredResList={setfilteredResList}
					searchText={searchText}
					setSearchText={setSearchText}
					setClicked={setClicked}
				/>
				<TopRatedBtn
					resList={resList}
					setResList={setResList}
					filteredResList={filteredResList}
					clicked={clicked}
					setClicked={setClicked}
				/>
			</div>

			{backupResList.length === 0 ? (
				<Shimmer />
			) : resList.length === 0 ? (
				<div className="error-msg flex flex-col items-center ">
					<h1 className="text-[40px] font-[600] m-[10px]">
						Sorry, No results found for "{searchText}"
					</h1>
					<h2 className="text-[30px] font-[500] m-[10px]">
						Please check the spelling or try searching for something else...
					</h2>
				</div>
			) : (
				<RestaurantContainer resList={resList} />
			)}
		</div>
	);
};

export default Body;
