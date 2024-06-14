import aboutme from "../../assets/aboutme.png";
const AboutMe = () => {
	return (
		<div className="my-20 md:flex gap-10">
			<div className="md:w-1/2 flex items-center justify-center">
				<img src={aboutme} alt="" />
			</div>
			<div className="flex flex-col gap-8 md:w-1/2">
				<p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-10">
					About <b>Me</b>
				</p>
				<div className="">
					<p className="line-clamp-4 md:line-clamp-6 xl:line-clamp-none mb-4">
						Hello! I&apos;m an aspiring Full Stack Web Developer with a passion
						for coding and a knack for solving complex problems. I&apos;ve had
						some exciting achievements in my tech journey, like winning 2nd
						place in a cybersecurity hackathon. This experience pushed me to
						think creatively about security challenges and showed me how to
						handle pressure. I&apos;ve also taken part in many programming
						competitions, which have helped me become better at thinking through
						problems and writing efficient code.
					</p>

					<p className="mb-4 hidden xl:block">
						When it comes to my skills, I&apos;m quick to learn new tools and
						technologies, whether it&apos;s front-end design or back-end logic.
						My ability to solve problems and work well with others makes me a
						valuable team member. My goal is to become a versatile Full Stack
						Web Developer who can make meaningful contributions to any project.
						With my mix of technical skills, mentoring experience, and strong
						soft skills, I&apos;m committed to making a positive impact in the
						tech world and beyond.
					</p>
					<button className="bg-black rounded-full w-32 md:w-40 mt-5 p-3 md:p-4 md:text-lg text-white font-semibold xl:hidden">
						Read More
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
