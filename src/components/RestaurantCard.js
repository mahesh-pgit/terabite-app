import { Link } from "react-router-dom";
import { SWIGGY_MEDIA_ASSETS_URL } from "../utils/assets";

const RestaurantCard = ({ resObj }) => {
	const { id, cloudinaryImageId, name, cuisines, avgRating, sla, areaName } = resObj?.info;

	return (
		<div className="res-card h-[335px] w-[250px] my-[20px] mx-[14px] bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.3cm] shadow-[0px_5px_10px_#E9E9E9] hover:cursor-pointer hover:bg-[#F2F2F2]">
			<Link to={`/restaurants/${id}`}>
				<div className="res-img m-[15px]">
					<img
						className="h-[175px] w-[220px] rounded-[0.3cm] object-cover overflow-hidden"
						src={SWIGGY_MEDIA_ASSETS_URL + cloudinaryImageId}
						onContextMenu={(e) => e.preventDefault()}
						onDragStart={(e) => e.preventDefault()}
						alt="Restaurant Image"
					/>
				</div>
				<div className="res-info mx-[15px]">
					<h2 className="text-[18px] font-[600] tracking-[-0.2px] mt-[-3px]">{name}</h2>
					<h3 className="text-[14px] font-[600] text-[#6B7280]">
						{cuisines.join(", ").length < 30
							? cuisines.join(", ")
							: cuisines.join(", ").slice(0, 28) + "..."}
					</h3>
					<h5 className="text-[12px] font-[500] text-[#4E4E4B]">{areaName}</h5>
					<h4 className="text-[16px] font-[500]">
						⭐{avgRating} • {sla.slaString}
					</h4>
				</div>
			</Link>
		</div>
	);
};

export default RestaurantCard;
