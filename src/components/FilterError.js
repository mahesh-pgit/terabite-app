const FilterError = () => {
	return (
		<div className="search-error flex flex-col items-center text-center">
			<h1 className="text-[40px] font-[600] m-[10px] max-[600px]:text-[25px]">
				Sorry, No results found
			</h1>
			<h2 className="text-[30px] font-[500] m-[10px] max-[600px]:text-[20px]">
				Try out different combinations of filters and search terms.
			</h2>
		</div>
	);
};

export default FilterError;
