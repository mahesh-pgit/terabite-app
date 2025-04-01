const Shimmer = () => {
	const cards = [];
	for (let i = 1; i <= 25; i++) {
		cards.push(
			<div
				key={i}
				className="card h-[370px] w-[250px] my-[20px] mx-[14px] bg-[#fff] border-1 border-[#e9e9e9] rounded-[0.3cm] shadow-[0px_5px_10px_#e9e9e9]">
				<div className="card-img h-[175px] w-[220px] rounded-[0.3cm] m-[15px] bg-[#f2f2f2]"></div>
			</div>
		);
	}
	return <div className="cards-container flex flex-wrap w-11/12 m-auto">{cards}</div>;
};

const ShimmerMenu = () => {
	return (
		<div className="w-[800px] h-[240px] mx-auto border-1 border-[#e9e9e9] rounded-[0.3cm] shadow-[0px_5px_10px_#e9e9e9]">
			<div className="h-[200px] w-[200px] m-[20px] rounded-[0.3cm] bg-[#f2f2f2]"></div>
		</div>
	);
};

export { Shimmer, ShimmerMenu };
