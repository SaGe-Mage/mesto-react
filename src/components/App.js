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
		myApi.getUserInfo()
			.then((data) => {
				setCurrentUser(data);
			})
			.catch((err) => console.log(`Что-то пошло не так: ${err}`));

		myApi.getInitialCards()
			.then((cards) => {
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

				<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

				<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

				<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>

				<ImagePopup card={selectedCard} onClose={closeAllPopups}/>

			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
