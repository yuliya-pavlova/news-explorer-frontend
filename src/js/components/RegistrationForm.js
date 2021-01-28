export default class RegistrationForm {
  constructor(form, popup, api, error) {
      this.formProfile = form;
      this.popup = popup;
      this.api = api;
      this.error = error;
      this._setEventListeners();
  }

  _signUp = () => {
    event.preventDefault();
    this.api.signup(this.formProfile.elements.name.value, this.formProfile.elements.email.value, this.formProfile.elements.password.value)
        .then(res => {
            this.popup.close.call(this.popup);
        })
        .catch((err) => {
          this.formProfile.querySelector('#server-error').textContent = err.message;
        });
  }

  _setEventListeners = () => {
      this.formProfile.addEventListener('submit', (event) => {
        this._signUp();
        this.formProfile.reset();
      });
  }
}