import { Link } from "react-router-dom";
import { SWIGGY_MEDIA_ASSETS_URL } from "../utils/assets";

const RestaurantCard = ({ restaurantData }) => {
	const { id, cloudinaryImageId, name, cuisines, avgRating, sla, areaName } =
		restaurantData?.info;

	return (
		<div className="res-card h-[100%] w-[250px] mx-auto bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.3cm] shadow-[0px_5px_10px_#E9E9E9] cursor-pointer md:hover:bg-[#F2F2F2] max-[850px]:min-[700px]:w-[32vw] max-[560px]:w-[48vw]">
			<Link to={`/restaurants/${id}`}>
				<div className="res-img m-[15px] max-[560px]:m-[10px]">
					<img
						className="h-[175px] w-[100%] rounded-[0.3cm] object-cover overflow-hidden"
						src={SWIGGY_MEDIA_ASSETS_URL + cloudinaryImageId}
						onContextMenu={(e) => e.preventDefault()}
						onDragStart={(e) => e.preventDefault()}
						alt="restaurant-image"
					/>
				</div>
				<div className="res-info max-w-[100%] m-[15px] max-[560px]:m-[10px]">
					<h2 className="text-[18px] font-[600] tracking-[-0.2px] max-[560px]:text-[15px]">
						{name.length < 22 ? name : name.slice(0, 22) + "..."}
					</h2>
					<h3 className="text-[14px] font-[600] text-[#6B7280] max-[560px]:text-[12px]">
						{cuisines.slice(0, 3).join(", ").length < 30
							? cuisines.slice(0, 3).join(", ")
							: cuisines.slice(0, 3).join(", ").slice(0, 30) + "..."}
					</h3>
					<h5 className="text-[12px] font-[500] text-[#4E4E4B] max-[560px]:text-[10px]">
						{areaName}
					</h5>
					<h4 className="text-[16px] font-[500] max-[560px]:text-[14px]">
						⭐{avgRating} • {sla.slaString}
					</h4>
				</div>
			</Link>
		</div>
	);
};

export default RestaurantCard;
