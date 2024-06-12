import PropTypes from "prop-types";
const LinkBox = ({ IconComponent }) => {
	return (
		<button className="border-2 border-black p-2 rounded-md">
			<IconComponent />
		</button>
	);
};

export default LinkBox;

LinkBox.propTypes = {
	IconComponent: PropTypes.elementType.isRequired,
};
