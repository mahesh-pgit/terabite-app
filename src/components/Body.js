import { useState } from "react";
import useRestaurantsData from "../utils/useRestaurantsData";
import useOnlineStatus from "../utils/useOnlineStatus";
import Search from "./Search";
import TopRatedButton from "./TopRatedButton";
import { Shimmer } from "./Shimmer";
import RestaurantContainer from "./RestaurantContainer";
import { LocationWarning, OnlineError, SearchError } from "./Error";

const Body = () => {
	const [searchText, setSearchText] = useState("");

	const [filterBtnActive, setFilterBtnActive] = useState(false);

	const [backupResList, resList, setResList, filteredResList, setfilteredResList, showWarning] =
		useRestaurantsData();

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) return <OnlineError />;

	return (
		<div className="body">
			{showWarning && <LocationWarning />}
			<div className="filters flex justify-center relative my-[30px] max-[950px]:flex-col max-[950px]:items-center max-[950px]:my-[13px]">
				<Search
					backupResList={backupResList}
					resList={resList}
					setResList={setResList}
					setfilteredResList={setfilteredResList}
					searchText={searchText}
					setSearchText={setSearchText}
					setFilterBtnActive={setFilterBtnActive}
				/>
				<TopRatedButton
					resList={resList}
					setResList={setResList}
					filteredResList={filteredResList}
					filterBtnActive={filterBtnActive}
					setFilterBtnActive={setFilterBtnActive}
				/>
			</div>
			{backupResList.length === 0 ? (
				<Shimmer />
			) : resList.length === 0 ? (
				<SearchError searchText={searchText} />
			) : (
				<RestaurantContainer resList={resList} />
			)}
		</div>
	);
};

export default Body;
