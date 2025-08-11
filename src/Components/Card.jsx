function Card({ children, stamp }) {
	return (
		<div className="card">
			<div className="stamp no-select">{stamp}</div>
			<div className="counter no-select">{children}</div>
		</div>
	);
}

export default Card;
