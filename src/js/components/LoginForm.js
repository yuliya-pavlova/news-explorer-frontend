export default class LoginForm {
  constructor(form, popup, api) {
      this.formProfile = form;
      this.popup = popup;
      this.api = api;
      this._setEventListeners();
  }

  _signIn = () => {
    event.preventDefault();
    this.api.signin(this.formProfile.elements.email.value, this.formProfile.elements.password.value)
        .then(res => {
            this.popup.close.call(this.popup);
        })
        .catch((err) => {
          this.formProfile.querySelector('#server-error').textContent = err.message;
        });
  }

  _setEventListeners = () => {
      this.formProfile.addEventListener('submit', (event) => {
        this._signIn();
      });
  }
}