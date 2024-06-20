import hack4gov from "../../assets/hack4gov.png";
const Achievements = () => {
	return (
		<div className=" text-center mt-14 md:mt-20 lg:mt-24 xl:mt-28" id="awards">
			<p className="font-bold text-2xl lg:text-4xl text-center">Achievements</p>

			<div className="border border-white rounded-md mt-8 md:mt-10 p-5">
				<div className="flex items-center ">
					<img
						src={hack4gov}
						alt=""
						className="w-24 md:w-28 lg:w-32 xl:w-36 object-contain"
					/>
					<div className="pl-5 text-left">
						<p>Hackathon - 2nd Place</p>
						<p className="text-sm md:text-base lg:text-lg">
							Hack4Gov2 Regional Qualifying Round
						</p>
					</div>
					<p className="hidden md:block ml-auto">Aug 2023</p>
				</div>
				<p className="my-7 md:hidden">Aug 2023</p>
				<p className="text-sm md:text-base leading-6 mt-1 sm:mt-5 md:mt-10 lg:mt-14">
					As part of the team from the University of Mindanao - Main Campus, we
					won 2nd place in the Hack4Gov: Regional Qualifying Round, organized by
					the Department of Information and Communications Technology – Region
					XI and CERT-PH. Our teamwork and cybersecurity skills were key to our
					success, highlighting our commitment to promoting cyber awareness and
					creating a safer online environment.
				</p>
			</div>
		</div>
	);
};

export default Achievements;
