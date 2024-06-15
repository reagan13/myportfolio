import MessageForm from "../MessageForm";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import LinkBox from "../LinkBox";
import "../../App.css";
const GetInTouch = () => {
	return (
		<div
			className="mt-28 flex flex-col gap-10 sm:gap-14 lg:flex-row lg:justify-between lg:gap-20 "
			id="contact"
		>
			<div className="flex flex-col gap-5 sm:gap-10 lg:w-1/2 ">
				<MessageForm />
				<div className="flex gap-5 lg:hidden">
					<LinkBox IconComponent={FaFacebook} />
					<LinkBox IconComponent={BiLogoGmail} />
					<LinkBox IconComponent={FaGithub} />
				</div>
			</div>
			<div className="flex flex-col gap-7 lg:w-1/2 lg:mt-14">
				<p className="text-3xl md:text-4xl font-bold">
					Get <b className="outlined-text">In</b> Touch
				</p>
				<p className="leading-7 lg:leading-8 ">
					Thank you for visiting my portfolio! If you&apos;re interested in my
					skills and experience or want to discuss potential opportunities,
					please reach out. I look forward to connecting with you!
				</p>
				<p className="text-xl font-bold">reaganmabawad13@gmail.com</p>
				<p className="text-xl font-bold">+63 9455419799</p>
			</div>
		</div>
	);
};

export default GetInTouch;
