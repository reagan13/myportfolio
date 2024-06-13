const MessageForm = () => {
	return (
		<div>
			<form className="flex flex-col gap-8">
				<input
					type="text"
					placeholder="Your name"
					className=" p-2 border border-black rounded-md"
				/>
				<input
					type="email"
					placeholder="Email"
					className=" p-2 border border-black rounded-md"
				/>
				<textarea
					placeholder="Message"
					className=" p-2 border border-black rounded-md"
				></textarea>
				<button type="submit">Send Message</button>
			</form>
		</div>
	);
};

export default MessageForm;
