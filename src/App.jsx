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
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

function App() {
	return (
		<div className="relative xl:px-14">
			<Router>
				<div className="px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20 mt-2 sm:mt-4 md:mt-5">
					<NavBar />
					<Hero />
					<MySkills />
				</div>
				<Experience />
				<Projects />

				{/* <div className="px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20 mt-2 sm:mt-4 md:mt-5">
					<AboutMe />
				</div>
				<Certifications /> */}

				<div className="px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20 mt-2 sm:mt-4 md:mt-5">
					<GetInTouch />
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
