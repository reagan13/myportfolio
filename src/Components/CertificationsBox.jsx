import PropTypes from "prop-types";
const CertificationsBox = ({ image, text }) => {
	return (
		<button
			className="flex flex-col rounded-xl gap-5 size-44 sm:size-48 md:size-52 border border-white items-center justify-center
		transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 hover:box-shadow-2xl hover:bg-gray-20"
		>
			<img
				src={image}
				alt=""
				className="size-20 rounded-full sm:size-24 md:size-28"
			/>
			<p className="font-bold">{text}</p>
		</button>
	);
};

export default CertificationsBox;

CertificationsBox.propTypes = {
	image: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
