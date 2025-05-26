import { Link, useRouteError } from "react-router-dom";
import { PAGE_NOT_FOUND_SVG } from "../assets/assets";

const Error = () => {
	const err = useRouteError();

	return (
		<div className="error-page select-none h-[90vh] flex justify-center">
			<div className="flex flex-col items-center text-center my-auto">
				<div className="relative w-[165px] h-[165px] mb-5">
					{PAGE_NOT_FOUND_SVG}
					<Link to="/">
						<h1 className="absolute top-2.5 left-2.5 text-white text-[12px] animate-pulse">
							terabite.vercel.app
						</h1>
					</Link>
				</div>
				<p className="text-[35px] font-[500] max-[600px]:text-[25px]">
					{err.status}: {err.statusText}
				</p>
				<p className="text-[22px] font-[400] max-[600px]:text-[15px]">{err.data}</p>
			</div>
		</div>
	);
};

export default Error;
