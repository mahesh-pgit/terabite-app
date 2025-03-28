const Shimmer = () => {
	const cards = [];
	for (let i = 1; i <= 25; i++) {
		cards.push(
			<div key={i} className="shimmer-card">
				<div className="shimmer-img-container"></div>
			</div>
		);
	}
	return <div className="shimmer-container">{cards}</div>;
};

const ShimmerMenu = () => {
	return (
		<div className="shimmer-info-container">
			<div className="shimmer-logo-container"></div>
		</div>
	);
};

export { Shimmer, ShimmerMenu };
