function ImagePopup({card, onClose, onClickOverlay}) {
	return(
		<section className={`popup popup-big-pic popup_place_pic ${card.isOpen ? "popup_is-opened" : ""}`}
						 onClick={onClickOverlay}>
			<div className="popup__container-pic">
				<button type="button" className="popup__close-button popup__close-button_place_pic" onClick={onClose}/>
				<figure className="popup__item">
					<img className="popup__pic" src={card.link} alt={card.name}/>
					<figcaption className="popup__caption">{card.name}</figcaption>
				</figure>
			</div>
		</section>
	);
}

export default ImagePopup;