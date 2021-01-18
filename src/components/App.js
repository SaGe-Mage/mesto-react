import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import myApi from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
	const [selectedCard, setSelectedCard] = React.useState({isOpen: false, link: "", name: ""});
	const [currentUser, setCurrentUser] = React.useState({});
	const [cards, setCards] = React.useState([]);

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
		document.addEventListener('keydown', handleEscClose);
	}

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
		document.addEventListener('keydown', handleEscClose);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
		document.addEventListener('keydown', handleEscClose);
	}

	function handleCardClick(card) {
		const {link, name} = card;
		setSelectedCard({isOpen: true, link: link, name: name});
		document.addEventListener('keydown', handleEscClose);
	}

	function closeAllPopups() {
		setIsAddPlacePopupOpen(false);
		setIsEditProfilePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard({isOpen: false, link: "", name: ""});

		document.removeEventListener('keydown', handleEscClose);
	}

	function handleClickOverlay(event) {
		if (event.target.classList.contains('popup_is-opened')) {
			closeAllPopups();
		}
	}

	function handleEscClose(event) {
		if (event.key === 'Escape') {
			closeAllPopups();
		}
	}

	function handleUpdateUser(data) {
		myApi.updateUserInfo(data)
			.then(() => {
				setCurrentUser({...currentUser, ...data});
				closeAllPopups();
			})
			.catch((err) => console.log(`Что-то пошло не так: ${err}`))
	}

	function handleUpdateAvatar(data) {
		myApi.updateUserAvatar(data)
			.then(() => {
				setCurrentUser({...currentUser, ...data});
				closeAllPopups();
			})
			.catch((err) => console.log(`Что-то пошло не так: ${err}`))
	}

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		myApi.changeLikeCardStatus(card._id, isLiked)
			.then((newCard) => {
				const newCards = cards.map((c) => c._id === card._id ? newCard : c);
				setCards(newCards);
			})
			.catch((err) => console.log(`Что-то пошло не так: ${err}`)
			);
	}

	function handleCardDelete(card) {
		myApi.deleteCard(card._id)
			.then(() => {
				const newCards = cards.filter((c) => c._id !== card._id);
				setCards(newCards);
			})
			.catch((err) => console.log(`Что-то пошло не так: ${err}`)
			);
	}

	function handleAddPlaceSubmit(card) {
		myApi.addNewCard(card)
			.then((newCard) => {
				setCards([newCard, ...cards]);
				closeAllPopups();
			})
			.catch((err) => console.log(`Что-то пошло не так: ${err}`)
			);
	}

	React.useEffect(() => {
		Promise.all([myApi.getUserInfo(), myApi.getInitialCards()])
			.then(([userData, cards]) => {
				setCurrentUser(userData);
				setCards(cards);
			})
			.catch((err) => console.log(`Что-то пошло не так: ${err}`))
	}, []);

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="page">
				<Header/>

				<Main
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onEditAvatar={handleEditAvatarClick}
					onCardClick={handleCardClick}
					cards={cards}
					onCardLike={handleCardLike}
					onCardDelete={handleCardDelete}/>

				<Footer/>

				<PopupWithForm title="Вы уверены?" name="delete"/>

				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
					onClickOverlay={handleClickOverlay}
				/>

				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
					onClickOverlay={handleClickOverlay}
				/>

				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
					onClickOverlay={handleClickOverlay}
				/>

				<ImagePopup
					card={selectedCard}
					onClose={closeAllPopups}
					onClickOverlay={handleClickOverlay}
				/>

			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
