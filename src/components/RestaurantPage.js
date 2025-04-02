import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { ShimmerMenu } from "./Shimmer";
import { SWIGGY_MEDIA_ASSETS_URL } from "../utils/assets";
import { MENU_ICON_URL } from "../utils/assets";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantPage = () => {
	const { resId } = useParams();

	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) return <ShimmerMenu />;

	const {
		cloudinaryImageId,
		name,
		avgRating,
		totalRatings,
		costForTwoMessage,
		cuisines,
		areaName,
		city,
		sla,
	} = resInfo?.data?.cards[2]?.card?.card?.info;

	return (
		<div className="res-page w-[800px] mx-[auto] mt-[20px]">
			<div className="res-info-card flex w-[800px] border-1 border-[#e9e9e9] rounded-[0.3cm] shadow-[0px_5px_10px_#e9e9e9]">
				<div className="res-img m-[20px]">
					<img
						className="h-[200px] w-[200px] rounded-[0.3cm] object-cover overflow-hidden"
						src={SWIGGY_MEDIA_ASSETS_URL + cloudinaryImageId}
						alt="restaurant-logo"
					/>
				</div>
				<div className="res-info flex flex-col my-[25px] mx-[10px] ">
					<h1 className="text-[30px] text-[#02060ceb] font-[600] tracking-[-0.5px] mb-[10px]">
						{name}
					</h1>
					<h3 className="text-[16px] text-[#02060ceb] font-[550] m-[0]">
						{avgRating ? `⭐${avgRating}` : null}
						{totalRatings
							? ` (
					${totalRatings > 1000 ? `${totalRatings / 1000}K+ ratings` : `${totalRatings} ratings`}
					)`
							: null}
						{costForTwoMessage ? ` • ${costForTwoMessage}` : null}
					</h3>
					<h4 className="text-[14px] text-[#02060ceb] font-[500] mt-[10px]">
						{cuisines ? cuisines.join(", ") : null}
					</h4>
					<h4 className="text-[14px] text-[#02060ceb] font-[500] mt-[10px]">
						{areaName ? "Outlet: " : null}
						<span className="text-[#02060c99]">
							{areaName ? (city ? `${areaName}, ${city}` : `${areaName}`) : null}
						</span>
					</h4>
					<h4 className="text-[14px] text-[#02060ceb] font-[500] mt-[10px]">
						{sla.slaString}
					</h4>
				</div>
			</div>
			<div>
				<div className="flex justify-center mt-[20px] mb-[10px]">
					<img
						className="h-[35px] w-[35px] p-[4px]"
						src={MENU_ICON_URL}
						alt="menu-icon"
					/>
					<h1 className="text-[25px] font-[500] m-[0]">MENU</h1>
				</div>
				<div className="res-menu-container">
					<RestaurantMenu resInfo={resInfo} />
				</div>
			</div>
		</div>
	);
};

export default RestaurantPage;
