function Card({ children, stamp }) {
	return (
		<div className="card">
			<div className="stamp">{stamp}</div>
			<div className="counter">{children}</div>
		</div>
	);
}

export default Card;
