const Search = ({
	backupResList,
	resList,
	setResList,
	setfilteredResList,
	searchText,
	setSearchText,
	setFilterBtnActive,
}) => {
	const handleSearch = () => {
		setResList(
			backupResList.filter((resItem) =>
				resItem.info.name.toLowerCase().includes(searchText.toLowerCase())
			)
		);
		setfilteredResList(
			backupResList.filter((resItem) =>
				resItem.info.name.toLowerCase().includes(searchText.toLowerCase())
			)
		);
	};

	return (
		<div className="search-bar h-[43px] shadow-[0px_5px_10px_#E9E9E9]">
			<input
				type="text"
				name="search"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleSearch()}
				placeholder="Search for restaurants"
				className="py-[8px] pl-[10px] text-[18px] font-[500] outline-none border-none rounded-l-[0.1cm] placeholder:font-[400] placeholder:text-[#A6A6A6]"
				size={20}
			/>
			{searchText !== "" && (
				<button
					className="cursor-pointer text-[20px] bg-[#FFF] border-0 py-[6.5px] px-[10px]"
					onClick={() => {
						setSearchText("");
						setResList(backupResList);
						setfilteredResList(backupResList);
						setFilterBtnActive(false);
					}}>
					✖
				</button>
			)}
			<button
				className="py-[8.75px] px-[15px] text-[17px] text-[#FFF] font-[500] bg-[#020202] rounded-r-[0.1cm] cursor-pointer md:hover:bg-[#5D5D5D]"
				onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default Search;
