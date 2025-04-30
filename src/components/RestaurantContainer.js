import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = ({ resList }) => {
	return (
		<div className="res-container w-14/15 mx-auto mb-[30px] grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[20px] max-[850px]:min-[700px]:w-[99%] max-[850px]:min-[700px]:grid-cols-[repeat(auto-fill,_minmax(32vw,_1fr))] max-[850px]:min-[700px]:gap-[5px] max-[560px]:w-49/50 max-[560px]:grid-cols-[repeat(auto-fill,_minmax(48vw,_1fr))] max-[560px]:gap-[1vw] max-[560px]:mb-[1vw]">
			{resList.map((resItem) => (
				<RestaurantCard key={resItem.info.id} resObj={resItem} />
			))}
		</div>
	);
};

export default RestaurantContainer;
