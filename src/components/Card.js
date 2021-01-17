import React from "react";

import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
	const currentUser = React.useContext(CurrentUserContext);

	const isOwn = card.owner._id === currentUser._id;
	const isLiked = card.likes.some(i => i._id === currentUser._id);

	const cardDeleteButtonClassName = (
		`element__delete ${isOwn ? 'element__delete_visible' : ''}`
	);

	const cardLikeButtonClassName = (
		`element__like ${isLiked ? 'element__like_active' : ''}`
	);

	function handleCardClick() {
		onCardClick(card);
	}

	function handleLikeClick() {
		onCardLike(card);
	}

	function handleDeleteClick() {
		onCardDelete(card);
	}

	return (
		<article className="element">
			<button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}/>
			<img className="element__pic" src={card.link} alt={card.name} onClick={handleCardClick}/>
			<div className="element__caption">
				<h2 className="element__title">{card.name}</h2>
				<div className="element__like-area">
					<button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}/>
					<p className="element__like-count">{card.likes.length}</p>
				</div>
			</div>
		</article>
	);
}

export default Card;