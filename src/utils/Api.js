import {apiOption} from "./data";

class Api {
	constructor(options) {
		this._url = options.baseUrl;
		this._headers = options.headers;
	}

	_sendRequest(path, parameters) {
		return fetch(`${this._url}${path}`, parameters)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				return Promise.reject(`Ошибка: ${res.status}`);
			})
	}

	getUserInfo() {
		return this._sendRequest('users/me', {
			headers: this._headers
		});
	}

	getInitialCards() {
		return this._sendRequest(`cards`, {
			headers: this._headers
		});
	}

	updateUserInfo(data) {
		return this._sendRequest('users/me', {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.about
			})
		});
	}

	addNewCard(newCard) {
		return this._sendRequest('cards', {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: newCard.name,
				link: newCard.link
			})
		});
	}

	changeLikeCardStatus(card, isLiked) {
		return this._sendRequest(`cards/likes/${card}`, {
			method: isLiked ? 'DELETE' : 'PUT',
			headers: this._headers
		});
	}

	deleteCard(card) {
		return this._sendRequest(`cards/${card}`, {
			method: 'DELETE',
			headers: this._headers
		});
	}

	updateUserAvatar(avatar) {
		return this._sendRequest('users/me/avatar', {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: avatar.avatar
			})
		});
	}
}

const myApi = new Api(apiOption);

export default myApi;