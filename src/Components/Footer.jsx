const Footer = () => {
	return (
		<div className="bg-black text-white px-5 sm:px-5 md:px-10 lg:px-15 xl:px-20 flex justify-between items-center mt-20 lg:mt-28 py-3 lg:py-5 text-sm lg:text-base">
			<p className="font-bold ">Portfolio</p>
			<span>© {new Date().getFullYear()} Reagan Mabawad</span>
			<span className="flex gap-2">
				Design by
				<a
					href="https://www.figma.com/@jhanvishah"
					target="_blank"
					className="font-bold underline"
				>
					Jhanvi Shah
				</a>
			</span>
		</div>
	);
};

export default Footer;
