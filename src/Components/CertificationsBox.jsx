import PropTypes from "prop-types";
const CertificationsBox = ({ image, text }) => {
	return (
		<div className="grid gap-5 border border-black text-center">
			<img src={image} alt="" className="size-20 rounded-full sm:size-24" />
			<p className="font-bold">{text}</p>
		</div>
	);
};

export default CertificationsBox;
CertificationsBox.propTypes = {
	image: PropTypes.element.isRequired,
	text: PropTypes.string.isRequired,
};
