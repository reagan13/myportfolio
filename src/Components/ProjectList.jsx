import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectList = ({
	number,
	title,
	description,
	image,
	additionalText,
	reverse,
	link,
	deployLink,
}) => {
	return (
		<div
			className={
				reverse
					? "mt-10 flex gap-5 flex-col lg:flex-row-reverse items-center lg:gap-14 xl:gap-20"
					: "mt-10 flex gap-5 flex-col lg:flex-row items-center lg:gap-14 xl:gap-20"
			}
		>
			<img src={image} alt="" className="rounded-lg lg:w-1/2" />
			<div className="flex flex-col gap-5 ">
				<p className="font-bold text-2xl">{number}</p>
				<p className="text-xl font-bold">{title}</p>
				<p className="leading-7">{description}</p>
				<div className="flex gap-5  items-center">
					<a
						href={deployLink}
						target="_blank"
						className=" rounded-xl p-2 border border-white"
					>
						<FaExternalLinkAlt className="text-xl sm:text-2xl" />
					</a>
					<a
						href={link}
						target="_blank"
						className="rounded-full p-2 border border-white text-xs"
					>
						View on Github
					</a>
					<p className="text-xs">{additionalText}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectList;

ProjectList.propTypes = {
	number: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	additionalText: PropTypes.string,
	reverse: PropTypes.bool,
	link: PropTypes.string,
	deployLink: PropTypes.string,
};
