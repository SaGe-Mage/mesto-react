function Card({card, onCardClick}) {
	function handleCardClick() {
		onCardClick(card)
	}

	return(
		<article className="element">
			<button type="button" className="element__delete"/>
			<img className="element__pic" src={card.link} alt={card.name} onClick={handleCardClick}/>
			<div className="element__caption">
				<h2 className="element__title">{card.name}</h2>
				<div className="element__like-area">
					<button type="button" className="element__like"/>
					<p className="element__like-count">{card.likes.length}</p>
				</div>
			</div>
		</article>
	);
}

export default Card;