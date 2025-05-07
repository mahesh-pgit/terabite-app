const getUserLocation = () => {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const lat = position.coords.latitude;
					const lng = position.coords.longitude;
					resolve({ lat, lng });
				},
				() => {
					reject(new Error("Unable to retrieve location."));
				}
			);
		} else {
			reject(new Error("Geolocation is not supported by this browser."));
		}
	});
};

export default getUserLocation;
