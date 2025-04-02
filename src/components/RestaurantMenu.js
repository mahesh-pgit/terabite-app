import { useState } from "react";
import CategoryItem from "./CategoryItem";

const RestaurantMenu = ({ resInfo }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const categoriesData =
		resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(card) =>
				card.card.card["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	return (
		<div className="category-items">
			{categoriesData.map((categoryData, index) => (
				<CategoryItem
					key={categoryData.card.card.categoryId}
					categoryData={categoryData.card.card}
					index={index}
					activeIndex={activeIndex}
					setActiveIndex={setActiveIndex}
				/>
			))}
		</div>
	);
};

export default RestaurantMenu;
