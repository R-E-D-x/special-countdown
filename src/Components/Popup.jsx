import { useEffect, useState } from "react";
import addEmail from "../util/addEmail";

function Popup({ setPopup }) {
	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [state, setState] = useState("Submit");
	const [message, setMessage] = useState("");
	const [showMessage, setShowMessage] = useState(false);
	useEffect(() => {
		setMessage(() => {
			if (state === "Done! ✅") return "Your message has been submitted! ✅";
			else return "something went wrong! ❌";
		});
	}, [state]);
	return (
		<div
			className="popup-container"
			onClick={() => {
				setPopup(false);
				setState("Submit");
				setShowMessage(false);
			}}
		>
			{showMessage && (
				<div className="popup-message">
					<h2>{message}</h2>
					<button
						onClick={(e) => {
							if (state !== "Done! ✅") e.stopPropagation();
							setState("Submit");
							setShowMessage(false);
						}}
					>
						Ok
					</button>
				</div>
			)}
			<div className="popup" onClick={(e) => e.stopPropagation()}>
				<h3>Send me a message</h3>
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						setLoading(true);
						const result = await addEmail(name, content);
						setLoading(false);
						setState(result ? "Done! ✅" : "Error ❌");
						setShowMessage(true);
					}}
					action="post"
					className="popup-form"
				>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						name="name"
						placeholder="Your name (optional)"
						required={true}
					/>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						type="text"
						name="content"
						placeholder="Message content"
						required={true}
					/>
					<div className="btns">
						<button
							onClick={(e) => {
								e.preventDefault();
								setPopup((x) => !x);
							}}
							className="cancel-btn"
						>
							Cancel
						</button>
						<button type="submit" disabled={state !== "Submit" || isLoading}>
							{isLoading ? "Loading..." : state}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Popup;
