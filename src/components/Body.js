import { useState } from "react";
import Search from "./Search";
import TopRatedBtn from "./TopRatedBtn";
import RestaurantContainer from "./RestaurantContainer";
import { restaurantData } from "../utils/restaurantData";

const Body = () => {
	const [resList, setResList] = useState(restaurantData);
	console.log(restaurantData);
	return (
		<div className="body">
			<Search />
			<TopRatedBtn resList={resList} setResList={setResList} />
			<RestaurantContainer resList={resList} />
		</div>
	);
};

export default Body;
