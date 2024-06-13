import LinkBox from "../LinkBox";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import "../../App.css";
import image1 from "../../assets/image1.png";
const Hero = () => {
	return (
		<div className="my-5 sm:my-10 lg:my-20 flex items-center">
			<div className="flex flex-col md:justify-between gap-5 md:w-1/2 lg:gap-10 xl:gap-20">
				<img
					src={image1}
					alt="image"
					className="border border-black md:hidden "
				/>
				<p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
					Hello I am, {""}
					<b>Reagan Mabawad</b>, a computer science student at{" "}
					<b>University of Mindanao.</b>
				</p>
				<p className="text-sm leading-relaxed md:text-base lg:text-lg">
					Passionate computer scientist with experience in programming
					competitions, cybersecurity hackathon, and mentoring. Skilled in the
					MERN stack and full-stack web development. Eager to contribute
					innovative solutions in a dynamic tech environment.
				</p>
				<div className="flex gap-3">
					<LinkBox IconComponent={FaFacebook} />
					<LinkBox IconComponent={BiLogoGmail} />
					<LinkBox IconComponent={FaGithub} />
				</div>
			</div>
			<div className=" w-1/2 hidden md:block ">
				<img
					src={image1}
					alt="image"
					className=" border-b-4 border-b-black  "
				/>
			</div>
		</div>
	);
};

export default Hero;
