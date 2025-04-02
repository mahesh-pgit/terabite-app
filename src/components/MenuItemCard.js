import { SWIGGY_MEDIA_ASSETS_URL } from "../utils/assets";

const MenuItemCard = ({ menuItem }) => {
	const { name, description, imageId, price, defaultPrice, ratings } = menuItem?.card?.info;
	return (
		<div className="menu-item-card">
			<div className=" flex justify-between h-[150px]">
				<div className="menu-item-info w-[550px] ml-[20px]">
					<h3 className="text-[18px] text-[#02060cbf] font-[700] tracking-[-0.4px] mt-[10px] mb-[8px]">
						{name}
					</h3>
					<h4 className="text-[16px] font-[600] m-[0]">
						₹{price || defaultPrice ? price / 100 || defaultPrice / 100 : null}
					</h4>
					<h5 className="text-[13px] font-[450] my-[12px]">
						{ratings.aggregatedRating.rating
							? `⭐${ratings.aggregatedRating.rating}`
							: null}{" "}
						{ratings.aggregatedRating.ratingCountV2
							? `(${ratings.aggregatedRating.ratingCountV2})`
							: null}
					</h5>
					<p className="text-[16px] text-[#02060c99] font-[500] m-[0]">
						{description
							? description.length < 140
								? description
								: description.slice(0, 140) + "..."
							: null}
					</p>
				</div>
				<div className="flex flex-col items-center relative mr-[20px]">
					{imageId ? (
						<img
							className="h-[144px] w-[156px] rounded-[0.3cm] object-cover overflow-hidden"
							src={SWIGGY_MEDIA_ASSETS_URL + imageId}
							alt={name}
						/>
					) : null}
					<button className="absolute right-[18px] bottom-[-3px] w-[120px] text-[20px] text-[#1ba672] font-[700] tracking-[-0.5px] px-0 py-[7px] bg-[#fff] border-1 border-[#e9e9e9] rounded-[0.2cm] shadow-[0px_5px_10px_#e9e9e9] hover:cursor-pointer hover:bg-[#d9dadb] hover:shadow-none hover:border-[none]">
						ADD
					</button>
				</div>
			</div>
			<hr className="border-1 border-[#e9e9e9] w-[780px] mt-[30px] mb-[20px] mx-[auto]" />
		</div>
	);
};

export default MenuItemCard;
