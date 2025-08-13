import { useState } from "react";
import addEmail from "../util/addEmail";

function Popup({ setPopup }) {
	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [state, setState] = useState("Submit");
	return (
		<div className="popup-container" onClick={() => setPopup(false)}>
			<div className="popup" onClick={(e) => e.stopPropagation()}>
				{state === "Submit" && <h3>Send me a message</h3>}
				{state === "Done! ✅" && <h3>Message Sent✅</h3>}
				{state === "Error ❌" && <h3>Somthing went wrong🥲</h3>}
				<form
					onSubmit={async (e) => {
						e.preventDefault();
						setLoading(true);
						const result = await addEmail(name, content);
						setLoading(false);
						setState(result ? "Done! ✅" : "Error ❌");
						setTimeout(() => {
							setState("Submit");
						}, 2000);
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
