import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";
import { SWIGGY_MEDIA_ASSETS_URL } from "../assets/assets";

const MenuItemCard = ({ menuItem }) => {
	const [menuItemCard, setMenuItemCard] = useState(menuItem);

	const dispatch = useDispatch();

	const handleAddItem = () => {
		setMenuItemCard({
			...menuItemCard,
			itemsInCart: menuItemCard.itemsInCart + 1,
		});
		dispatch(
			addItem({
				...menuItemCard,
				itemsInCart: menuItemCard.itemsInCart + 1,
			})
		);
	};

	const handleRemoveItem = () => {
		setMenuItemCard({
			...menuItemCard,
			itemsInCart: menuItemCard.itemsInCart - 1,
		});
		dispatch(
			removeItem({
				...menuItemCard,
				itemsInCart: menuItemCard.itemsInCart - 1,
			})
		);
	};

	const { name, description, imageId, price, defaultPrice, ratings } = menuItem;

	const addToCartBtnStyles =
		"absolute w-[120px] left-[18px] bottom-[-3px] flex text-[20px] text-[#1BA672] font-[700] tracking-[-0.5px] bg-[#FFF] rounded-[0.2cm] shadow-[0px_5px_10px_#E9E9E9] max-[600px]:text-[15px] max-[600px]:w-[24vw] max-[600px]:left-[2vw] max-[600px]:bottom-[-2.5vw] max-[500px]:bottom-[-3.5vw] ";

	return (
		<div className="menu-item-card">
			<div className="flex justify-between h-[150px] max-[600px]:h-[105px]">
				<div className="menu-item-info w-[550px] ml-[20px] max-[760px]:w-[70vw] max-[760px]:ml-[5px] max-[600px]:w-[65vw]">
					<h3 className="text-[18px] text-[#02060CBF] font-[700] max-[600px]:text-[15px] max-[600px]:tracking-[-0.6px]">
						{name}
					</h3>
					<h4 className="text-[16px] text-[#02060CEB] font-[600] max-[600px]:text-[14px]">
						₹{price || defaultPrice ? price / 100 || defaultPrice / 100 : null}
					</h4>
					<h5 className="text-[13px] text-[#02060CEB] font-[450] max-[600px]:text-[11px]">
						{ratings.aggregatedRating.rating
							? `⭐${ratings.aggregatedRating.rating}`
							: null}{" "}
						{ratings.aggregatedRating.ratingCountV2
							? `(${ratings.aggregatedRating.ratingCountV2})`
							: null}
					</h5>
					<p className="text-[16px] text-[#02060C99] font-[500] line-clamp-2 line-break-anyword max-[600px]:text-[14px] max-[600px]:tracking-[-0.6px]">
						{description}
					</p>
				</div>
				<div className="menu-item-img relative flex flex-col mr-[20px] max-[760px]:mr-[5px] max-[600px]:my-auto">
					<div className="h-[135px] w-[156px] max-[600px]:w-[28vw] max-[600px]:h-[100px]">
						{imageId && (
							<img
								src={SWIGGY_MEDIA_ASSETS_URL + imageId}
								alt={name}
								className="h-full w-full rounded-[0.3cm] object-cover overflow-hidden"
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
							/>
						)}
					</div>
					{menuItemCard.itemsInCart <= 0 ? (
						<div
							className={
								addToCartBtnStyles +
								"justify-center py-[7px] cursor-pointer md:hover:bg-[#D9DADB]"
							}
							onClick={handleAddItem}>
							ADD
						</div>
					) : (
						<div className={addToCartBtnStyles + "justify-between"}>
							<div
								className="px-[15px] py-[7px] rounded-l-[0.2cm] cursor-pointer md:hover:bg-[#D9DADB] max-[600px]:px-[3vw]"
								onClick={handleRemoveItem}>
								-
							</div>
							<div className="py-[7px]">
								<h1>{menuItemCard.itemsInCart}</h1>
							</div>
							<div
								className="px-[15px] py-[7px] rounded-r-[0.2cm] cursor-pointer md:hover:bg-[#D9DADB] max-[600px]:px-[3vw]"
								onClick={() => {
									handleAddItem(menuItemCard);
								}}>
								+
							</div>
						</div>
					)}
				</div>
			</div>
			<hr className="border-1 border-[#E9E9E9] w-[97%] mx-[auto] mt-[30px] mb-[20px]" />
		</div>
	);
};

export default MenuItemCard;
