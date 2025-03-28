const TopRatedBtn = ({ resList, filteredResList, setFilteredResList, clicked, setClicked }) => {
	return (
		<div className="filter">
			<button
				className="filter-btn"
				style={{ backgroundColor: clicked ? "#f0f0f0" : null }}
				onClick={() => {
					clicked === false
						? (setClicked(true),
						  setFilteredResList(
								filteredResList.filter((resItem) => resItem.info.avgRating > 4.5)
						  ))
						: (setClicked(false), setFilteredResList(resList));
				}}>
				Top Rated ⭐⭐
			</button>
		</div>
	);
};

export default TopRatedBtn;
