import { MdOutlineFileDownload } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavbarContext } from "../../Context/NavbarContext";
import { useContext } from "react";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";
const NavBar = () => {
	const { showMobileMenu, setShowMobileMenu } = useContext(NavbarContext);

	return (
		<div className="sticky top-0 z-10 bg-white ">
			<nav className="flex justify-between items-center py-2 font-bold relative ">
				<a className="md:text-lg lg:text-xl">Portfolio</a>

				<button className="md:hidden ml-auto">
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
					<li className="hover:text-blue-500">
						<a href="#about">About Me</a>
					</li>

					<li className="hover:text-blue-500">
						<a href="#skills">Skills</a>
					</li>
					<li className="hover:text-blue-500">
						<a href="#certificates">Experience</a>
					</li>
					<li className="hover:text-blue-500">
						<a href="">Projects</a>
					</li>
				</ul>
				<a
					href="https://drive.google.com/file/d/1YTBfoFjQuO45EWzwyQCZ1WXadeNqnxBa/view?usp=sharing"
					target="_blank"
				>
					<button className="text-white bg-black py-2 px-4 rounded-md md:flex items-center gap-2 hidden hover:text-black hover:bg-white hover:border-2 hover:border-black">
						Resume
						<MdOutlineFileDownload size={21} />
					</button>
				</a>
			</nav>
		</div>
	);
};

export default NavBar;

const MobileNavBar = () => {
	return (
		<ul className="absolute top-10.5 left-0 w-full text-center text-white bg-black">
			<MenuList text="About Me" to="/about" />
			<MenuList text="Skills" to="/skills" />
			<MenuList text="Projects" to="/projects" />
			<MenuList text="Contact Me" to="/contact" />
		</ul>
	);
};
