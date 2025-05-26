import useRestaurantFilters from "../../hooks/useRestaurantFilters";
import Search from "../../components/Search";
import FilterButton from "../../components/FilterButton";
import { CLEAR_FILTERS_SVG } from "../../assets/assets";

const defaultFilters = {
	searchText: "",
	sortBy: "relevance",
	fastDelivery: false,
	ratingAboveFour: false,
	ratingAboveFourDotFive: false,
	pureVeg: false,
	costbelow300: false,
	costbetween300and600: false,
	costabove600: false,
};

const RestaurantFilters = ({ allRestaurantsList, setRestaurantsList }) => {
	const [restaurantFilters, setRestaurantFilters] = useRestaurantFilters(
		defaultFilters,
		allRestaurantsList,
		setRestaurantsList
	);

	const filterIds = [
		"sortBy",
		"fastDelivery",
		"ratingAboveFour",
		"ratingAboveFourDotFive",
		"pureVeg",
		"costbelow300",
		"costbetween300and600",
		// "costabove600",
	];

	return (
		<div className="filters-container">
			<Search
				restaurantFilters={restaurantFilters}
				setRestaurantFilters={setRestaurantFilters}
			/>
			<div className="filters flex items-center overflow-x-auto whitespace-nowrap no-scrollbar">
				{/* no-scrollbar is a custom class to dismiss scrollbar */}
				{JSON.stringify(restaurantFilters) !== JSON.stringify(defaultFilters) && (
					<div className="inline-block mr-[10px]">
						<div
							className="w-[25px] h-[25px] text-[#D70000] cursor-pointer md:hover:text-[#FF0000] max-md:text-[#FF0000] max-[610px]:w-[20px] max-[610px]:h-[20px]"
							onClick={() => {
								setRestaurantFilters({ ...defaultFilters });
							}}>
							{CLEAR_FILTERS_SVG}
						</div>
					</div>
				)}
				{filterIds.map((filterId) => (
					<FilterButton
						key={filterId}
						filterId={filterId}
						defaultFilters={defaultFilters}
						restaurantFilters={restaurantFilters}
						setRestaurantFilters={setRestaurantFilters}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantFilters;
