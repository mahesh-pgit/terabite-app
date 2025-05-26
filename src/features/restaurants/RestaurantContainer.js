import RestaurantCard from "../../components/RestaurantCard";

const RestaurantContainer = ({ restaurantsList }) => {
	return (
		<div className="restaurant-container my-[20px] grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[20px] max-[1000px]:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-[1000px]:gap-[15px] max-[800px]:grid-cols-[repeat(auto-fill,_minmax(32vw,_1fr))] max-[800px]:gap-[1vw] max-[610px]:my-[5px] max-[560px]:grid-cols-[repeat(auto-fill,_minmax(47vw,_1fr))] max-[560px]:gap-[2vw]">
			{restaurantsList.map((restaurantData) => (
				<RestaurantCard key={restaurantData.info.id} restaurantData={restaurantData} />
			))}
		</div>
	);
};

export default RestaurantContainer;
