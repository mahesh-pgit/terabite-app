import fetch from "cross-fetch";

export default async function handler(req, res) {
	const { lat, lng } = req.query;

	if (!lat || !lng) {
		return res.status(400).json({
			statusCode: 400,
			statusMessage: "Bad Request, lat or lng is missing",
		});
	}

	const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

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
		res.status(500).json({
			statusCode: 500,
			statusMessage: "Error occurred while fetching restaurants",
			errorName: error.name,
			errorMessage: error.message,
		});
	}
}
