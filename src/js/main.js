// import { Api } from './api/Api';
// import LoginForm from './components/LoginForm';
import Popup from './components/Popup';
import { popupInfoList, popupLoginList, popupSignupList } from './constants/constants';
import {
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
 } from './constants/constantsDom';
import '../pages/main.css';


const loginPopup = new Popup(popupLogin, popupLoginList.openedClassPopup);
const signUpPopup = new Popup(popupSignUp, popupSignupList.openedClassPopup);
const infoPopup = new Popup(popupInfo, popupInfoList.openedClassPopup);

// const loginForm = new LoginForm(popupLogin, signInPopup, api);

openPopupLogin.addEventListener('click', () => {
  loginPopup.open.call(loginPopup);
});

closeButtonLogin.addEventListener('click', () => {
  loginPopup.close.call(loginPopup);
});

linkToRegistration.addEventListener('click', () => {
  loginPopup.close.call(loginPopup);
  event.preventDefault();
  signUpPopup.open.call(signUpPopup);
});

closeButtonSignUp.addEventListener('click', () => {
  signUpPopup.close.call(signUpPopup);
});

linkToLogin.addEventListener('click', () => {
  signUpPopup.close.call(loginPopup);
  event.preventDefault();
  loginPopup.open.call(loginPopup);
});

closeButtonInfo.addEventListener('click', () => {
  infoPopup.close.call(infoPopup);
});

linkToLoginInfo.addEventListener('click', (event) => {
  infoPopup.close.call(infoPopup);
  event.preventDefault();
  loginPopup.open.call(loginPopup);
});

openMobileMenu.addEventListener('click', () => {
  mainMenu.classList.add('main-menu_black');
  mainMenuList.classList.add('main-menu__list_mobile');
  mainMenuList.classList.add('main-menu__list_mobile-black');
  openMobileMenu.classList.add('main-menu__button-open_is-closed');
  closeMobileMenu.classList.add('main-menu__button-close_is-opened');
  overlay.classList.add('overlay_is-opened');
});
closeMobileMenu.addEventListener('click', () => {
  mainMenu.classList.remove('main-menu_black');
  mainMenuList.classList.remove('main-menu__list_mobile');
  mainMenuList.classList.remove('main-menu__list_mobile-black');
  openMobileMenu.classList.remove('main-menu__button-open_is-closed');
  closeMobileMenu.classList.remove('main-menu__button-close_is-opened');
  overlay.classList.remove('overlay_is-opened');
});
