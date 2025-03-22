import { useState } from "react";

const Search = ({ resList, setFilteredResList }) => {
	const [searchText, setSearchText] = useState("");

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
				size={15}
			/>
			{searchText !== "" ? (
				<button
					className="clear-search"
					onClick={() => {
						setSearchText("");
						setFilteredResList(resList);
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
