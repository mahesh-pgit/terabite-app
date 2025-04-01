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
				className="py-[6.1px] my-auto text-[20px] font-[400] border-b-1 border-[#bfbfbf] focus:outline-0 focus:border-0 placeholder:font-[300] placeholder:text-[#a6a6a6]"
				size={19}
			/>
			{searchText !== "" && (
				<button
					className="cursor-pointer text-[20px] bg-[#fff] border-0 py-[6.5px] px-[10px]"
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
				className="py-[7.95px] px-[12px] text-[17px] font-[500] bg-[#fff] border-1 border-[#e9e9e9] rounded-[0.1cm] shadow-[0px_5px_10px_#e9e9e9] hover:cursor-pointer hover:bg-[#f2f2f2] hover:shadow-none hover:border-[none]"
				onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default Search;
