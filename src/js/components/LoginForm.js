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
            console.log(err);
        });
  }

  _setEventListeners = () => {
      this.formProfile.addEventListener('submit', (event) => {
        this._signIn();
      });
  }
}