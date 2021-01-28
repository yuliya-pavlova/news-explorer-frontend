export default class LoginForm {
  constructor(form, popup, api, linkLogin, linkPersonal, linkLogout)  {
      this.formProfile = form;
      this.popup = popup;
      this.api = api;
      this.linkLogin = linkLogin;
      this.linkPersonal = linkPersonal;
      this.linkLogout = linkLogout;
      this._setEventListeners();
  }

  _signIn = () => {
    event.preventDefault();
    this.api.signin(this.formProfile.elements.email.value, this.formProfile.elements.password.value)
        .then(res => {
            this.popup.close.call(this.popup);
            localStorage.setItem('username', res.name);
            localStorage.setItem('token', res.token);
            this.linkLogin.classList.add('element_not-visible');
            this.linkPersonal.classList.remove('element_not-visible');
            this.linkLogout.classList.remove('element_not-visible');
            this.linkLogout.querySelector('.username').textContent = res.name;
        })
        .catch((err) => {
          this.formProfile.querySelector('#server-error').textContent = err.message;
        });
  }

  _setEventListeners = () => {
      this.formProfile.addEventListener('submit', (event) => {
        this._signIn();
        this.formProfile.reset();
      });
  }
}