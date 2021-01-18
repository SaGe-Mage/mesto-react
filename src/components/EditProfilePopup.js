import React from "react";

import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser, onClickOverlay}) {
	const currentUser = React.useContext(CurrentUserContext);

	const [name, setName] = React.useState(currentUser.name);
	const [description, setDescription] = React.useState(currentUser.about);

	React.useEffect(() => {
		setName(currentUser.name);
		setDescription(currentUser.about);
	}, [currentUser]);

	function handleChangeName(e) {
		setName(e.target.value);
	}

	function handleChangeAbout(e) {
		setDescription(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		onUpdateUser({
			name,
			about: description,
		});
	}

	return (
		<PopupWithForm
			title="Редактировать профиль"
			name="edit"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
			onClickOverlay={onClickOverlay}
		>
			<input type="text"
						 name="name"
						 className="popup__input popup__input_place_name"
						 id="name-input"
						 minLength="2"
						 maxLength="40"
						 value={name}
						 onChange={handleChangeName}
						 required/>
			<span className="popup__input-error" id="name-input-error"/>

			<input type="text"
						 name="about"
						 className="popup__input popup__input_place_about"
						 id="about-input"
						 minLength="2"
						 maxLength="400"
						 value={description}
						 onChange={handleChangeAbout}
						 required/>
			<span className="popup__input-error" id="about-input-error"/>
		</PopupWithForm>
	)
}

export default EditProfilePopup;