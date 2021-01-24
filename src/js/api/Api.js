export class Api {
  constructor(config) {
      this.url = config.url;
      this.headers = config.headers;
  }

//   _getResponseData(res) {
//     if (!res.ok) {
//         return Promise.reject(`Ошибка: ${res.status}`);
//     }
//     return res.json();
// }

signin (email, password) {
  return fetch(`${this._url}/signin`, {
    method: 'POST',
    headers: this._headers,
    credentials: 'include',
    body: JSON.stringify({
      email: email,
      password: password,
    })
  })
  .then(res => {
    let json = res.json();
    if (res.ok) {
      return json;
    }
    return json.then(err => { throw err; });
  })
}

}