import MenuItemCard from "./MenuItemCard";
import { UP_ARROW_SVG } from "../utils/assets";
import { DOWN_ARROR_SVG } from "../utils/assets";

const CategoryItem = ({ categoryData, index, activeIndex, setActiveIndex }) => {
	const { title, itemCards } = categoryData;
	const handleClick = () => {
		activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
	};
	return (
		<div className="category-item shadow-[0_4px_6px_-1px_#0000001a] mb-[40px]">
			<div
				className="text-[20px] font-[700] p-[15px] flex justify-between hover:cursor-pointer"
				onClick={handleClick}>
				<span>
					{title} ({itemCards.length})
				</span>
				{activeIndex === index ? UP_ARROW_SVG : DOWN_ARROR_SVG}
			</div>
			{activeIndex === index && (
				<div className="menu-items">
					{itemCards.map((menuItem) => (
						<MenuItemCard key={menuItem.card.info.id} menuItem={menuItem} />
					))}
				</div>
			)}
		</div>
	);
};

export default CategoryItem;
