import { useState, useEffect } from "react";

const FilterButton = ({ filterId, defaultFilters, restaurantFilters, setRestaurantFilters }) => {
	const [filterButtonActive, setFilterButtonActive] = useState(false);

	useEffect(() => {
		if (JSON.stringify(restaurantFilters) === JSON.stringify(defaultFilters))
			setFilterButtonActive(false);
	}, [restaurantFilters, defaultFilters]);

	const filterButtonStyles = `mx-[5px] p-[6px] text-[15px] font-[450] border-1 border-[#D9DADB] rounded-[0.6cm] cursor-pointer ${
		filterButtonActive ? "bg-[#F0F0F0]" : "bg-[#FFF]"
	} `;

	const sortOptionStyles = "text-[15px] font-[450] bg-[#FFF] ";

	return filterId === "sortBy" ? (
		<div className="sort-by">
			<select
				className={filterButtonStyles + "pr-[5px]"}
				value={restaurantFilters.sortBy}
				onChange={(e) => {
					e.target.value !== "relevance"
						? setFilterButtonActive(true)
						: setFilterButtonActive(false);
					setRestaurantFilters({ ...restaurantFilters, sortBy: e.target.value });
				}}>
				<option value="relevance" className={sortOptionStyles}>
					Sort By
				</option>
				<option value="delivery-time-low-to-high" className={sortOptionStyles}>
					Delivery Time
				</option>
				<option value="rating-high-to-low" className={sortOptionStyles}>
					Rating
				</option>
				<option value="cost-low-to-high" className={sortOptionStyles}>
					Cost: Low to High
				</option>
				<option value="cost-high-to-low" className={sortOptionStyles}>
					Cost: High to Low
				</option>
			</select>
		</div>
	) : (
		<div className="filter-button">
			<button
				className={filterButtonStyles}
				onClick={() => {
					setFilterButtonActive(!filterButtonActive);
					setRestaurantFilters({
						...restaurantFilters,
						[filterId]: !restaurantFilters[filterId],
					});
				}}>
				{filterId === "fastDelivery"
					? "Fast Delivery 🚚"
					: filterId === "ratingAboveFour"
					? "Ratings 4.0+ ⭐"
					: filterId === "ratingAboveFourDotFive"
					? "Ratings 4.5+ ⭐"
					: filterId === "pureVeg"
					? "Pure Veg 🟢"
					: filterId === "costbelow300"
					? "Less than Rs. 300 💵"
					: filterId === "costbetween300and600"
					? "Rs. 300-Rs. 600 💵"
					: filterId === "costabove600"
					? "Greater than Rs. 600 💵"
					: "Invalid Filter ID"}
				{filterButtonActive && <span className=" text-[#A6A6A6] text-[15px]"> ✖</span>}
			</button>
		</div>
	);
};

export default FilterButton;
