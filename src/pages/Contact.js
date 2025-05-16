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
import OnlineError from "../components/OnlineError";

const Contact = () => {
	const onlineStatus = useOnlineStatus();

	if (onlineStatus === false) return <OnlineError />;

	const logoStyles = "m-[10px] md:hover:scale-150 transition-all duration-200 ease-in-out ";

	const logoDimensions = "w-[40px] h-[40px] ";

	return (
		<div className="contact min-h-[100vh] flex justify-evenly p-[20px] gap-[20px] bg-gradient-to-r from-[#F0F8FF] to-[#EBEBF3] max-[600px]:flex-col max-[600px]:gap-0">
			<div className="w-auto">
				<h1 className="text-[40px] font-[700] text-[#02060CEB] mb-[3%] max-[850px]:text-[30px] max-[600px]:mb-[5px]">
					Customer Support
				</h1>
				<p className="text-[25px] text-[#02060CBF] font-[600] mb-[10%] max-[850px]:text-[20px] max-[600px]:mb-[20px]">
					Email:{" "}
					<span className="text-[#3636C7] cursor-pointer md:hover:text-[#7F8000]">
						support@terabite.in
					</span>
				</p>
				<h2 className="text-[30px] font-[700] text-[#02060CEB] mb-[3%] max-[850px]:text-[25px] max-[600px]:mb-0">
					Connect with the Developer
				</h2>
				<div className="contact-links flex flex-wrap mb-[10%] max-[600px]:mb-[10px]">
					<div className={logoStyles}>
						<a
							href="https://www.linkedin.com/in/mahesh-sai-kumar-narava/"
							target="_blank">
							<img
								className={logoDimensions}
								src={LINKEDIN_LOGO_URL}
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
								alt="linkedin-logo"
							/>
						</a>
					</div>
					<div className={logoStyles}>
						<a href="mailto:naravamaheshsaikumar.321@gmail.com" target="_blank">
							<img
								className={logoDimensions}
								src={GMAIL_LOGO_URL}
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
								alt="gmail-logo"
							/>
						</a>
					</div>
					<div className={logoStyles}>
						<a
							href="https://wa.me/919885206538?text=Hello,%20I%20am%20impressed%20by%20your%20work%20and%20would%20like%20to%20connect%20with%20you."
							target="_blank">
							<img
								className={logoDimensions}
								src={WHATSAPP_LOGO_URL}
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
								alt="whatsapp-logo"
							/>
						</a>
					</div>
					<div className={logoStyles}>
						<a href="https://www.instagram.com/mahesh_ante_nene/" target="_blank">
							<img
								className={logoDimensions}
								src={INSTAGRAM_LOGO_URL}
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
								alt="instagram-logo"
							/>
						</a>
					</div>
					<div className={logoStyles}>
						<a href="https://x.com/Mahesh_3173" target="_blank">
							<img
								className={logoDimensions}
								src={X_LOGO_URL}
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
								alt="x-logo"
							/>
						</a>
					</div>
					<div className={logoStyles}>
						<a href="https://www.reddit.com/user/Mahesh3173/" target="_blank">
							<img
								className={logoDimensions}
								src={REDDIT_LOGO_URL}
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
								alt="reddit-logo"
							/>
						</a>
					</div>
					<div className={logoStyles}>
						<a href="https://stackoverflow.com/users/18588968/mahesh-n" target="_blank">
							<img
								className={logoDimensions}
								src={STACK_OVERFLOW_LOGO_URL}
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
								alt="stackoverflow-logo"
							/>
						</a>
					</div>
				</div>
				<h2 className="text-[30px] font-[700] text-[#02060CEB] mb-[3%] max-[850px]:text-[25px] max-[600px]:mb-0">
					Find me on
				</h2>
				<div className="contact-links flex flex-wrap">
					<div className={logoStyles}>
						<a href="https://github.com/mahesh-pgit/terabite-app" target="_blank">
							<img
								className={logoDimensions}
								src={GITHUB_LOGO_URL}
								onContextMenu={(e) => e.preventDefault()}
								onDragStart={(e) => e.preventDefault()}
								alt="github-logo"
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
