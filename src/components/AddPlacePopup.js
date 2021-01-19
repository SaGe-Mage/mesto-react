import React from 'react';

import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace, onClickOverlay}) {
	const [name, setName] = React.useState('');
	const [link, setLink] = React.useState('');

	React.useEffect(() => {
		if (isOpen) {
			setName('');
			setLink('');
		}
	}, [isOpen]);

	function handleAddCardName(e) {
		setName(e.target.value);
	}

	function handleAddCardLink(e) {
		setLink(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		onAddPlace({
			name,
			link
		});
	}

	return (
		<PopupWithForm
			title="Новое место"
			name="add"
			button="Сохранить"
			onSubmit={handleSubmit}
			isOpen={isOpen}
			onClose={onClose}
			onClickOverlay={onClickOverlay}
		>
			<input type="text"
						 name="name"
						 placeholder="Название"
						 className="popup__input popup__input_place_location"
						 id="location-input"
						 minLength="2"
						 maxLength="30"
						 value={name}
						 onChange={handleAddCardName}
						 required/>
			<span className="popup__input-error" id="location-input-error"/>

			<input type="url"
						 name="link"
						 placeholder="Ссылка на картинку"
						 className="popup__input popup__input_place_link"
						 id="link-input"
						 value={link}
						 onChange={handleAddCardLink}
						 required/>
			<span className="popup__input-error" id="link-input-error"/>
		</PopupWithForm>
	)
}

export default AddPlacePopup;