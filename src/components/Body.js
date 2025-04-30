import { useState } from "react";
import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import { Shimmer } from "./Shimmer";
import useRestaurantsData from "../utils/useRestaurantsData";
import RestaurantContainer from "./RestaurantContainer";
import useOnlineStatus from "../utils/useOnlineStatus";
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
				<TopRatedBtn
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
