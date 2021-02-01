const mainMenu = document.querySelector('.main-menu');
const mainMenuList = document.querySelector('.main-menu__list');
const openMobileMenu = document.querySelector('.main-menu__button-open');
const closeMobileMenu = document.querySelector('.main-menu__button-close');

const overlay = document.querySelector('.overlay');

// popupLogin
const popupLogin = document.querySelector('.popup-login');
const openPopupLogin = document.querySelector('.main-menu__button-login');
const closeButtonLogin = document.querySelector('.popup-login__close');
const linkToRegistration = document.querySelector('.popup-login__link');

// popupSignUp
const popupSignUp = document.querySelector('.popup-registration');
const closeButtonSignUp = document.querySelector('.popup-registration__close');
const linkToLogin = document.querySelector('.popup-registration__link');

//popupInfo
const popupInfo = document.querySelector('.popup-info');
const openPopupInfo = document.querySelector('.main-menu__button-login');
const closeButtonInfo = document.querySelector('.popup-info__close');
const linkToLoginInfo = document.querySelector('.popup-info__link');

export {
  popupLogin,
  openPopupLogin,
  closeButtonLogin,
  linkToRegistration,
  popupSignUp,
  linkToLogin,
  closeButtonSignUp,
  popupInfo,
  openPopupInfo,
  closeButtonInfo,
  linkToLoginInfo,
  mainMenu,
  mainMenuList,
  openMobileMenu,
  closeMobileMenu,
  overlay,
};