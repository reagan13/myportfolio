import LinkBox from "../LinkBox";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

const Hero = () => {
	return (
		<div className="flex">
			<div className="flex flex-col gap-5">
				<p className="text-xl">
					Hello I am, {""}
					<span className="font-bold">Reagan Mabawad</span>, an aspiring{" "}
					<span className="font-bold">Software Engineer.</span>
				</p>
				<p className="text-sm leading-relaxed">
					Driven computer science with a passion for technology and
					problem-solving. Experienced in programming competitions,
					cybersecurity hackathons, and mentoring. Knowledgeable in the MERN
					stack, with a foundation in full-stack web development. Eager to
					contribute innovative solutions in a dynamic tech environment.
				</p>
				<div className="flex gap-3">
					<LinkBox IconComponent={FaFacebook} />
					<LinkBox IconComponent={BiLogoGmail} />
					<LinkBox IconComponent={FaTwitter} />
				</div>
			</div>
		</div>
	);
};

export default Hero;
