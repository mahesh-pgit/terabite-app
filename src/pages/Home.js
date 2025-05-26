import useRestaurantsData from "../hooks/useRestaurantsData";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { Shimmer } from "../components/Shimmer";
import RestaurantFilters from "../features/restaurants/RestaurantFilters";
import RestaurantContainer from "../features/restaurants/RestaurantContainer";
import LocationWarning from "../components/LocationWarning";
import FilterError from "../components/FilterError";
import OfflineError from "../components/OfflineError";

const Home = () => {
	const [allRestaurantsList, restaurantsList, setRestaurantsList, showLocationWarning] =
		useRestaurantsData();

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) return <OfflineError />;

	return (
		<div className="home w-12/15 mx-auto max-[1000px]:w-13/15 max-[800px]:w-49/50">
			{showLocationWarning && <LocationWarning />}
			{allRestaurantsList.length === 0 ? (
				<Shimmer />
			) : (
				<>
					<RestaurantFilters
						allRestaurantsList={allRestaurantsList}
						setRestaurantsList={setRestaurantsList}
					/>
					{restaurantsList.length === 0 ? (
						<FilterError />
					) : (
						<RestaurantContainer restaurantsList={restaurantsList} />
					)}
				</>
			)}
		</div>
	);
};

export default Home;
