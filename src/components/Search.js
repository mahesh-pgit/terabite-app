const Search = ({
	backupResList,
	resList,
	setResList,
	setfilteredResList,
	searchText,
	setSearchText,
	setClicked,
}) => {
	const handleSearch = () => {
		setResList(
			resList.filter((resItem) =>
				resItem.info.name.toLowerCase().includes(searchText.toLowerCase())
			)
		);
		setfilteredResList(
			resList.filter((resItem) =>
				resItem.info.name.toLowerCase().includes(searchText.toLowerCase())
			)
		);
	};

	return (
		<div className="search-bar mx-auto h-[43px]">
			<input
				type="text"
				name="search"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleSearch()}
				placeholder="Search for restaurants"
				className="py-[6.1px] my-auto text-[20px] font-[400] border-b-1 border-[#BFBFBF] focus:outline-0 focus:border-0 placeholder:font-[300] placeholder:text-[#A6A6A6]"
				size={19}
			/>
			{searchText !== "" && (
				<button
					className="cursor-pointer text-[20px] bg-[#FFF] border-0 py-[6.5px] px-[10px]"
					onClick={() => {
						setSearchText("");
						setResList(backupResList);
						setfilteredResList(backupResList);
						setClicked(false);
					}}>
					✖
				</button>
			)}
			<button
				className="py-[7.95px] px-[12px] text-[17px] font-[500] bg-[#FFF] border-1 border-[#E9E9E9] rounded-[0.1cm] shadow-[0px_5px_10px_#E9E9E9] hover:cursor-pointer hover:bg-[#F2F2F2] hover:shadow-none hover:border-[none]"
				onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default Search;
