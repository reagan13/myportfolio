import media_one from "../assets/mediaone_nobg.png";
const ExperienceBox = () => {
	return (
		<div className="border border-zinc-500 rounded-md mt-8 md:mt-10 p-5">
			<div className="flex items-center ">
				<img
					src={media_one}
					alt=""
					className="w-24 md:w-28 lg:w-32 xl:w-36 object-contain"
				/>
				<div className="pl-5 text-left md:text-lg lg:text-xl">
					<b>Back End Developer | Internship</b>
				</div>
				<p className="hidden md:block ml-auto">June 2024 - July 2024</p>
			</div>
			<p className="my-7 md:hidden">June 2024 - July 2024</p>
			<p className="text-sm md:text-base leading-6m mt-1 sm:mt-5 md:mt-10 lg:mt-14">
				I worked as a backend developer on a team that built dynamic forms from
				scratch based on our client preferences. I designed the database, set up
				the backend, and created APIs that connect everything. Working closely
				with my team, I helped create a system that lets our client easily build
				and manage forms, making their experience smooth and efficient.
			</p>
		</div>
	);
};

export default ExperienceBox;
