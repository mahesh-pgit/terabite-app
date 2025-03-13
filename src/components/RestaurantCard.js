import { SWIGGY_MEDIA_ASSETS_URL } from "../utils/constants";

const RestaurantCard = ({ resObj }) => {
	const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName } = resObj?.info;
	return (
		<div className="res-card">
			<img
				className="res-logo"
				alt="Restaurant Image"
				src={SWIGGY_MEDIA_ASSETS_URL + cloudinaryImageId}
			/>
			<h3>{name}</h3>
			<h5>{cuisines.join(", ")}</h5>
			<h5>
				⭐{avgRating} • {sla.slaString}
			</h5>
			<h5>{areaName}</h5>
		</div>
	);
};

export default RestaurantCard;
