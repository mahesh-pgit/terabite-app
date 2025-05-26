import { SEARCH_ICON_URL } from "../assets/assets";

const Search = ({ restaurantFilters, setRestaurantFilters }) => {
	return (
		<div className="search-bar w-[400px] flex justify-between mx-auto my-[30px] border-1 border-[#BEBFC5] rounded-[0.1cm] max-[610px]:my-[15px] max-[410px]:w-[99%]">
			<input
				className="py-[5px] pl-[10px] text-[18px] font-[500] outline-none border-none placeholder:font-[400] placeholder:text-[#A6A6A6]"
				type="text"
				name="search"
				value={restaurantFilters.searchText}
				onChange={(e) =>
					setRestaurantFilters({ ...restaurantFilters, searchText: e.target.value })
				}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						setRestaurantFilters({ ...restaurantFilters, searchText: e.target.value });
					}
				}}
				placeholder="Search for restaurants"
				size={25}
			/>
			{restaurantFilters.searchText === "" ? (
				<img
					src={SEARCH_ICON_URL}
					alt="search"
					className="w-[25px] h-[25px] my-auto mx-[10px]"
					onContextMenu={(e) => e.preventDefault()}
					onDragStart={(e) => e.preventDefault()}
				/>
			) : (
				<div
					className="text-[20px] my-auto mx-[10px] cursor-pointer"
					onClick={() => {
						setRestaurantFilters({ ...restaurantFilters, searchText: "" });
					}}>
					✖
				</div>
			)}
		</div>
	);
};

export default Search;
