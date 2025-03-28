const Search = ({ resList, setFilteredResList, searchText, setSearchText, setClicked }) => {
	const handleSearch = () => {
		setFilteredResList(
			resList.filter((resItem) =>
				resItem.info.name.toLowerCase().includes(searchText.toLowerCase())
			)
		);
	};

	return (
		<div className="search">
			<input
				type="text"
				name="search"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				onKeyUp={(e) => (e.key === "Enter" ? handleSearch() : null)}
				className="search-input"
				placeholder="Search for restaurants"
				size={20}
			/>
			{searchText !== "" ? (
				<button
					className="clear-search"
					onClick={() => {
						setSearchText("");
						setFilteredResList(resList);
						setClicked(false);
					}}>
					✖
				</button>
			) : null}
			<button className="search-btn" onClick={handleSearch}>
				Search
			</button>
		</div>
	);
};

export default Search;
