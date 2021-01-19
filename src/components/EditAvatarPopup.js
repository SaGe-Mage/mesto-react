import React from "react";

import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar, onClickOverlay}) {
	const [link, setLink] = React.useState('');

	const [errLink, setErrLink] = React.useState(false);
	const [errLinkMes, setErrLinkMes] = React.useState('');

	React.useEffect(() => {
		if (isOpen) {
			setLink('');
			setErrLink(false);
			setErrLinkMes('');
		}
	}, [isOpen]);

	function handleChangeAvatar(e) {
		setErrLink(e.target.validity.valid);
		setErrLinkMes(e.target.validationMessage);
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
			isValid={errLink}
			onClose={onClose}
			onSubmit={handleSubmit}
			onClickOverlay={onClickOverlay}
		>
			<input
				type="url"
				name="avatar"
				className="popup__input popup__input_place_avatar"
				placeholder="Ссылка на аватар"
				value={link}
				id="avatar-input"
				onChange={handleChangeAvatar}
				required
			/>
			<span
				className={`popup__input-error ${ !errLink ? "popup_input-error_active" : ''}`}
				id="link-input-error"
			>
				{errLinkMes}
			</span>
		</PopupWithForm>
	)
}

export default EditAvatarPopup;