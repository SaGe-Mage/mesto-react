import React from "react";

import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, onClickOverlay}) {
	const [link, setLink] = React.useState('');

	React.useEffect(() => {
		if (isOpen) {
			setLink('');
		}
	}, [isOpen]);

	function handleChangeAvatar(e) {
		setLink(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();

		onUpdateAvatar({
			avatar: link
		});
	}

	return (
		<PopupWithForm
			title="Обновить аватар"
			name="avatar"
			button="Сохранить"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
			onClickOverlay={onClickOverlay}
		>
			<input type="url"
						 name="avatar"
						 className="popup__input popup__input_place_avatar"
						 placeholder="Ссылка на аватар"
						 value={link}
						 id="avatar-input"
						 onChange={handleChangeAvatar}
						 required/>
			<span className="popup__input-error" id="avatar-input-error"/>
		</PopupWithForm>
	)
}

export default EditAvatarPopup;