import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
	const [timeLeft, setTimeLeft] = useState(
		getTimeBreakdown(new Date("2027-06-24") - new Date())
	);
	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft(getTimeBreakdown(new Date("2027-06-24") - new Date()));
		}, 1000);

		return () => clearInterval(interval); // cleanup
	}, []);

	const {
		yearsLeft,
		monthsLeft,
		daysLeft,
		hoursLeft,
		minutesLeft,
		secondsLeft,
	} = timeLeft;
	return (
		<>
			<div>
				<h1>Time Left</h1>
				<div className="body">
					<Card stamp={"Years"}>{yearsLeft}</Card>
					<Card stamp={"Months"}>{monthsLeft}</Card>
					<Card stamp={"Days"}>{daysLeft}</Card>
					<Card stamp={"Hours"}>{hoursLeft}</Card>
					<Card stamp={"Minutes"}>{minutesLeft}</Card>
					<Card stamp={"Seconds"}>{secondsLeft}</Card>
				</div>
			</div>
		</>
	);
}

function getTimeBreakdown(ms) {
	let seconds = Math.floor(ms / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);
	let daysLeft = Math.floor(hours / 24);

	const yearsLeft = Math.floor(daysLeft / 365);
	daysLeft %= 365;

	const monthsLeft = Math.floor(daysLeft / 30); // rough estimate
	daysLeft %= 30;

	const hoursLeft = hours % 24;
	const minutesLeft = minutes % 60;
	const secondsLeft = seconds % 60;

	return {
		yearsLeft,
		monthsLeft,
		daysLeft,
		hoursLeft,
		minutesLeft,
		secondsLeft,
	};
}
export default App;
