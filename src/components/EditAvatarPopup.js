import React from "react";

import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
	const linkRef = React.useRef();

	React.useEffect(() => {
		if (isOpen) {
			linkRef.current.value = '';
		}
	}, [isOpen]);

	function handleChangeAvatar(e) {
		linkRef.current.value = e.target.value;
	}

	function handleSubmit(e) {
		e.preventDefault();

		onUpdateAvatar({
			avatar: linkRef.current.value
		});
	}

	return (
		<PopupWithForm
			title="Обновить аватар"
			name="avatar"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<input type="url"
						 name="avatar"
						 className="popup__input popup__input_place_avatar"
						 placeholder="Ссылка на аватар"
						 ref={linkRef}
						 id="avatar-input"
						 onChange={handleChangeAvatar}
						 required/>
			<span className="popup__input-error" id="avatar-input-error"/>
		</PopupWithForm>
	)
}

export default EditAvatarPopup;