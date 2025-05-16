import { SEARCH_ICON_URL } from "../assets/assets";

const Search = ({ restaurantFilters, setRestaurantFilters }) => {
	return (
		<div className="search-bar w-[400px] flex justify-between mx-auto border-1 border-[#BEBFC5] rounded-[0.1cm]">
			<input
				className="py-[5px] pl-[10px] text-[18px] font-[500] outline-none border-none placeholder:font-[400] placeholder:text-[#A6A6A6] max-[400px]:w-[220px]"
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
				size={30}
			/>
			{restaurantFilters.searchText === "" ? (
				<img
					className="w-[25px] h-[25px] my-auto mx-[20px]"
					src={SEARCH_ICON_URL}
					onContextMenu={(e) => e.preventDefault()}
					onDragStart={(e) => e.preventDefault()}
					alt="search"
				/>
			) : (
				<div
					className="text-[20px] my-auto mx-[20px] cursor-pointer"
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
