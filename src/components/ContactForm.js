import { useState } from "react";
import validateEmail from "../utils/validateEmail";

const ContactForm = () => {
	const [name, setName] = useState({
		value: "",
		isTouched: false,
	});
	const [email, setEmail] = useState({
		value: "",
		isTouched: false,
	});
	const [message, setMessage] = useState({
		value: "",
		isTouched: false,
	});

	const [submitClicked, setSubmitClicked] = useState(false);

	const [showSuccessMessage, setShowSuccessMessage] = useState(false);

	const validateForm = name.value && validateEmail(email.value) && message.value;

	const clearForm = () => {
		setName({ value: "", isTouched: false });
		setEmail({ value: "", isTouched: false });
		setMessage({ value: "", isTouched: false });
		setSubmitClicked(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm) {
			setShowSuccessMessage(true);
			clearForm();
		}
	};

	const fieldStyles =
		"py-[17px] px-[20px] my-[10px] text-[15px] text-[#525252] font-[600] bg-[#FFF] border-1 border-[#02060C0D] rounded-[7px] shadow-[0px_4px_8px_#1B1E2414] placeholder:text-[15px] placeholder:text-[#757575] placeholder:font-[600] focus:outline-none focus:border-[#64FFFF] focus:ring-1 focus:ring-[#64FFFF] focus:shadow-none transition-all duration-500 ease-in-out";

	const errorStyles = "text-red-500 text-[12px] font-[600] ml-[10px] ";

	return (
		<div className="contact-form w-6/12">
			<form
				onSubmit={handleSubmit}
				className="w-3/5 px-[30px] py-[20px] ml-[15%] my-[5%] border-2 border-[#FFF] rounded-[20px] hover:border-[#FF64FF]">
				<fieldset className="flex flex-col">
					<h1 className="text-[30px] font-[700] text-[#02060CEB] ml-[5px] mb-[10px]">
						Get in touch
					</h1>
					<input
						type="text"
						value={name.value}
						onChange={(e) => setName({ ...name, value: e.target.value })}
						onBlur={() => setName({ ...name, isTouched: true })}
						onFocus={() => setShowSuccessMessage(false)}
						placeholder="Enter Name"
						className={fieldStyles}
					/>
					{!name.value && (name.isTouched || submitClicked) && (
						<p className={errorStyles}>Name is required</p>
					)}
					<input
						type="text"
						value={email.value}
						onChange={(e) => setEmail({ ...email, value: e.target.value })}
						onBlur={() => setEmail({ ...email, isTouched: true })}
						onFocus={() => setShowSuccessMessage(false)}
						placeholder="Enter Email Address"
						className={fieldStyles}
					/>
					{!email.value && (email.isTouched || submitClicked) && (
						<p className={errorStyles}>Email is required</p>
					)}
					{email.isTouched && email.value && !validateEmail(email.value) && (
						<p className={errorStyles}>Email is not valid</p>
					)}
					<textarea
						value={message.value}
						onChange={(e) => setMessage({ ...message, value: e.target.value })}
						onBlur={() => setMessage({ ...message, isTouched: true })}
						onFocus={() => setShowSuccessMessage(false)}
						placeholder="Enter Message"
						rows="8"
						className={fieldStyles + " leading-[17px]"}
					/>
					{!message.value && (message.isTouched || submitClicked) && (
						<p className={errorStyles}>Message is required</p>
					)}
					<button
						type="submit"
						onClick={() => {
							setSubmitClicked(true);
							setShowSuccessMessage(false);
						}}
						className="w-2/8 m-[20px] py-[10px] text-[12px] text-[#000] bg-[#FFF] font-[700] rounded-[10px] shadow-[0px_4px_8px_#1B1E2414] cursor-pointer hover:shadow-none hover:bg-[#64FFFF] transition-all duration-500 ease-in-out">
						Submit
					</button>
					{showSuccessMessage && (
						<p className="text-green-500 text-[14px] font-[600] mx-[auto] mb-[10px]">
							Thank you for your message. It has been sent.
						</p>
					)}
					<p className="text-center text-[16px] text-[#7A7A7A] font-[500]">
						By contacting us you agree to the{" "}
						<span className="text-[#64FF] cursor-pointer">Terms and Conditions</span>{" "}
						and <span className="text-[#64FF] cursor-pointer">Privacy Policy</span>
					</p>
				</fieldset>
			</form>
		</div>
	);
};

export default ContactForm;
