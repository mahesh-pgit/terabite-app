const getGoogleUserData = async (access_token) => {
	if (!access_token) {
		console.error("No access token provided");
		return;
	}

	const url = "https://www.googleapis.com/oauth2/v3/userinfo";

	const headers = {
		Authorization: `Bearer ${access_token}`,
	};

	try {
		const response = await fetch(url, { headers });

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		return data;
	} catch (error) {
		console.error("Error fetching user data:", error);
	}
};

export default getGoogleUserData;
