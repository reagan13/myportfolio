import hack4gov from "../../assets/hack4gov.png";
const Achievements = () => {
	return (
		<div className="bg-black text-white my-20 py-10 px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20">
			<p className="font-bold text-2xl lg:text-4xl text-center">Achievements</p>

			<div className="border border-white rounded-md mt-8 md:mt-10">
				<div className="flex">
					<img src={hack4gov} alt="" className="w-24 object-contain" />
					<div>
						<p>Hackathon - 2nd Place</p>
						<p className="text-sm">Hack4Gov2 Regional Qualifying Round 2023</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Achievements;
