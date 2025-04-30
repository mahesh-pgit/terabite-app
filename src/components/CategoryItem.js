import { useSelector } from "react-redux";
import { UP_ARROW_SVG, DOWN_ARROR_SVG } from "../utils/assets";
import MenuItemCard from "./MenuItemCard";

const CategoryItem = ({ categoryData, index, activeIndex, setActiveIndex }) => {
	const cartItems = useSelector((store) => store.cart.cartItems);

	const { title, itemCards } = categoryData;

	const handleClick = () => {
		activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
	};

	return (
		<div className="category-item shadow-[0_4px_6px_-1px_#0000001A] mb-[30px] max-[820px]:mb-[20px]">
			<div
				className="text-[20px] font-[650] p-[15px] flex justify-between cursor-pointer max-[600px]:text-[17px]"
				onClick={handleClick}>
				<span>
					{title} ({itemCards.length})
				</span>
				{activeIndex === index ? UP_ARROW_SVG : DOWN_ARROR_SVG}
			</div>
			{activeIndex === index && (
				<div className="menu-items">
					{itemCards.map((menuItem) => {
						let updatedMenuItem = { ...menuItem.card.info, itemsInCart: 0 };
						for (let cartItem of cartItems) {
							if (cartItem.id === menuItem.card.info.id) {
								updatedMenuItem = {
									...menuItem.card.info,
									itemsInCart: cartItem.itemsInCart,
								};
								break;
							}
						}
						return <MenuItemCard key={updatedMenuItem.id} menuItem={updatedMenuItem} />;
					})}
				</div>
			)}
		</div>
	);
};

export default CategoryItem;
