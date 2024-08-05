import NavBar from "./Components/Navigation/NavBar";
import "./App.css";
import Hero from "./Components/Sections/Hero";
import MySkills from "./Components/Sections/MySkills";
import Experience from "./Components/Sections/Experience";
import AboutMe from "./Components/Sections/AboutMe";
import Projects from "./Components/Sections/Projects";
import Certifications from "./Components/Sections/Certifications";
import GetInTouch from "./Components/Sections/GetInTouch";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
	return (
		<div className="relative xl:px-14">
			<div className="px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20 mt-2 sm:mt-4 md:mt-5">
				<NavBar />
				<div id="hero">
					<Hero />
				</div>
				<div id="skills" className="scroll-margin-top ">
					<MySkills />
				</div>
			</div>

			<div id="experience" className="scroll-margin-top ">
				<Experience />
			</div>

			<div id="projects" className="scroll-margin-top ">
				<Projects />
			</div>
			<div className="px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20 mt-2 sm:mt-4 md:mt-5">
				<div id="contact" className="scroll-margin-top ">
					<GetInTouch />
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default App;
