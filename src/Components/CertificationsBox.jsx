import PropTypes from "prop-types";
const CertificationsBox = ({ image, text }) => {
	return (
		<div className="flex flex-col rounded-xl gap-5 size-44 sm:size-48 md:size-52 border border-black items-center justify-center ">
			<img
				src={image}
				alt=""
				className="size-20 rounded-full sm:size-24 md:size-28"
			/>
			<p className="font-bold">{text}</p>
		</div>
	);
};

export default CertificationsBox;
CertificationsBox.propTypes = {
	image: PropTypes.element.isRequired,
	text: PropTypes.string.isRequired,
};
