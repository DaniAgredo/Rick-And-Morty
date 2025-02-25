import './CardInfo.css';
function CardInfo({ location }) {
	return (
		<div className="cardInfo">
			<h2 className="cardInfo__name">{location?.name}</h2>
			<div className="cardInfo__container">
				<div className="cardInfo__item">
					<h3 className="cardInfo__item-title">type</h3>
					<p className="cardInfo__item-data">{location?.type}</p>
				</div>
				<div className="cardInfo__item">
					<h3 className="cardInfo__item-title">Dimension</h3>
					<p className="cardInfo__item_data">{location?.dimension}</p>
				</div>
				<div className="cardInfo__item">
					<h3 className="cardInfo__item-title">Population</h3>
					<p className="CardInfo__item-data">{location?.residents?.length}</p>
				</div>
			</div>
		</div>
	);
}

export default CardInfo;
