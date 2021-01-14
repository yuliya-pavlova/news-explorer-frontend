export default class Api {
  constructor(config) {
      this.url = config.url;
      this.headers = config.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}

  _signIn(email, password) {
    return fetch(`${this.url}/signin`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          email: email,
          password: password
        })
    })
        .then(res => {
            return this._getResponseData(res);
        });
  }
}