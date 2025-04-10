import {
	GITHUB_LOGO_URL,
	LINKEDIN_LOGO_URL,
	GMAIL_LOGO_URL,
	WHATSAPP_LOGO_URL,
	INSTAGRAM_LOGO_URL,
	X_LOGO_URL,
	REDDIT_LOGO_URL,
	STACK_OVERFLOW_LOGO_URL,
} from "../utils/assets";
import ContactForm from "./ContactForm";

const Contact = () => {
	const divStyles = "h-[40px] mr-[20px] hover:scale-150 transition-all duration-200 ease-in-out ";

	const imgStyles = "w-[40px] h-[40px] ";

	return (
		<div className="contact flex h-[100vh] bg-gradient-to-r from-[#F0F8FF] to-[#EBEBF3]">
			<div className="w-6/12">
				<div className="w-4/6  ml-[25%] mt-[10%]">
					<h1 className="mb-[3%] text-[40px] font-[700] text-[#02060CEB]">
						Customer Support
					</h1>
					<p className="mb-[10%] text-[25px] text-[#02060CBF] font-[600]">
						Email:{" "}
						<span className="text-[#3636C7] hover:cursor-pointer hover:text-[#7F8000]">
							support@terabite.in
						</span>
					</p>
					<h2 className="mb-[3%] text-[30px] font-[700] text-[#02060CEB]">
						Connect with the Developer
					</h2>
					<div className="links flex mb-[10%]">
						<div className={divStyles}>
							<a
								href="https://www.linkedin.com/in/mahesh-sai-kumar-narava/"
								target="_blank">
								<img
									src={LINKEDIN_LOGO_URL}
									className={imgStyles}
									alt="linkedin-logo"
								/>
							</a>
						</div>
						<div className={divStyles}>
							<a href="mailto:naravamaheshsaikumar.321@gmail.com" target="_blank">
								<img src={GMAIL_LOGO_URL} className={imgStyles} alt="gmail-logo" />
							</a>
						</div>
						<div className={divStyles}>
							<a
								href="https://wa.me/919885206538?text=Hello,%20I%20am%20impressed%20by%20your%20work%20and%20would%20like%20to%20connect%20with%20you."
								target="_blank">
								<img
									src={WHATSAPP_LOGO_URL}
									className={imgStyles}
									alt="whatsapp-logo"
								/>
							</a>
						</div>
						<div className={divStyles}>
							<a href="https://www.instagram.com/mahesh_ante_nene/" target="_blank">
								<img
									src={INSTAGRAM_LOGO_URL}
									className={imgStyles}
									alt="instagram-logo"
								/>
							</a>
						</div>
						<div className={divStyles}>
							<a href="https://x.com/Mahesh_3173" target="_blank">
								<img src={X_LOGO_URL} className={imgStyles} alt="x-logo" />
							</a>
						</div>
						<div className={divStyles}>
							<a href="https://www.reddit.com/user/Mahesh3173/" target="_blank">
								<img
									src={REDDIT_LOGO_URL}
									className={imgStyles}
									alt="reddit-logo"
								/>
							</a>
						</div>
						<div className={divStyles}>
							<a
								href="https://stackoverflow.com/users/18588968/mahesh-n"
								target="_blank">
								<img
									src={STACK_OVERFLOW_LOGO_URL}
									className={imgStyles}
									alt="stackoverflow-logo"
								/>
							</a>
						</div>
					</div>
					<h2 className="mb-[3%] text-[30px] font-[700] text-[#02060CEB]">Find me on</h2>
					<div className="links flex">
						<div className={divStyles}>
							<a href="https://github.com/mahesh-pgit/terabite-app" target="_blank">
								<img
									src={GITHUB_LOGO_URL}
									className={imgStyles}
									alt="github-logo"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<ContactForm />
		</div>
	);
};

export default Contact;
