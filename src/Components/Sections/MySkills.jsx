import { IoLogoJavascript } from "react-icons/io5";
import SkillsBox from "../SkillsBox";
const MySkills = () => {
	return (
		<div className="text-center mt-10">
			<p className="text-xl">
				My <b>Skills</b>
			</p>
			<div className="flex">
				<SkillsBox IconComponent={IoLogoJavascript} text="JavaScript" />
				<SkillsBox IconComponent={IoLogoJavascript} text="JavaScript" />
				<SkillsBox IconComponent={IoLogoJavascript} text="JavaScript" />
			</div>
		</div>
	);
};

export default MySkills;
