import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = ({ filteredResList }) => {
	return (
		<div className="res-container">
			{filteredResList.map((resItem) => (
				<RestaurantCard key={resItem.info.id} resObj={resItem} />
			))}
		</div>
	);
};

export default RestaurantContainer;
