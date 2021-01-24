import LoginForm from './components/LoginForm';
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
import { MainApi } from './api/MainApi';
import '../pages/main.css';

console.log('Hi!');

const config = {
  url: NODE_ENV === 'production' ? 'https://api.mymesto.ml' : 'http://localhost:3000/',
  headers: {
      'Content-Type': 'application/json',
  }
}

const api = new MainApi(config);
console.log(api);

//popups
const loginPopup = new Popup(popupLogin, popupLoginList.openedClassPopup);
const signUpPopup = new Popup(popupSignUp, popupSignupList.openedClassPopup);
const infoPopup = new Popup(popupInfo, popupInfoList.openedClassPopup);

//forms
const formLogin = document.querySelector('.popup-login__form');
const loginForm = new LoginForm(formLogin, loginPopup, api);
console.log('Форма',loginForm);

openPopupLogin.addEventListener('click', () => {
  loginPopup.open.call(loginPopup);
});

closeButtonLogin.addEventListener('click', () => {
  loginPopup.close.call(loginPopup);
});

linkToRegistration.addEventListener('click', (event) => {
  loginPopup.close.call(loginPopup);
  event.preventDefault();
  signUpPopup.open.call(signUpPopup);
});

closeButtonSignUp.addEventListener('click', () => {
  signUpPopup.close.call(signUpPopup);
});

linkToLogin.addEventListener('click', (event) => {
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

// function login() {
//   const data = {
//     email: loginForm.elements.email.value,
//     password: loginForm.elements.password.value,
//   };
//   api.signin(data.email, data.password)
//   .then(() => {
//     loginPopup.close();
//   })
//   .catch(err => {
//     console.log(err.message);
//   });
// }

// loginForm.addEventListener('submit', (event) => {
//   console.log(loginForm);
//   event.preventDefault();
//   login();
// });
