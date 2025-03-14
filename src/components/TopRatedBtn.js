const TopRatedBtn = ({ resList, setResList }) => {
	return (
		<div className="filter">
			<button
				className="filter-btn"
				onClick={() => {
					setResList(resList.filter((resItem) => resItem.info.avgRating > 4));
				}}>
				Top Rated ⭐⭐⭐⭐
			</button>
		</div>
	);
};

export default TopRatedBtn;
