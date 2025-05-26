import { useState } from "react";

const LocationWarning = () => {
	const [visible, setVisible] = useState(true);

	if (!visible) return null;

	return (
		<div className="location-denied-warning fixed animate-bounce bottom-[1vw] right-[1vw] z-1 max-w-[400px] p-[10px] bg-[#FFE2E2] text-[#9F0712] border-l-[4px] border-[#FB2C36] rounded-[0.3cm] max-[600px]:max-w-[300px]">
			<div className="flex justify-between items-start">
				<div>
					<p className="text-[18px] font-[600] max-[600px]:text-[14px]">
						We're unable to retrieve your location.
					</p>
					<p className="text-[14px] font-[400] mt-[5px] max-[600px]:text-[12px]">
						Please enable location access and reload the page to view nearby restaurant
						options and ensure optimal functionality.
					</p>
				</div>
				<button className="ml-4 md:hover:text-[#FB2C36]" onClick={() => setVisible(false)}>
					✖
				</button>
			</div>
		</div>
	);
};

export default LocationWarning;
