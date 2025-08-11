import Discord from "./Icons/Discord";
import Github from "./Icons/Github";
import Instagram from "./Icons/Instagram";
import Mail from "./Icons/Mail";

function Contacts({ setPopup }) {
	return (
		<div className="contacts">
			<div>
				<a target="_blank" href="https://discord.com/users/645874622927208448">
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
			<button onClick={setPopup}>contact me direcly</button>
		</div>
	);
}

export default Contacts;
