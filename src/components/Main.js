import React from "react";

import Edit from "../images/edit-button.svg";
import myApi from "../utils/Api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
	const [userName, setUserName] = React.useState('');
	const [userDescription, setUserDescription] = React.useState('');
	const [userAvatar, setUserAvatar] = React.useState('');
	const [cards, setCards] = React.useState([]);

	React.useEffect(() => {
		myApi.getStartInfo()
			.then(([{name, about, avatar}, cards]) => {
				setUserName(name);
				setUserDescription(about);
				setUserAvatar(avatar);
				setCards(cards);
			})
			.catch((err) => console.log(`Что-то пошло не так: ${err}`))
	});

	return(
		<main className="content">
			<section className="profile">
				<div className="profile__wrapper">
					<div className="profile__avatar-overlay">
						<img src={userAvatar} alt="Аватар" className="profile__avatar"/>
						<button type="button" className="profile__avatar-button" onClick={onEditAvatar}/>
					</div>
					<div className="profile__intro">
						<div className="profile__intro-top">
							<h1 className="profile__name">{userName}</h1>
							<button type="button" className="profile__edit-button" onClick={onEditProfile}><img
								src={Edit}
								alt="Кнопка редактировать"
								className="profile__edit-icon"/></button>
						</div>
						<p className="profile__about">{userDescription}</p>
					</div>
				</div>
				<button type="button" className="profile__add-button" onClick={onAddPlace}/>
			</section>

			<section className="gallery">
				{cards.map((card) => (
					<Card card={card} onCardClick={onCardClick} key={card._id}/>
				))}
			</section>
		</main>
	);
}

export default Main;