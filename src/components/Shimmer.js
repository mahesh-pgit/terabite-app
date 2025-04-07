const Shimmer = () => {
	const cards = [];
	for (let i = 1; i <= 20; i++) {
		cards.push(
			<div
				key={i}
				className="card h-[335px] w-[250px] my-[20px] mx-[14px] bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.3cm] shadow-[0px_5px_10px_#E9E9E9]">
				<div className="card-img h-[175px] w-[220px] rounded-[0.3cm] m-[15px] bg-[#F2F2F2]"></div>
			</div>
		);
	}

	return <div className="cards-container flex flex-wrap w-11/12 m-auto">{cards}</div>;
};

const ShimmerMenu = () => {
	return (
		<div className="w-[800px] h-[240px] mx-auto mt-[20px] border-1 border-[#E9E9E9] rounded-[0.3cm] shadow-[0px_5px_10px_#E9E9E9]">
			<div className="h-[200px] w-[200px] m-[20px] rounded-[0.3cm] bg-[#F2F2F2]"></div>
		</div>
	);
};

export { Shimmer, ShimmerMenu };
