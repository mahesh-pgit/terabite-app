import fetch from "cross-fetch";

export default async function handler(req, res) {
	const { lat, lng, restaurantId } = req.query;

	if (!lat || !lng || !restaurantId) {
		return res.status(400).json({
			statusCode: 400,
			statusMessage: "Bad Request, lat or lng or restaurantId is missing",
		});
	}

	const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`;

	const headers = {
		"Content-Type": "application/json",
		"User-Agent":
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
	};

	try {
		const response = await fetch(url, {
			headers,
		});

		if (!response.ok) {
			throw new Error("API response was not ok");
		}

		const data = await response.json();

		res.status(200).json(data);
	} catch (error) {
		console.error("Error fetching menu:", error);
		res.status(500).json({
			statusCode: 500,
			statusMessage: "Error occurred while fetching the restaurant menu",
			errorName: error.name,
			errorMessage: error.message,
		});
	}
}
