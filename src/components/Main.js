import React from "react";

import Edit from "../images/edit-button.svg";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete}) {
	const currentUser = React.useContext(CurrentUserContext);

	return (
		<main className="content">
			<section className="profile">
				<div className="profile__wrapper">
					<div className="profile__avatar-overlay">
						<img src={currentUser.avatar} alt="Аватар" className="profile__avatar"/>
						<button type="button" className="profile__avatar-button" onClick={onEditAvatar}/>
					</div>
					<div className="profile__intro">
						<div className="profile__intro-top">
							<h1 className="profile__name">{currentUser.name}</h1>
							<button type="button" className="profile__edit-button" onClick={onEditProfile}><img
								src={Edit}
								alt="Кнопка редактировать"
								className="profile__edit-icon"/></button>
						</div>
						<p className="profile__about">{currentUser.about}</p>
					</div>
				</div>
				<button type="button" className="profile__add-button" onClick={onAddPlace}/>
			</section>

			<section className="gallery">
				{cards.map((card) => (
					<Card card={card}
								onCardClick={onCardClick}
								onCardLike={onCardLike}
								onCardDelete={onCardDelete}
								key={card._id}/>
				))}
			</section>
		</main>
	);
}

export default Main;