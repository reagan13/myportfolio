import PropTypes from "prop-types";
const LinkBox = ({ IconComponent }) => {
	return (
		<button className="border-2 border-black p-2 md:p-3 lg:p-4 rounded-md hover:bg-black hover:text-white sm:size-10 md:size-12	 lg:size-16">
			<IconComponent className="sm:text-xl lg:text-3xl" />
		</button>
	);
};

export default LinkBox;

LinkBox.propTypes = {
	IconComponent: PropTypes.elementType.isRequired,
};
