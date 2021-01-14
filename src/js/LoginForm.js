export default class LoginForm {
  constructor(form, popup, api) {
      this.formProfile = form;
      this.popup = popup;
      this.api = api;
      this._setEventListeners();
  }

  _signIn = () => {
      event.preventDefault();
      this.api._signIn(this.formProfile.elements.email.value, this.formProfile.elements.password.value)
          .then(res => {
              // положить куку в storage
              this.popup.close();
          })
          .catch((err) => {
              console.log(err);
          });
  }

  _setEventListeners = () => {
      this.formProfile.addEventListener('submit', () => {
          this._signIn();
      });
  }
}