import LinkBox from "../LinkBox";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../../App.css";
import image1 from "../../assets/image1.png";
import { AnimatePresence, motion } from "framer-motion";

const sentence1 = "Hello I am, ";
const name = "Reagan Mabawad";
const sentence2 = ", a computer science student at ";
const university = "University of Mindanao.";
const Hero = () => {
	const sentence =
		"Passionate computer scientist with experience in programming competitions, cybersecurity hackathon, and mentoring. Skilled in the MERN stack and full-stack web development. Eager to contribute innovative solutions in a dynamic tech environment.";
	return (
		<div className="my-5 sm:my-10 lg:my-20 flex items-center" id="about">
			<div className="flex flex-col md:justify-between gap-5 md:w-1/2 lg:gap-10 xl:gap-20">
				<img
					src={image1}
					alt="image"
					className="border border-black md:hidden "
				/>
				<p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
					<AnimatePresence>
						{[sentence1, name, sentence2, university].map((phrase, i) => (
							<motion.span
								key={i}
								initial={{ opacity: 0, y: -50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.5 }}
							>
								{i % 2 === 0 ? phrase : <b>{phrase}</b>}
							</motion.span>
						))}
					</AnimatePresence>
				</p>
				<p className="text-sm leading-relaxed md:text-base lg:text-lg">
					<AnimatePresence>
						{sentence.split("").map((char, i) => (
							<motion.span
								key={i}
								initial={{ opacity: 0, y: -50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.02 }}
							>
								{char}
							</motion.span>
						))}
					</AnimatePresence>
				</p>
				<div className="flex gap-3">
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
