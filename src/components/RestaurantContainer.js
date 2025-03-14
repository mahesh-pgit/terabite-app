import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = ({ resList }) => {
	return (
		<div className="res-container">
			{resList.map((resItem) => (
				<RestaurantCard key={resItem.info.id} resObj={resItem} />
			))}
		</div>
	);
};

export default RestaurantContainer;
