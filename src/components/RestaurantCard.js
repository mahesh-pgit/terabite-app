import { Link } from "react-router-dom";
import { SWIGGY_MEDIA_ASSETS_URL } from "../utils/constants";

const RestaurantCard = ({ resObj }) => {
	const { id, cloudinaryImageId, name, cuisines, avgRating, sla, areaName } = resObj?.info;
	return (
		<div className="res-card">
			<Link to={`/restaurants/${id}`} className="link">
				<div className="res-logo-container">
					<img
						className="res-logo"
						alt="Restaurant Image"
						src={SWIGGY_MEDIA_ASSETS_URL + cloudinaryImageId}
					/>
				</div>
				<div className="res-card-info">
					<h2>{name}</h2>
					<h3>{cuisines.join(", ")}</h3>
					<h5>{areaName}</h5>
					<h4>
						⭐{avgRating} • {sla.slaString}
					</h4>
				</div>
			</Link>
		</div>
	);
};

export default RestaurantCard;
