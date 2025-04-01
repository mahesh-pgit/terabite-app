const TopRatedBtn = ({ resList, setResList, filteredResList, clicked, setClicked }) => {
	return (
		<div className="top-rated-filter">
			<button
				className="absolute right-[150px] p-[7.95px] text-[17px] font-[500] bg-[#fff] border-1 border-[#e9e9e9] rounded-[0.1cm] shadow-[0px_5px_10px_#e9e9e9] hover:cursor-pointer hover:bg-[#f2f2f2] hover:shadow-none hover:border-[none]"
				style={{ backgroundColor: clicked ? "#f0f0f0" : null }}
				onClick={() => {
					clicked === false
						? (setClicked(true),
						  setResList(resList.filter((resItem) => resItem.info.avgRating > 4.5)))
						: (setClicked(false), setResList(filteredResList));
				}}>
				Top Rated ⭐⭐
			</button>
		</div>
	);
};

export default TopRatedBtn;
