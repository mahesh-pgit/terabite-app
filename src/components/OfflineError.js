import { OFFLINE_SVG } from "../assets/assets";

const OfflineError = () => {
	return (
		<div className="offline-error h-[80vh] flex justify-center">
			<div className="flex flex-col items-center text-center my-auto">
				<div className="w-[150px] h-[150px] mb-5">{OFFLINE_SVG}</div>
				<h1 className="text-[30px] max-[600px]:text-[20px]">Looks like you're offline</h1>
				<h2 className="text-[30px] max-[600px]:text-[20px]">
					Please check your internet connection...
				</h2>
			</div>
		</div>
	);
};

export default OfflineError;
