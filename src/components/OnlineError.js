const OnlineError = () => {
	return (
		<div className="offline-error flex flex-col items-center text-center my-[30vh]">
			<h1 className="text-[50px] max-[600px]:text-[25px]">Looks like you're offline</h1>
			<h2 className="text-[40px] max-[600px]:text-[20px]">
				Please check your internet connection...
			</h2>
		</div>
	);
};

export default OnlineError;
