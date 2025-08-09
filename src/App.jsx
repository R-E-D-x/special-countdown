import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Copyright from "./Components/Icons/Copyright";
import Discord from "./Components/Icons/Discord";
import Github from "./Components/Icons/Github";
import Instagram from "./Components/Icons/Instagram";
import Mail from "./Components/Icons/Mail";
import Spotify from "./Components/Icons/Spotify";
import Steam from "./Components/Icons/Steam";

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
			<div className="container">
				<h1>Time Left</h1>
				<div className="cards">
					<Card stamp={"Years"}>{yearsLeft}</Card>
					<Card stamp={"Months"}>{monthsLeft}</Card>
					<Card stamp={"Days"}>{daysLeft}</Card>
					<Card stamp={"Hours"}>{hoursLeft}</Card>
					<Card stamp={"Minutes"}>{minutesLeft}</Card>
					<Card stamp={"Seconds"}>{secondsLeft}</Card>
				</div>
				<div className="contacts">
					<div>
						<a
							target="_blank"
							href="https://discord.com/users/645874622927208448"
						>
							<Discord />
						</a>
						<a target="_blank" href="https://www.instagram.com/ahmed_mousa_1/">
							<Instagram />
						</a>
						<a target="_blank" href="https://github.com/R-E-D-x">
							<Github />
						</a>
						<a target="_blank" href="mailto:cubyvilly6@gmail.com">
							<Mail />
						</a>
					</div>
					<div className="copyright">
						<Copyright />
						<span>Copyrights Reserved, RED 2025.</span>
					</div>
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
