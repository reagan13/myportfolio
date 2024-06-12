import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

import SkillsBox from "../SkillsBox";
const MySkills = () => {
	return (
		<div className="text-center mt-14 md:mt-20 lg:mt-24 xl:mt-28">
			<p className="text-2xl lg:text-4xl">
				Tech <b>Stack</b>
			</p>
			<div className="mt-5 md:mt-8 lg:mt-16 flex flex-wrap justify-center gap-5 lg:grid grid-cols-5 lg:gap-14 lg:px-10">
				<SkillsBox IconComponent={IoLogoJavascript} text="JavaScript" />
				<SkillsBox IconComponent={FaReact} text="React JS" />
				<SkillsBox IconComponent={SiExpress} text="Express JS" />
				<SkillsBox IconComponent={RiTailwindCssFill} text="TailWind " />
				<SkillsBox IconComponent={BiLogoMongodb} text="MongoDB " />
				<SkillsBox IconComponent={SiMysql} text="MySQL " />
				<SkillsBox IconComponent={FaGitAlt} text="Git " />
				<SkillsBox IconComponent={SiPostman} text="Postman " />
				<SkillsBox IconComponent={FaHtml5} text="HTML " />
				<SkillsBox IconComponent={FaCss3} text="CSS " />
			</div>
		</div>
	);
};

export default MySkills;
