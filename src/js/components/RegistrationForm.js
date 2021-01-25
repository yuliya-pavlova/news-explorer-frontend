export default class RegistrationForm {
  constructor(form, popup, api) {
      this.formProfile = form;
      this.popup = popup;
      this.api = api;
      this._setEventListeners();
  }

  _signUp = () => {
    event.preventDefault();
    this.api.signup(this.formProfile.elements.name.value, this.formProfile.elements.email.value, this.formProfile.elements.password.value)
        .then(res => {
            this.popup.close.call(this.popup);
        })
        .catch((err) => {
            console.log(err);
        });
  }

  _setEventListeners = () => {
      this.formProfile.addEventListener('submit', (event) => {
        this._signUp();
      });
  }
}