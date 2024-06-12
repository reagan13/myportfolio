import PropTypes from "prop-types";
const MenuList = ({ text }) => {
	return (
		<li className="py-2 text-sm sm:text-base border border-white">{text}</li>
	);
};

export default MenuList;
MenuList.propTypes = {
	text: PropTypes.string.isRequired,
};
