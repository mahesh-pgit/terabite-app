import { SEARCH_ICON_URL } from "../assets/assets";

const Shimmer = () => {
	const buttons = [];
	for (let i = 1; i <= 5; i++) {
		buttons.push(
			<div
				key={i}
				className="shimmer-button inline-block py-[17px] px-[70px] mr-2.5 bg-[#E5E5E5] rounded-[0.6cm] animate-pulse max-[610px]:px-[55px] max-[610px]:py-[14px]"></div>
		);
	}

	const cards = [];
	for (let i = 1; i <= 20; i++) {
		cards.push(
			<div
				key={i}
				className="shimmer-image h-[165px] w-[250px] mx-auto mb-[100px] bg-[#E5E5E5] rounded-[0.3cm] animate-pulse max-[1000px]:w-[220px] max-[800px]:w-[32vw] max-[700px]:mb-[88px] max-[560px]:w-[47vw] max-[560px]:mb-[82px]"></div>
		);
	}

	return (
		<div className="shimmer-body">
			<div className="shimmer-search w-[400px] flex justify-between mx-auto my-[30px] border-1 border-[#BEBFC5] rounded-[0.1cm] max-[610px]:my-[15px] max-[410px]:w-[99%]">
				<div className="py-[18.5px]"></div>
				<img
					src={SEARCH_ICON_URL}
					alt="search"
					className="w-[25px] h-[25px] my-auto mx-[10px]"
					onContextMenu={(e) => e.preventDefault()}
					onDragStart={(e) => e.preventDefault()}
				/>
			</div>
			<div className="shimmer-buttons overflow-x-auto whitespace-nowrap no-scrollbar">
				{buttons}
			</div>
			<div className="shimmer-container my-[20px] grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-[20px] max-[1000px]:grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-[1000px]:gap-[15px] max-[800px]:grid-cols-[repeat(auto-fill,_minmax(32vw,_1fr))] max-[800px]:gap-[1vw] max-[610px]:my-[5px] max-[560px]:grid-cols-[repeat(auto-fill,_minmax(47vw,_1fr))] max-[560px]:gap-[2vw]">
				{cards}
			</div>
		</div>
	);
};

const ShimmerMenu = () => {
	return (
		<div className="shimmer-card w-[800px] mx-[auto] mt-[30px] border-1 border-[#E9E9E9] rounded-[0.3cm] shadow-[3px_3px_10px_#E9E9E9] max-[820px]:w-[98%] max-[820px]:mt-[10px]">
			<div className="shimmer-img animate-pulse h-[175px] w-[175px] m-[20px] bg-[#E5E5E5] rounded-[0.3cm] max-[600px]:h-[125px] max-[600px]:w-[125px] max-[600px]:m-[10px]"></div>
		</div>
	);
};

export { Shimmer, ShimmerMenu };
