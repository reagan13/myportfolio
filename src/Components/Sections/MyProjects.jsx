import ProjectList from "../ProjectList";
import exclusive from "../../assets/exclusive.png";
import nightas from "../../assets/nightas.png";
const MyProjects = () => {
	return (
		<div
			className="bg-black text-white my-20 py-20 px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20"
			id="projects"
		>
			<p className="text-2xl lg:text-4xl text-center">
				My <span className="font-bold">Projects</span>
			</p>
			<div className="grid lg:gap-28 xl:gap-32 gap-16 lg:mt-10 mt-5">
				<ProjectList
					number="01"
					title="MERN Stack E-Commerce"
					description="I developed a full-stack e-commerce website using the MERN stack (MongoDB, Express.js, React, and Node.js). The site includes secure user authentication, product management, a real-time shopping cart and is fully responsive. This project demonstrates my ability to build scalable, secure, and user-friendly web applications with modern technologies."
					image={exclusive}
					additionalText={"(85% Done: Not yet deployed)"}
					reverse={false}
					link="https://github.com/reagan02/mern-e-commerce.git"
				/>
				<ProjectList
					number="02"
					title="Nightas Hotel Landing Page"
					description="I developed the Nightas Hotel project during an online free bootcamp, showcasing my skills in HTML and CSS. This responsive website features a clean and elegant design, providing an optimal user experience on various devices. Through this project, I demonstrated my ability to create visually appealing and functional web pages using modern web design principles."
					image={nightas}
					reverse={true}
					link="https://github.com/reagan13/Hotel-CMNL.git"
					deployLink="https://reagan13.github.io/Hotel-CMNL/"
				/>
			</div>
		</div>
	);
};

export default MyProjects;
