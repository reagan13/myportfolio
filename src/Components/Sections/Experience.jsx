import ExperienceBox from "../ExperienceBox";
import { experience } from "../../data/workexperience";
const Achievements = () => {
	return (
		<div className=" bg-black text-white my-16 lg:my-20  py-10 px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20 ">
			<p className="font-bold text-2xl lg:text-4xl text-center py-4">
				My <b>Experience</b>
			</p>
			{experience.map((exp, index) => (
				<ExperienceBox
					key={index}
					logoSrc={exp.logoSrc}
					logoAlt={exp.logoAlt}
					position={exp.position}
					company={exp.company}
					dateRange={exp.dateRange}
					description={exp.description}
				/>
			))}
		</div>
	);
};

export default Achievements;
