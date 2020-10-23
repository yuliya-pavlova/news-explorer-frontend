(function() {
  window.onload = function() {

    const closeButton = document.querySelector('.popup__close');

    const popupLogin = document.querySelector('.popup-login');
    const openPopupLogin = document.querySelector('.main-menu__button');

    const linkRegistration = document.querySelector('.popup-login__link');
    const linkLogin = document.querySelector('.popup-registration__link');

    const popupRegistration = document.querySelector('.popup-registration');

    openPopupLogin.addEventListener('click', () => {
      popupLogin.classList.add('popup_is-opened');
    });
    closeButton.addEventListener('click', () => {
      popupLogin.classList.remove('popup_is-opened');
      popupRegistration.classList.remove('popup_is-opened');
    });

    linkRegistration.addEventListener('click', (event) => {
      event.preventDefault();
      popupLogin.classList.remove('popup_is-opened');
      popupRegistration.classList.add('popup_is-opened');
    });

    linkLogin.addEventListener('click', (event) => {
      event.preventDefault();
      popupRegistration.classList.remove('popup_is-opened');
      popupLogin.classList.add('popup_is-opened');
    });
  };
})();