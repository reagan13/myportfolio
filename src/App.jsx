import NavBar from "./Components/Navigation/NavBar";
import "./App.css";
import Hero from "./Components/Sections/Hero";
import MySkills from "./Components/Sections/MySkills";
function App() {
	return (
		<>
			<div className="mx-5">
				<NavBar />
				<Hero />
				<MySkills />
			</div>
		</>
	);
}

export default App;
