import { Link } from "react-router-dom";
import { SWIGGY_MEDIA_ASSETS_URL } from "../assets/assets";

const RestaurantCard = ({ restaurantData }) => {
	const { id, cloudinaryImageId, name, cuisines, avgRating, sla, areaName } =
		restaurantData?.info;

	return (
		<div
			className="res-card h-[100%] w-[250px] bg-[#FFF] mx-auto rounded-[0.3cm] cursor-pointer hover:scale-105 transition-all duration-100 max-[1000px]:w-[220px] max-[800px]:w-[32vw] max-[560px]:w-[47vw]"
			onContextMenu={(e) => e.preventDefault()}
			onDragStart={(e) => e.preventDefault()}>
			<Link to={`/restaurants/${id}`}>
				<div className="res-img">
					<img
						src={SWIGGY_MEDIA_ASSETS_URL + cloudinaryImageId}
						alt="restaurant-image"
						className="h-[165px] w-[100%] rounded-[0.3cm] object-cover overflow-hidden"
					/>
				</div>
				<div className="res-info m-[5px] max-[560px]:m-[2px]">
					<h2 className="text-[18px] font-[700] line-clamp-1 line-break-anyword max-[700px]:text-[16px]">
						{name}
					</h2>
					<h4 className="text-[16px] font-[550] max-[700px]:text-[14px]">
						⭐{avgRating} • {sla.slaString}
					</h4>
					<h3 className="text-[14px] font-[600] text-[#6B7280] line-clamp-1 max-[700px]:text-[12px]">
						{cuisines.join(", ")}
					</h3>
					<h5 className="text-[12px] font-[550] text-[#4E4E4B] max-[700px]:text-[10px]">
						{areaName}
					</h5>
				</div>
			</Link>
		</div>
	);
};

export default RestaurantCard;
