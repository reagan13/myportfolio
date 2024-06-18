import its_db from "../../assets/its_db.png";
import its_java from "../../assets/its_java.png";
import psite from "../../assets/psite.png";
import h4g from "../../assets/h4g.png";
import CertificationsBox from "../CertificationsBox";
const Certifications = () => {
	return (
		<div
			className="text-center mt-14 md:mt-20 lg:mt-24 xl:mt-28"
			id="certificate"
		>
			<p className="text-2xl lg:text-4xl">
				<b>Certifications / Certificates</b>
			</p>

			<div className="mt-8 lg:mt-16 flex flex-wrap justify-around gap-10 sm:gap-12 md:gap-16">
				<CertificationsBox image={its_db} text="ITS Database" />
				<CertificationsBox image={its_java} text="ITS Java" />
				<CertificationsBox image={psite} text="Programming" />
				<CertificationsBox image={h4g} text="Hack 4 Gov" />
				<CertificationsBox image={h4g} text="Skills Clinic Mentor" />
			</div>
		</div>
	);
};

export default Certifications;
