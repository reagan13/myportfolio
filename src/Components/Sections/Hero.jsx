import LinkBox from "../LinkBox";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../../App.css";
import image1 from "../../assets/image1.png";

const Hero = () => {
	return (
		<div className="my-5 sm:my-10 lg:my-20 flex md:flex-row flex-col-reverse">
			<div className="flex flex-col gap-5 md:gap-0  md:justify-between  md:w-1/2 md:mt-16 lg:mt-24 xl:mt-32">
				<p
					className="text-xl md:text-2xl lg:text-3xl xl:text-4xl sm:leading-[2.5rem] xl:leading-[3.5rem] xl:pr-10
				"
				>
					Hello, I am <b>Reagan Mabawad</b>, an aspiring <b>Web Developer</b>{" "}
					who loves to learn.
				</p>
				<p className="text-sm md:text-base lg:text-base lg:leading-7 xl:leading-8 md:line-clamp-3 lg:line-clamp-none">
					Passionate developer with experience during internship and self learn.
					Skilled in the MERN stack and full-stack web development. Eager to
					contribute innovative solutions in a dynamic tech environment.
				</p>

				<div className="flex gap-3">
					<LinkBox
						IconComponent={FaFacebook}
						link="https://www.facebook.com/reaganmabawad13"
					/>
					<LinkBox
						IconComponent={FaLinkedin}
						link="https://www.linkedin.com/in/reaganm
"
					/>
					<LinkBox
						IconComponent={FaGithub}
						link="https://github.com/reagan02"
					/>
				</div>
			</div>
			<div className=" md:w-1/2  mb-6">
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
