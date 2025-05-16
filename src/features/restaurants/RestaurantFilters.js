import useRestaurantFilters from "../../hooks/useRestaurantFilters";
import Search from "../../components/Search";
import FilterButton from "../../components/FilterButton";

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
		"costabove600",
	];

	return (
		<div>
			<Search
				restaurantFilters={restaurantFilters}
				setRestaurantFilters={setRestaurantFilters}
			/>
			<div className="filters flex my-[15px]">
				{filterIds.map((filterId) => (
					<FilterButton
						key={filterId}
						filterId={filterId}
						defaultFilters={defaultFilters}
						restaurantFilters={restaurantFilters}
						setRestaurantFilters={setRestaurantFilters}
					/>
				))}
				{JSON.stringify(restaurantFilters) !== JSON.stringify(defaultFilters) && (
					<h3
						className="flex my-auto mx-[5px] text-[#D9534F] underline hover:text-[#C9302C] cursor-pointer"
						onClick={() => {
							setRestaurantFilters({ ...defaultFilters });
						}}>
						Clear Filters
					</h3>
				)}
			</div>
		</div>
	);
};

export default RestaurantFilters;
