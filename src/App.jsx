import "./App.css";
import Copyright from "./Components/Icons/Copyright";
import Cards from "./Components/Cards";
import Contacts from "./Components/Contacts";
import { useState } from "react";
import Popup from "./Components/Popup";

function App() {
	const [popup, setPopup] = useState(false);
	return (
		<>
			<div className="container">
				{popup && <Popup setPopup={setPopup} />}
				<h1>Serving in the military</h1>
				<h2>Time Left:</h2>
				<Cards />
				<Contacts setPopup={setPopup} />
				<div className="copyright">
					<Copyright />
					<span>Copyrights Reserved, RED 2025.</span>
				</div>
			</div>
		</>
	);
}

export default App;
