import PropTypes from "prop-types";

const SkillsBox = ({ IconComponent, text }) => {
	return (
		<button className="border-2 border-black p-2 rounded-md">
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
