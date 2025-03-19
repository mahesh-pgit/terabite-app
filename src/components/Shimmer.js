const Shimmer = () => {
	const cards = [];
	for (let i = 1; i <= 12; i++) {
		cards.push(<div key={i} className="shimmer-card"></div>);
	}
	return <div className="shimmer-container">{cards}</div>;
};

export default Shimmer;
