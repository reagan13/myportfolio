const NavBar = () => {
	return (
		<nav className="flex justify-between border">
			<a className="text-bold">Personal</a>
			<ul className="flex gap-5">
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
			<button className="text-white bg-black p-5">Resume</button>
		</nav>
	);
};

export default NavBar;
