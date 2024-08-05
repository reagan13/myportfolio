import PropTypes from "prop-types";
const MenuList = ({ text, to }) => {
	return (
		<a href={to}>
			<li className="py-2 text-sm sm:text-base border border-white">{text}</li>
		</a>
	);
};

export default MenuList;
MenuList.propTypes = {
	text: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};
