const TopRatedBtn = ({ resList, setResList, filteredResList, clicked, setClicked }) => {
	return (
		<div className="top-rated-filter">
			<button
				className="absolute right-[150px] p-[7.95px] text-[17px] font-[500] bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.1cm] shadow-[0px_5px_10px_#E9E9E9] hover:cursor-pointer hover:bg-[#F2F2F2] hover:shadow-none hover:border-[none]"
				style={{ backgroundColor: clicked ? "#F0F0F0" : null }}
				onClick={() => {
					clicked === false
						? (setClicked(true),
						  setResList(resList.filter((resItem) => resItem.info.avgRating > 4.0)))
						: (setClicked(false), setResList(filteredResList));
				}}>
				Ratings 4.0+ ⭐
			</button>
		</div>
	);
};

export default TopRatedBtn;
