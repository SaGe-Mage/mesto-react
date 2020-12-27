import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({isOpen: false, link: "", name: ""});

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
	}

	function handleCardClick(card) {
		const {link, name} = card;
		setSelectedCard({isOpen: true, link: link, name: name});
	}

	function closeAllPopups() {
		setIsAddPlacePopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard({isOpen: false, link: "", name: ""});
	}

	return (
		<div className="page">
			<Header/>

			<Main
				onEditProfile={handleEditProfileClick}
				onAddPlace={handleAddPlaceClick}
				onEditAvatar={handleEditAvatarClick}
				onCardClick={handleCardClick}/>

			<Footer/>

			<PopupWithForm title="Вы уверены?" name="delete"/>

			<PopupWithForm
				title="Обновить аватар"
				name="avatar"
				isOpen={isEditAvatarPopupOpen}
				onClose={closeAllPopups}
			>
				<>
					<input type="url" name="avatar" className="popup__input popup__input_place_avatar"
								 placeholder="Ссылка на аватар"
								 id="avatar-input" required/>
					<span className="popup__input-error" id="avatar-input-error"/>
				</>
			</PopupWithForm>

			<PopupWithForm
				title="Редактировать профиль"
				name="edit"
				isOpen={isEditProfilePopupOpen}
				onClose={closeAllPopups}
			>
				<>
					<input type="text" name="name" className="popup__input popup__input_place_name" id="name-input"
								 minLength="2"
								 maxLength="40" required/>
					<span className="popup__input-error" id="name-input-error"/>
					<input type="text" name="about" className="popup__input popup__input_place_about" id="about-input"
								 minLength="2"
								 maxLength="400" required/>
					<span className="popup__input-error" id="about-input-error"/>
				</>
			</PopupWithForm>

			<PopupWithForm
				title="Новое место"
				name="add"
				isOpen={isAddPlacePopupOpen}
				onClose={closeAllPopups}
			>
				<>
					<input type="text" name="name" placeholder="Название" className="popup__input popup__input_place_location"
								 id="location-input" minLength="2" maxLength="30" required/>
					<span className="popup__input-error" id="location-input-error"/>
					<input type="url" name="link" placeholder="Ссылка на картинку"
								 className="popup__input popup__input_place_link"
								 id="link-input" required/>
					<span className="popup__input-error" id="link-input-error"/>
				</>
			</PopupWithForm>

			<ImagePopup card={selectedCard} onClose={closeAllPopups}/>

		</div>
	);
}

export default App;
