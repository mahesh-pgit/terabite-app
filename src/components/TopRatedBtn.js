const TopRatedBtn = ({
	resList,
	setResList,
	filteredResList,
	filterBtnActive,
	setFilterBtnActive,
}) => {
	return (
		<div className="top-rated-filter absolute w-[50%] left-[50%] text-center max-[950px]:static max-[950px]:mt-[10px]">
			<button
				className={`py-[7.95px] px-[10px] text-[17px] font-[500] border-1 border-[#E9E9E9] rounded-[0.1cm] cursor-pointer ${
					filterBtnActive ? "bg-[#F0F0F0]" : "bg-[#FFF]"
				}`}
				onClick={() => {
					filterBtnActive === false
						? (setFilterBtnActive(true),
						  setResList(resList.filter((resItem) => resItem.info.avgRating > 4.0)))
						: (setFilterBtnActive(false), setResList(filteredResList));
				}}>
				Ratings 4.0+ ⭐{" "}
				{filterBtnActive && <span className=" text-[#A6A6A6] text-[15px]">✖</span>}
			</button>
		</div>
	);
};

export default TopRatedBtn;
