const Shimmer = () => {
	const cards = [];
	for (let i = 1; i <= 20; i++) {
		cards.push(
			<div
				key={i}
				className="shimmer-card h-[310px] w-[250px] mx-auto bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.3cm] shadow-[0px_5px_10px_#E9E9E9] max-[850px]:min-[700px]:w-[32vw] max-[560px]:h-[290px] max-[560px]:w-[48vw]">
				<div className="m-[15px] max-[560px]:m-[10px]">
					<div className="shimmer-img animate-pulse h-[175px] w-[100%] rounded-[0.3cm] bg-[#F2F2F2]"></div>
				</div>
			</div>
		);
	}

	return (
		<div className="shimmer-container w-14/15 mx-auto mb-[30px] grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[20px] max-[850px]:min-[700px]:w-[99%] max-[850px]:min-[700px]:grid-cols-[repeat(auto-fill,_minmax(32vw,_1fr))] max-[850px]:min-[700px]:gap-[5px] max-[560px]:w-49/50 max-[560px]:grid-cols-[repeat(auto-fill,_minmax(48vw,_1fr))] max-[560px]:gap-[1vw] max-[560px]:mb-[1vw]">
			{cards}
		</div>
	);
};

const ShimmerMenu = () => {
	return (
		<div className="shimmer-card w-[800px] mx-[auto] mt-[30px] border-1 border-[#E9E9E9] rounded-[0.3cm] shadow-[0px_5px_10px_#E9E9E9] max-[820px]:w-[98%] max-[820px]:mt-[10px]">
			<div className="shimmer-img animate-pulse h-[175px] w-[175px] m-[20px] bg-[#F2F2F2] rounded-[0.3cm] max-[600px]:h-[125px] max-[600px]:w-[125px] max-[600px]:m-[10px]"></div>
		</div>
	);
};

export { Shimmer, ShimmerMenu };
