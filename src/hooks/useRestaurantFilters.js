import { useState, useEffect } from "react";

const useRestaurantFilters = (defaultFilters, allRestaurantsList, setRestaurantsList) => {
	const [restaurantFilters, setRestaurantFilters] = useState({ ...defaultFilters });

	useEffect(() => {
		applyFilters();
	}, [restaurantFilters]);

	const applyFilters = () => {
		const {
			searchText,
			sortBy,
			fastDelivery,
			ratingAboveFour,
			ratingAboveFourDotFive,
			pureVeg,
			costbelow300,
			costbetween300and600,
			costabove600,
		} = restaurantFilters;

		const extractFirstNumber = (str) => {
			return str.match(/\d+/)[0] * 1; // Extract the first number from the string
		};

		let filteredList = allRestaurantsList.filter((restaurantItem) => {
			const { name, avgRating, sla, veg, costForTwo } = restaurantItem.info;
			const deliveryTime = sla.deliveryTime;
			const cost = extractFirstNumber(costForTwo);

			const textMatch = name.toLowerCase().includes(searchText.toLowerCase());
			const fastDeliveryMatch = !fastDelivery || deliveryTime <= 30;
			const ratingMatch =
				ratingAboveFour || ratingAboveFourDotFive
					? (ratingAboveFour && avgRating >= 4.0) ||
					  (ratingAboveFourDotFive && avgRating >= 4.5)
					: true;
			const dietMatch = !pureVeg || (veg && veg === true);
			const costMatch =
				costbelow300 || costbetween300and600 || costabove600
					? (costbelow300 && cost < 300) ||
					  (costbetween300and600 && cost >= 300 && cost <= 600) ||
					  (costabove600 && cost > 600)
					: true;

			return textMatch && fastDeliveryMatch && ratingMatch && dietMatch && costMatch;
		});

		switch (sortBy) {
			case "delivery-time-low-to-high":
				filteredList = [...filteredList].sort(
					(a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
				);
				break;
			case "rating-high-to-low":
				filteredList = [...filteredList].sort(
					(a, b) => b.info.avgRating - a.info.avgRating
				);
				break;
			case "cost-low-to-high":
				filteredList = [...filteredList].sort(
					(a, b) =>
						extractFirstNumber(a.info.costForTwo) -
						extractFirstNumber(b.info.costForTwo)
				);
				break;
			case "cost-high-to-low":
				filteredList = [...filteredList].sort(
					(a, b) =>
						extractFirstNumber(b.info.costForTwo) -
						extractFirstNumber(a.info.costForTwo)
				);
				break;
			default:
				break;
		}
		setRestaurantsList(filteredList);
	};

	return [restaurantFilters, setRestaurantFilters];
};

export default useRestaurantFilters;
