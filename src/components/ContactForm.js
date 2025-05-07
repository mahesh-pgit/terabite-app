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

	const inputFieldStyles =
		"p-[15px] my-[10px] text-[15px] text-[#525252] font-[600] bg-[#FFF] border-2 border-[#02060C0D] rounded-[7px] shadow-[0px_4px_8px_#1B1E2414] placeholder:text-[#757575] focus:outline-none focus:border-[#64FFFF] focus:shadow-none ";

	const errorMsgStyles = "text-red-500 text-[12px] font-[600] ml-[10px] ";

	return (
		<div className="contact-form w-auto max-[600px]:flex max-[600px]:justify-center">
			<form
				onSubmit={handleSubmit}
				className="w-[400px] px-[30px] py-[20px] border-2 border-[#FFF] rounded-[20px] hover:border-[#FF64FF] max-[800px]:w-[300px] max-[600px]:w-[90vw]">
				<fieldset className="flex flex-col">
					<h1 className="text-[30px] font-[700] text-[#02060CEB] ml-[5px] mb-[10px] max-[850px]:text-[25px] max-[600px]:m-0">
						Get in touch
					</h1>
					<input
						type="text"
						value={name.value}
						onChange={(e) => setName({ ...name, value: e.target.value })}
						onBlur={() => setName({ ...name, isTouched: true })}
						onFocus={() => setShowSuccessMessage(false)}
						placeholder="Enter Name"
						className={inputFieldStyles}
					/>
					{!name.value && (name.isTouched || submitClicked) && (
						<p className={errorMsgStyles}>Name is required</p>
					)}
					<input
						type="text"
						value={email.value}
						onChange={(e) => setEmail({ ...email, value: e.target.value })}
						onBlur={() => setEmail({ ...email, isTouched: true })}
						onFocus={() => setShowSuccessMessage(false)}
						placeholder="Enter Email Address"
						className={inputFieldStyles}
					/>
					{!email.value && (email.isTouched || submitClicked) && (
						<p className={errorMsgStyles}>Email is required</p>
					)}
					{email.isTouched && email.value && !validateEmail(email.value) && (
						<p className={errorMsgStyles}>Email is not valid</p>
					)}
					<textarea
						value={message.value}
						onChange={(e) => setMessage({ ...message, value: e.target.value })}
						onBlur={() => setMessage({ ...message, isTouched: true })}
						onFocus={() => setShowSuccessMessage(false)}
						placeholder="Enter Message"
						rows="8"
						className={inputFieldStyles + "leading-[17px]"}
					/>
					{!message.value && (message.isTouched || submitClicked) && (
						<p className={errorMsgStyles}>Message is required</p>
					)}
					<button
						type="submit"
						onClick={() => {
							setSubmitClicked(true);
							setShowSuccessMessage(false);
						}}
						className="w-2/8 m-[20px] py-[10px] text-[12px] text-[#000] bg-[#FFF] font-[700] rounded-[10px] shadow-[0px_4px_8px_#1B1E2414] cursor-pointer md:hover:shadow-none md:hover:bg-[#64FFFF] max-md:focus:bg-[#64FFFF]">
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
