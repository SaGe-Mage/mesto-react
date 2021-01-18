function PopupWithForm({title, name, children, isOpen, onClose, onSubmit, onClickOverlay}) {
	return(
		<section className={`popup popup_place_${name} ${isOpen ? "popup_is-opened" : ""}`} onClick={onClickOverlay}>
			<div className="popup__container">
				<button type="button" className={`popup__close-button popup__close-button_place_${name}`} onClick={onClose}/>
				<form name={`${name}-popup`}
							method="GET"
							className={`popup__content popup__content_place_${name}`}
							onSubmit={onSubmit}
							noValidate>
					<h2 className="popup__title">{title}</h2>
					{children}
					<button type="submit" name="submit" className={`popup__button popup__button_place_${name}`}>Сохранить
					</button>
				</form>
			</div>
		</section>
	);
}

export default PopupWithForm;