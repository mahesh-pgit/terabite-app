import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();

	return (
		<div className="error-page flex flex-col items-center text-center my-[30vh]">
			<h1 className="text-[50px] max-[600px]:text-[25px]">Oops!!!</h1>
			<h2 className="text-[40px] max-[600px]:text-[20px]">Something went wrong!!</h2>
			<p className="text-[30px] max-[600px]:text-[15px]">
				{err.status}: {err.statusText}
			</p>
			<p className="text-[30px] max-[600px]:text-[15px]">{err.data}</p>
		</div>
	);
};

export default Error;
