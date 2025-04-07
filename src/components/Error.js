import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();

	return (
		<div className="error-page flex flex-col items-center my-[150px]">
			<h1 className="text-[50px]">Oops!!!</h1>
			<h2 className="text-[40px]">Something went wrong!!</h2>
			<p className="text-[30px]">
				{err.status}: {err.statusText}
			</p>
			<p className="text-[30px]">{err.data}</p>
		</div>
	);
};

const SearchError = ({ searchText }) => {
	return (
		<div className="search-error flex flex-col items-center ">
			<h1 className="text-[40px] font-[600] m-[10px]">
				Sorry, No results found for "{searchText}"
			</h1>
			<h2 className="text-[30px] font-[500] m-[10px]">
				Please check the spelling or try searching for something else...
			</h2>
		</div>
	);
};

const OnlineError = () => {
	return (
		<div className="internet-error flex flex-col items-center m-[100px]">
			<h1 className="text-[50px]">Looks like you're offline</h1>
			<h2 className="text-[40px]">Please check your internet connection...</h2>
		</div>
	);
};

export { Error, SearchError, OnlineError };
