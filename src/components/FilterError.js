const FilterError = () => {
	return (
		<div className="filter-error my-[5vw] flex flex-col items-center text-center">
			<h1 className="text-[30px] font-[600] my-[10px] max-[600px]:text-[20px]">
				Sorry, No results found
			</h1>
			<h2 className="text-[20px] font-[500] max-[600px]:text-[15px]">
				Try out different combinations of filters and search terms.
			</h2>
		</div>
	);
};

export default FilterError;
