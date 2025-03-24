import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();
	return (
		<div className="error-page">
			<h1>Oops!!!</h1>
			<h2>Something went wrong!!</h2>
			<p>
				{err.status}: {err.statusText}
			</p>
			<p>{err.data}</p>
		</div>
	);
};

export default Error;
