import { MdOutlineFileDownload } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavbarContext } from "../../Context/NavbarContext";
import { useContext } from "react";
const NavBar = () => {
	const { showMobileMenu, setShowMobileMenu } = useContext(NavbarContext);
	return (
		<div className="relative ">
			<nav className="flex justify-between items-center py-2 font-bold">
				<a className="">Portfolio</a>
				<button>
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
			</nav>
		</div>
	);
};

export default NavBar;

const MobileNavBar = () => {
	return (
		<ul className="absolute top-10.5 left-0 w-full text-center text-white bg-black">
			<li className="py-2">About Me</li>
			<li>About Me</li>
			<li>About Me</li>
			<li>About Me</li>
			<li>About Me</li>
		</ul>
	);
};
{
	/* <ul className="flex gap-10">
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
			<button className="text-white bg-black py-2 px-4 rounded-md flex items-center gap-2">
				Resume
				<MdOutlineFileDownload size={21} />
			</button> */
}
