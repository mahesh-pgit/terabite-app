import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/restaurantData";

const RestaurantContainer = () => {
	return (
		<div className="res-container">
			{restaurantData.map((resItem) => (
				<RestaurantCard key={resItem.info.id} resObj={resItem} />
			))}
		</div>
	);
};

export default RestaurantContainer;
