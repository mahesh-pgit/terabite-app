import useRestaurantsData from "../utils/useRestaurantsData";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantFilters from "./RestaurantFilters";
import { Shimmer } from "./Shimmer";
import RestaurantContainer from "./RestaurantContainer";
import { LocationWarning, OnlineError, FilterError } from "./Error";

const Home = () => {
	const [allRestaurantsList, restaurantsList, setRestaurantsList, showLocationWarning] =
		useRestaurantsData();

	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) return <OnlineError />;

	return (
		<div className="home w-14/15 mx-auto my-[20px] max-[850px]:min-[700px]:w-[99%] max-[560px]:w-49/50 max-[560px]:mb-[1vw]">
			{showLocationWarning && <LocationWarning />}
			<RestaurantFilters
				allRestaurantsList={allRestaurantsList}
				setRestaurantsList={setRestaurantsList}
			/>
			{allRestaurantsList.length === 0 ? (
				<Shimmer />
			) : restaurantsList.length === 0 ? (
				<FilterError />
			) : (
				<RestaurantContainer restaurantsList={restaurantsList} />
			)}
		</div>
	);
};

export default Home;
