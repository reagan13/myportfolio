import { useState } from "react";
import { NavbarContext } from "./NavbarContext";
import PropTypes from "prop-types";

const NavbarProvider = ({ children }) => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<NavbarContext.Provider value={{ showMobileMenu, setShowMobileMenu }}>
			{children}
		</NavbarContext.Provider>
	);
};

export default NavbarProvider;

NavbarProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
