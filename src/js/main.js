import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
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
import FormValidator from './components/FormValidator';
import '../pages/main.css';

const config = {
  url: NODE_ENV === 'production' ? 'https://api.mymesto.ml' : 'http://localhost:3000',
  headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
  }
}

const api = new MainApi(config);

api.getUserData()
  .then(res => {
    // if (localStorage.getItem('name') === res.name) {
    //   new Error('Неавторизованная зона');
    // }
  })
  .catch((err) => {
    logout.classList.add('element_not-visible');
    linkPersonal.classList.add('element_not-visible');
    linkLogin.classList.remove('element_not-visible');
});

//header
const linkLogin = document.querySelector('.main-menu__button-login');
const linkPersonal = document.querySelector('.personal');
const logout = document.querySelector('.main-menu__logout');

//popups
const loginPopup = new Popup(popupLogin, popupLoginList.openedClassPopup);
const signUpPopup = new Popup(popupSignUp, popupSignupList.openedClassPopup);
const infoPopup = new Popup(popupInfo, popupInfoList.openedClassPopup);

//buttons
const loginButton = document.querySelector('.login__button');
const signUpButton = document.querySelector('.signUp__button');

//forms
const formLogin = document.querySelector('.popup-login__form');
const loginForm = new LoginForm(formLogin, loginPopup, api, linkLogin, linkPersonal, logout);

const formRegistration = document.querySelector('.popup-registration__form');
const registrationForm = new RegistrationForm(formRegistration, signUpPopup, api);

new FormValidator(formLogin);
new FormValidator(formRegistration);

function deleteErrors() {
  const errors = [...event.target.parentNode.querySelectorAll('.form__error')];
  errors.forEach(error => error.textContent = '');
}

logout.addEventListener('click', () => {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  logout.classList.add('element_not-visible');
  linkPersonal.classList.add('element_not-visible');
  linkLogin.classList.remove('element_not-visible');
});

openPopupLogin.addEventListener('click', () => {
  loginPopup.open.call(loginPopup);
  loginButton.setAttribute('disabled', true);
  loginButton.classList.add('button_is-disabled');
  loginButton.classList.add('form__button_disabled');
});

closeButtonLogin.addEventListener('click', () => {
  loginPopup.close.call(loginPopup);
  formLogin.reset();
  deleteErrors();
});

linkToRegistration.addEventListener('click', (event) => {
  loginPopup.close.call(loginPopup);
  event.preventDefault();
  signUpPopup.open.call(signUpPopup);
  signUpButton.setAttribute('disabled', true);
  signUpButton.classList.add('button_is-disabled');
  signUpButton.classList.add('form__button_disabled');
});

closeButtonSignUp.addEventListener('click', () => {
  signUpPopup.close.call(signUpPopup);
  formRegistration.reset();
  deleteErrors();
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
