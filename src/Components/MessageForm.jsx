import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import LinkBox from "./LinkBox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

/* https://medium.com/weekly-webtips/simple-react-contact-form-without-back-end-9fa06eff52d9  -> react form documentation*/
const MessageForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [disabled, setDisabled] = useState(false);
	const [alertInfo, setAlertInfo] = useState({
		display: false,
		message: "",
		type: "",
	});

	// Shows alert message for form submission feedback
	const toggleAlert = (message, type) => {
		setAlertInfo({ display: true, message, type });

		// Hide alert after 5 seconds
		setTimeout(() => {
			setAlertInfo({ display: false, message: "", type: "" });
		}, 5000);
	};

	// Function called on submit that uses emailjs to send email of valid contact form
	const onSubmit = async (data) => {
		// Destrcture data object
		const { name, email, message } = data;
		try {
			// Disable form while processing submission
			setDisabled(true);

			// Define template params
			const templateParams = {
				name,
				email,
				message,
			};

			// Use emailjs to email contact form data
			await emailjs.send(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				templateParams,
				import.meta.env.VITE_PUBLIC_KEY
			);

			// Display success alert
			toggleAlert("Form submission was successful!", "success");
		} catch (e) {
			console.error(e);
			// Display error alert
			toggleAlert("Uh oh. Something went wrong.", "danger");
		} finally {
			// Re-enable form submission
			setDisabled(false);
			// Reset contact form fields after submission
			reset();
		}
	};

	return (
		<div>
			<form
				className="flex flex-col gap-8"
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<input
					type="text"
					placeholder="Your name"
					name="name"
					className=" p-4 border border-black rounded-md"
					{...register("name", {
						required: { value: true, message: "Please enter your name" },
						maxLength: {
							value: 30,
							message: "Please use 30 characters or less",
						},
					})}
				/>
				{errors.name && (
					<span className="text-red-500">{errors.name.message}</span>
				)}
				<input
					type="email"
					placeholder="Email"
					name="email"
					className=" p-4 border border-black rounded-md"
					{...register("email", {
						required: true,
						pattern:
							/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
					})}
				/>
				{errors.email && (
					<span className="text-red-500">
						Please enter a valid email address
					</span>
				)}
				<textarea
					placeholder="Message"
					className=" p-4 border border-black rounded-md h-44"
					rows={3}
					name="message"
					{...register("message", {
						required: true,
					})}
				></textarea>
				{errors.message && (
					<span className="text-red-500">Please enter a message</span>
				)}

				{alertInfo.display && (
					<div
						className={`p-4 mb-4 border rounded ${
							alertInfo.type === "success"
								? "bg-green-100 border-green-400 text-green-700"
								: alertInfo.type === "danger"
								? "bg-red-100 border-red-400 text-red-700"
								: ""
						} relative mt-5`}
						role="alert"
					>
						{alertInfo.message}
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="alert"
							aria-label="Close"
							onClick={() =>
								setAlertInfo({ display: false, message: "", type: "" })
							} // Clear the alert when close button is clicked
						></button>
					</div>
				)}

				<div className="lg:flex lg:gap-5">
					<button
						type="submit"
						className="border border-black rounded-md w-36 p-2 bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out md:text-lg md:w-44"
					>
						Send Message
					</button>
					<div className="lg:flex gap-5 hidden  ">
						<LinkBox
							IconComponent={FaFacebook}
							link="https://www.facebook.com/reaganmabawad13"
						/>
						<LinkBox IconComponent={FaLinkedin} />
						<LinkBox
							IconComponent={FaGithub}
							link="https://github.com/reagan02"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default MessageForm;
