import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { ShimmerMenu } from "../components/Shimmer";
import { SWIGGY_MEDIA_ASSETS_URL } from "../assets/assets";
import { MENU_ICON_URL } from "../assets/assets";
import RestaurantMenu from "../features/menu/RestaurantMenu";
import LocationWarning from "../components/LocationWarning";
import OfflineError from "../components/OfflineError";

const RestaurantPage = () => {
	const { resId } = useParams();

	const [restaurantMenuData, showLocationWarning] = useRestaurantMenu(resId);

	const onlineStatus = useOnlineStatus();

	if (restaurantMenuData === null)
		return (
			<>
				<ShimmerMenu /> {showLocationWarning && <LocationWarning />}
			</>
		);

	if (onlineStatus === false) return <OfflineError />;

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
	} = restaurantMenuData?.data?.cards[2]?.card?.card?.info;

	return (
		<div className="res-page w-[800px] mx-[auto] mt-[30px] max-[820px]:w-[98%] max-[820px]:mt-[10px]">
			<div className="res-info-card flex border-1 border-[#E9E9E9] rounded-[0.3cm] shadow-[3px_3px_10px_#E9E9E9]">
				<div className="res-img m-[20px] max-[600px]:m-[10px]">
					<img
						src={SWIGGY_MEDIA_ASSETS_URL + cloudinaryImageId}
						alt="restaurant-image"
						className="h-[175px] w-[175px] rounded-[0.3cm] object-cover overflow-hidden max-[600px]:h-[125px] max-[600px]:w-[125px]"
						onContextMenu={(e) => e.preventDefault()}
						onDragStart={(e) => e.preventDefault()}
					/>
				</div>
				<div className="res-info flex flex-col my-[20px] max-[600px]:my-[12px]">
					<h1 className="text-[30px] text-[#02060CEB] font-[600] max-[720px]:text-[20px] max-[600px]:text-[17px] max-[600px]:font-[700]">
						{name}
					</h1>
					<h3 className="text-[16px] text-[#02060CEB] font-[550] mt-[10px] max-[600px]:text-[14px] max-[600px]:mt-[5px]">
						{avgRating ? `⭐${avgRating}` : null}
						{totalRatings
							? ` (
					${totalRatings > 1000 ? `${totalRatings / 1000}K+ ratings` : `${totalRatings} ratings`}
					)`
							: null}
						{costForTwoMessage ? ` • ${costForTwoMessage}` : null}
					</h3>
					<h4 className="text-[14px] text-[#02060CEB] font-[500] mt-[10px] max-[600px]:text-[12px] max-[600px]:mt-[5px]">
						{cuisines ? cuisines.join(", ") : null}
					</h4>
					<h4 className="text-[14px] text-[#02060CEB] font-[500] mt-[10px] max-[600px]:text-[12px] max-[600px]:mt-[5px]">
						{areaName ? "Outlet: " : null}
						<span className="text-[#02060C99]">
							{areaName ? (city ? `${areaName}, ${city}` : `${areaName}`) : null}
						</span>
					</h4>
					<h4 className="text-[14px] text-[#02060CEB] font-[500] mt-[10px] max-[600px]:text-[12px] max-[600px]:mt-[5px]">
						{sla.slaString}
					</h4>
				</div>
			</div>
			<div>
				<div className="flex justify-center mt-[20px] mb-[10px]">
					<img
						src={MENU_ICON_URL}
						alt="menu-icon"
						className="h-[35px] w-[35px] p-[4px] max-[600px]:h-[23px] max-[600px]:w-[23px] max-[600px]:p-[2px]"
						onContextMenu={(e) => e.preventDefault()}
						onDragStart={(e) => e.preventDefault()}
					/>
					<h1 className="text-[25px] font-[500] max-[600px]:text-[18px]">MENU</h1>
				</div>
				<div className="res-menu-container">
					<RestaurantMenu restaurantMenuData={restaurantMenuData} />
				</div>
			</div>
		</div>
	);
};

export default RestaurantPage;
