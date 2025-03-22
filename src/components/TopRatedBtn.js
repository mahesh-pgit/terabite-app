import { useState } from "react";

const TopRatedBtn = ({ resList, filteredResList, setFilteredResList }) => {
	const [clicked, setClicked] = useState(false);
	return (
		<div className="filter">
			<button
				className="filter-btn"
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
