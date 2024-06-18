import PropTypes from "prop-types";

const SkillsBox = ({ IconComponent, text }) => {
	return (
		<button className="border-2 border-black p-2 rounded-md size-24 sm:size-28 md:size-32 lg:size-36 hover:bg-black hover:text-white transform transition-transform duration-500 ease-in-out hover:scale-110">
			<div className="items-center flex flex-col">
				<IconComponent size={40} />
				<p>{text}</p>
			</div>
		</button>
	);
};

export default SkillsBox;

SkillsBox.propTypes = {
	IconComponent: PropTypes.elementType.isRequired,
	text: PropTypes.string,
};
