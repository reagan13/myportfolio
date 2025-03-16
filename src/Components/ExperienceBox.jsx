import React from "react";
import PropTypes from "prop-types";

const ExperienceBox = ({
	logoSrc,
	logoAlt,
	position,
	company,
	dateRange,
	description,
}) => {
	return (
		<div className="border border-zinc-500 rounded-md mt-8 md:mt-10 p-5">
			<div className="flex items-center">
				<img
					src={logoSrc}
					alt={logoAlt || company}
					className="w-24 md:w-28 lg:w-32 xl:w-36 object-contain"
				/>
				<div className="pl-5 text-left md:text-lg lg:text-xl">
					<b>
						{position} | {company}
					</b>
				</div>
				<p className="hidden md:block ml-auto">{dateRange}</p>
			</div>
			<p className="my-7 md:hidden">{dateRange}</p>
			<p className="text-sm md:text-base leading-6m mt-1 sm:mt-5 md:mt-10">
				{description}
			</p>
		</div>
	);
};

ExperienceBox.propTypes = {
	logoSrc: PropTypes.string.isRequired,
	logoAlt: PropTypes.string,
	position: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired,
	dateRange: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default ExperienceBox;
