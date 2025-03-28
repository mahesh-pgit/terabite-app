import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SWIGGY_API_MENU_URL } from "../utils/constants";
import { SWIGGY_MEDIA_ASSETS_URL } from "../utils/constants";
import { MENU_ICON_URL } from "../utils/constants";
import { ShimmerMenu } from "./Shimmer";
import MenuItemCard from "./MenuItemCard";

const RestaurantMenu = () => {
	const { resId } = useParams();

	const [resInfo, setResInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const resData = await fetch(SWIGGY_API_MENU_URL + resId);
		const jsonData = await resData.json();
		setResInfo(jsonData);
	};

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

	const menuData =
		resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
			?.itemCards ||
		resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
			?.itemCards;

	return (
		<div className="res-page">
			<div className="res-info-container">
				<div className="res-info-logo-container">
					<img
						className="res-info-logo"
						src={SWIGGY_MEDIA_ASSETS_URL + cloudinaryImageId}
						alt="restaurant-logo"
					/>
				</div>
				<div className="res-info">
					<h1>{name}</h1>
					<h3>
						{avgRating ? `⭐${avgRating}` : null}
						{totalRatings
							? ` (
					${totalRatings > 1000 ? `${totalRatings / 1000}K+ ratings` : `${totalRatings} ratings`}
					)`
							: null}
						{costForTwoMessage ? ` • ${costForTwoMessage}` : null}
					</h3>
					<h4>{cuisines ? cuisines.join(", ") : null}</h4>
					<h4>{areaName ? `Outlet: ${areaName}, ${city}` : null}</h4>
					<h4>{sla.slaString}</h4>
				</div>
			</div>
			<div className="menu-container">
				<div className="menu">
					<img className="menu-icon" src={MENU_ICON_URL} alt="menu-icon" />
					<h1>MENU</h1>
				</div>
				<div className="menu-items">
					{menuData.map((menuItem) => (
						<MenuItemCard key={menuItem.card.info.id} menuItem={menuItem} />
					))}
				</div>
			</div>
		</div>
	);
};

export default RestaurantMenu;
