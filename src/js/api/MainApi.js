export class MainApi {
  constructor(config) {
      this.url = config.url;
      this.headers = config.headers;
  }

  signin(email, password) {
    return fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: this.headers,
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
    });
  }

  signup(name, email, password ) {
    return fetch(`${this.url}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
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

  getUserData() {
    return fetch(`${this.url}/users/me`, {
      headers: this.headers,
      credentials: 'include',
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