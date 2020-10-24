(function() {
  window.onload = function() {
    const popupLogin = document.querySelector('.popup-login');
    const openPopupLogin = document.querySelector('.main-menu__button');
    const closeButtonLogin = document.querySelector('.popup-login__close');

    const linkRegistration = document.querySelector('.popup-login__link');
    const linkLogin = document.querySelector('.popup-registration__link');

    const popupRegistration = document.querySelector('.popup-registration');
    const closeButtonRegistration = document.querySelector('.popup-registration__close');

    const popupInfo = document.querySelector('.popup-info');
    const closeButtonInfo = document.querySelector('.popup-info__close');
    const linkLoginInfo = document.querySelector('.popup-info__link');

    const mainMenu = document.querySelector('.main-menu');
    const mainMenuList = document.querySelector('.main-menu__list');
    const openMobileMenu = document.querySelector('.main-menu__button-open');
    const closeMobileMenu = document.querySelector('.main-menu__button-close');


    const mainPage = document.querySelector('.main-page');

    openPopupLogin.addEventListener('click', () => {
      popupLogin.classList.add('popup-login_is-opened');
    });
    closeButtonLogin.addEventListener('click', () => {
      popupLogin.classList.remove('popup-login_is-opened');
    });
    closeButtonRegistration.addEventListener('click', () => {
      popupRegistration.classList.remove('popup-registration_is-opened');
    });
    closeButtonInfo.addEventListener('click', () => {
      popupInfo.classList.remove('popup-info_is-opened');
    });
    linkRegistration.addEventListener('click', (event) => {
      event.preventDefault();
      popupLogin.classList.remove('popup-login_is-opened');
      popupRegistration.classList.add('popup-registration_is-opened');
    });
    linkLogin.addEventListener('click', (event) => {
      event.preventDefault();
      popupRegistration.classList.remove('popup-registration_is-opened');
      popupLogin.classList.add('popup-login_is-opened');
    });
    linkLoginInfo.addEventListener('click', (event) => {
      event.preventDefault();
      popupInfo.classList.remove('popup-info_is-opened');
      popupLogin.classList.add('popup-login_is-opened');
    });
    openMobileMenu.addEventListener('click', () => {
      mainMenu.classList.add('main-menu_black');
      mainMenuList.classList.add('main-menu__list_mobile');
      openMobileMenu.classList.add('main-menu__button-open_is-closed');
      closeMobileMenu.classList.add('main-menu__button-close_is-opened');
      mainPage.classList.add('main-page_blackout');
    });
    closeMobileMenu.addEventListener('click', () => {
      mainMenu.classList.remove('main-menu_black');
      mainPage.classList.remove('main-page_blackout');
      mainMenuList.classList.remove('main-menu__list_mobile');
      openMobileMenu.classList.remove('main-menu__button-open_is-closed');
      closeMobileMenu.classList.remove('main-menu__button-close_is-opened');
    });
  };
})();