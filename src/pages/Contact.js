import {
	GITHUB_LOGO_URL,
	LINKEDIN_LOGO_URL,
	GMAIL_LOGO_URL,
	WHATSAPP_LOGO_URL,
	INSTAGRAM_LOGO_URL,
	X_LOGO_URL,
	REDDIT_LOGO_URL,
	STACK_OVERFLOW_LOGO_URL,
} from "../assets/assets";
import ContactForm from "../components/ContactForm";
import useOnlineStatus from "../hooks/useOnlineStatus";
import OfflineError from "../components/OfflineError";

const Contact = () => {
	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) return <OfflineError />;

	const developerSocialProfiles = [
		{
			name: "linkedin-logo",
			url: "https://www.linkedin.com/in/mahesh-sai-kumar-narava/",
			logoUrl: LINKEDIN_LOGO_URL,
		},
		{
			name: "gmail-logo",
			url: "mailto:naravamaheshsaikumar.321@gmail.com",
			logoUrl: GMAIL_LOGO_URL,
		},
		{
			name: "whatsapp-logo",
			url: "https://wa.me/919885206538?text=Hello,%20I%20am%20impressed%20by%20your%20work%20and%20would%20like%20to%20connect%20with%20you.",
			logoUrl: WHATSAPP_LOGO_URL,
		},
		{
			name: "instagram-logo",
			url: "https://www.instagram.com/mahesh_ante_nene/",
			logoUrl: INSTAGRAM_LOGO_URL,
		},
		{
			name: "x-logo",
			url: "https://x.com/Mahesh_3173",
			logoUrl: X_LOGO_URL,
		},
		{
			name: "reddit-logo",
			url: "https://www.reddit.com/user/Mahesh3173/",
			logoUrl: REDDIT_LOGO_URL,
		},
		{
			name: "stackoverflow-logo",
			url: "https://stackoverflow.com/users/18588968/mahesh-n",
			logoUrl: STACK_OVERFLOW_LOGO_URL,
		},
	];

	const logoStyles = "m-[10px] md:hover:scale-150 transition-all duration-200 max-[685px]:m-2 ";

	const logoDimensions = "w-[40px] h-[40px] max-[800px]:w-[30px] max-[800px]:h-[30px] ";

	return (
		<div className="contact min-h-[100vh] flex justify-evenly p-[20px] gap-[20px] bg-gradient-to-r from-[#F0F8FF] to-[#EBEBF3] max-[800px]:justify-between max-[685px]:flex-col">
			<div className="w-auto">
				<h1 className="text-[45px] font-[700] text-[#02060CEB] mb-[3%] max-[860px]:text-[30px] max-[685px]:mb-[5px]">
					Customer Support
				</h1>
				<p className="text-[25px] text-[#02060CBF] font-[600] mb-[10%] max-[860px]:text-[18px] max-[685px]:mb-[20px]">
					Email:&nbsp;
					<span className="text-[#3636C7] cursor-pointer md:hover:text-[#7F8000]">
						support@terabite.in
					</span>
				</p>
				<h2 className="text-[25px] font-[700] text-[#02060CEB] mb-[3%] max-[860px]:text-[20px] max-[685px]:m-0">
					Connect with the Developer
				</h2>
				<div className="contact-links flex flex-wrap mb-[10%] max-[685px]:mb-[10px]">
					{developerSocialProfiles.map((profile) => (
						<div key={profile.name} className={logoStyles}>
							<a href={profile.url} target="_blank">
								<img
									src={profile.logoUrl}
									alt={profile.name}
									className={logoDimensions}
									onDragStart={(e) => e.preventDefault()}
								/>
							</a>
						</div>
					))}
				</div>
				<h2 className="text-[25px] font-[700] text-[#02060CEB] mb-[3%] max-[860px]:text-[20px] max-[685px]:m-0">
					Find me on
				</h2>
				<div className="contact-links flex flex-wrap">
					<div className={logoStyles}>
						<a href="https://github.com/mahesh-pgit/terabite-app" target="_blank">
							<img
								src={GITHUB_LOGO_URL}
								alt="github-logo"
								className={logoDimensions}
								onDragStart={(e) => e.preventDefault()}
							/>
						</a>
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	);
};

export default Contact;
