import { MdOutlineFileDownload } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavbarContext } from "../../Context/NavbarContext";
import { useContext } from "react";
import MenuList from "./MenuList";
const NavBar = () => {
	const { showMobileMenu, setShowMobileMenu } = useContext(NavbarContext);
	return (
		<div className="sticky top-0 z-10 bg-white ">
			<nav className="flex justify-between items-center py-2 font-bold relative ">
				<a className="md:text-lg lg:text-xl">Portfolio</a>
				<button className="md:hidden">
					{showMobileMenu ? (
						<>
							<HiOutlineXMark
								size={30}
								onClick={() => setShowMobileMenu(!showMobileMenu)}
							/>
							<MobileNavBar />
						</>
					) : (
						<RxHamburgerMenu
							size={30}
							onClick={() => setShowMobileMenu(!showMobileMenu)}
						/>
					)}
				</button>

				<ul className="md:flex md:gap-5 lg:gap-10 hidden text-sm lg:text-base">
					<li>
						<a>About Me</a>
					</li>

					<li>
						<a>Skills</a>
					</li>
					<li>
						<a>Projects</a>
					</li>
					<li>
						<a>Contact Me</a>
					</li>
				</ul>
				<button className="text-white bg-black py-2 px-4 rounded-md md:flex items-center gap-2 hidden ">
					Resume
					<MdOutlineFileDownload size={21} />
				</button>
			</nav>
		</div>
	);
};

export default NavBar;

const MobileNavBar = () => {
	return (
		<ul className="absolute top-10.5 left-0 w-full text-center text-white bg-black">
			<MenuList text="About Me" />
			<MenuList text="Skills" />
			<MenuList text="Projects" />
			<MenuList text="Contact Me" />
		</ul>
	);
};
