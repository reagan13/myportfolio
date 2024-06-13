import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import LinkBox from "./LinkBox";
import { useState } from "react";

const MessageForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div>
			<form className="flex flex-col gap-8">
				<input
					type="text"
					placeholder="Your name"
					className=" p-4 border border-black rounded-md"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input
					type="email"
					placeholder="Email"
					className=" p-4 border border-black rounded-md"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<textarea
					placeholder="Message"
					className=" p-4 border border-black rounded-md h-44"
					onChange={(e) => setMessage(e.target.value)}
					value={message}
				></textarea>
				<div className="lg:flex lg:gap-5">
					<button
						type="submit"
						className="border border-black rounded-md w-36 p-2 bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out md:text-lg md:w-44"
					>
						Send Message
					</button>
					<div className="lg:flex gap-5 hidden  ">
						<LinkBox IconComponent={FaFacebook} />
						<LinkBox IconComponent={BiLogoGmail} />
						<LinkBox IconComponent={FaGithub} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default MessageForm;
