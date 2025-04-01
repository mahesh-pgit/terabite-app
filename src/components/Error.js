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

export default Error;
