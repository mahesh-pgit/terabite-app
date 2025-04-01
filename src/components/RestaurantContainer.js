import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = ({ resList }) => {
	return (
		<div className="res-container flex flex-wrap w-11/12 m-auto">
			{resList.map((resItem) => (
				<RestaurantCard key={resItem.info.id} resObj={resItem} />
			))}
		</div>
	);
};

export default RestaurantContainer;
