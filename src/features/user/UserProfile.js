import { useState, useRef, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { AVATAR_URL } from "../../assets/assets";
import LoginButton from "../../components/LoginButton";

const Profile = ({ isLoggedIn, setIsLoggedIn }) => {
	const [isProfileOpen, setIsProfileOpen] = useState(false);

	const { userInfo } = useUserContext();

	const profileRef = useRef(null);

	const buttonRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (
				profileRef.current &&
				!profileRef.current.contains(e.target) &&
				buttonRef.current &&
				!buttonRef.current.contains(e.target)
			) {
				setIsProfileOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, []);

	if (userInfo === null)
		return <div className="h-[50px] w-[50px] rounded-full m-auto bg-[#F2F2F2]"></div>;

	const { name, email, picture } = userInfo;

	return (
		<div className="profile w-[50px] h-[50px] rounded-full m-auto max-[700px]:w-[40px] max-[700px]:h-[40px] max-[500px]:w-[30px] max-[500px]:h-[30px]">
			<img
				ref={buttonRef}
				className="w-[100%] h-[100%] object-cover overflow-hidden rounded-full border-1 border-[#E9E9E9] cursor-pointer"
				src={picture ? picture : AVATAR_URL}
				onClick={() => setIsProfileOpen(!isProfileOpen)}
				onContextMenu={(e) => e.preventDefault()}
				onDragStart={(e) => e.preventDefault()}
				alt="profile-pic"
			/>
			{isProfileOpen && (
				<div
					ref={profileRef}
					className="absolute top-[110px] right-[10px] z-1 bg-[#F0F8FF] border-1 border-[#E9E9E9] rounded-[0.2cm] max-[700px]:top-[85px] max-[500px]:top-[70px]">
					<div className="w-[400px] h-[300px] flex flex-col items-center justify-center max-[600px]:w-[300px] max-[600px]:h-[220px]">
						<img
							className="w-[100px] h-[100px] object-cover overflow-hidden rounded-full bg-[#FFF] border-1 border-[#E9E9E9] max-[600px]:w-[75px] max-[600px]:h-[75px]"
							src={picture ? picture : AVATAR_URL}
							onContextMenu={(e) => e.preventDefault()}
							onDragStart={(e) => e.preventDefault()}
							alt="profile-pic"
						/>
						<p className="text-[20px] text-[#02060CEB] font-[500] mt-[10px] max-[600px]:text-[15px]">
							Name: <span className="">{name}</span>
						</p>
						<p className="text-[15px] text-[#02060CEB] font-[500] my-[10px] max-[600px]:text-[10px]">
							Email: <span className="">{email}</span>
						</p>
						<div className="logout-btn w-[100px]">
							<LoginButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
