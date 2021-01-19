import PopupWithForm from "./PopupWithForm";

function DeletePopup({isOpen,onClose, onDeleteCard, onClickOverlay}) {

	function handleSubmit(e) {
		e.preventDefault();

		onDeleteCard();
	}
	return(
		<PopupWithForm
			title="Вы уверены?"
			name="delete"
			button="Да"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
			onClickOverlay={onClickOverlay}
		/>
	)
}

export default DeletePopup;