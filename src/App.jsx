import NavBar from "./Components/Navigation/NavBar";
import "./App.css";
import Hero from "./Components/Sections/Hero";
import MySkills from "./Components/Sections/MySkills";
import Achievements from "./Components/Sections/Achievements";
function App() {
	return (
		<>
			<div className="px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20 mt-2 sm:mt-4 md:mt-5">
				<NavBar />
				<Hero />
				<MySkills />
			</div>
			<Achievements />
		</>
	);
}

export default App;
