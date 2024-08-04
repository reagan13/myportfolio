import ProjectList from "../ProjectList";
import flash from "../../assets/flash.gif";
import nightas from "../../assets/nightas.png";
import dynaform from "../../assets/dynaform.gif";
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
					title="HTMX DynaForm"
					description="I developed the backend of DynaForms, a web application for creating and managing online forms using Express.js, HTMX, and MongoDB. The site supports various form types, real-time data analysis, and sharing options, making it ideal for surveys, feedback collection, and event registrations. This project highlights my ability to design a backend system, especially using the Nosql database and building APIS."
					image={dynaform}
					reverse={false}
					link="https://github.com/reagan02/DynaForm.git"
				/>
				<ProjectList
					number="02"
					title="MERN Stack E-Commerce"
					description="I developed a full-stack e-commerce website using the MERN stack (MongoDB, Express.js, React, and Node.js). The site includes secure user authentication, product management, a real-time shopping cart and is fully responsive. This project showcase my ability to build scalable, and secure web applications and understanding the context of fullstack development."
					image={flash}
					additionalText={"(85% Done: Not yet deployed)"}
					reverse={true}
					link="https://github.com/reagan02/mern-e-commerce.git"
				/>
				<ProjectList
					number="03"
					title="HTML CSS Landing Page"
					description="I developed the Nightas Hotel project during an online free boot camp, showcasing my skills in HTML and CSS. This responsive website features a clean design, providing an optimal user experience on various devices. Through this project, I demonstrated my ability to develop a front-end static website."
					image={nightas}
					reverse={false}
					link="https://github.com/reagan13/Hotel-CMNL.git"
					deployLink="https://reagan13.github.io/Hotel-CMNL/"
				/>
			</div>
		</div>
	);
};

export default MyProjects;
