import { useState } from "react";
import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import { Shimmer } from "./Shimmer";
import useRestaurantsData from "../utils/useRestaurantsData";
import RestaurantContainer from "./RestaurantContainer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { OnlineError, SearchError } from "./Error";

const Body = () => {
	const [searchText, setSearchText] = useState("");

	const [clicked, setClicked] = useState(false);

	const [backupResList, resList, setResList, filteredResList, setfilteredResList] =
		useRestaurantsData();

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) return <OnlineError />;

	return (
		<div className="body">
			<div className="filters flex justify-between mt-[35px] mb-[15px]">
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
				<SearchError searchText={searchText} />
			) : (
				<RestaurantContainer resList={resList} />
			)}
		</div>
	);
};

export default Body;
