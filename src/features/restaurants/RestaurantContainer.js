import RestaurantCard from "../../components/RestaurantCard";

const RestaurantContainer = ({ restaurantsList }) => {
	return (
		<div className="restaurant-container grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[20px] max-[850px]:min-[700px]:grid-cols-[repeat(auto-fill,_minmax(32vw,_1fr))] max-[850px]:min-[700px]:gap-[5px] max-[560px]:grid-cols-[repeat(auto-fill,_minmax(48vw,_1fr))] max-[560px]:gap-[1vw]">
			{restaurantsList.map((restaurantData) => (
				<RestaurantCard key={restaurantData.info.id} restaurantData={restaurantData} />
			))}
		</div>
	);
};

export default RestaurantContainer;
