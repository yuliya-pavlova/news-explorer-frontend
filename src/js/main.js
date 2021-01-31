import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Popup from './components/Popup';
import Card from './components/Card';
import CardList from './components/CardList';
import { popupInfoList, popupLoginList, popupSignupList } from './constants/constants';
import USER_NAME from './constants/user';
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
import NewsApi from './api/NewsApi';
import FormValidator from './components/FormValidator';
import {
  API_CONFIG,
  NEWS_API_CONFIG,
} from '../js/constants/api-config';
import '../pages/main.css';

const api = new MainApi(API_CONFIG);
const newsApi = new NewsApi(NEWS_API_CONFIG);

const cardsConteiner = document.querySelector('.cards');
const cardList = new CardList(cardsConteiner);

function newCardFactory(urlToImage, publishedAt, title, description,  source, link, keyword) {
  return new Card(urlToImage, publishedAt, title, description,  source, link, keyword, api);
}

//loading
const loading = document.querySelector('.search-results__preloader');

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
const registrationForm = new RegistrationForm(formRegistration, signUpPopup, api, infoPopup);

// search
const results = document.querySelector('.search-results__container');
const noResults = document.querySelector('.search-results__not-found');
const searchInput = document.querySelector('.search-form__input');
const searchButton = document.querySelector('.search-form__button');
const formSearch = document.querySelector('.search-form');


new FormValidator(formLogin);
new FormValidator(formRegistration);

function deleteErrors() {
  const errors = [...event.target.parentNode.querySelectorAll('.form__error')];
  errors.forEach(error => error.textContent = '');
};

function not_auth() {
  logout.classList.add('element_not-visible');
  linkPersonal.classList.add('element_not-visible');
  linkLogin.classList.remove('element_not-visible');
};

function auth() {
  api.getUserData()
  .then(res => {
    logout.querySelector('.username').textContent = res.name;
    linkLogin.classList.add('element_not-visible');
  })
  .catch((err) => {
    not_auth();
  })
};

function loadResult(show) {
  if (show) {
    loading.classList.remove('element_not-visible')
  } else {
    loading.classList.add('element_not-visible')
  }
};

function showResult(show) {
  if (show) {
    results.classList.remove('element_not-visible')
  } else {
    results.classList.add('element_not-visible')
  }
};

function notFoundResult(show) {
  show ? noResults.classList.remove('element_not-visible') : noResults.classList.add('element_not-visible')
};

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  const keyword = searchInput.value;
  console.log('keyword', keyword);
  notFoundResult(false);
  showResult(false);
  loadResult(true);
  if (keyword.trim().length === 0) {
    console.log('Введите ключевое слово')
  }
  else {
    newsApi.getNews()
    .then(res => {
      cardList.clear();
      const cards = res.articles.map(card => newCardFactory(card.urlToImage, card.publishedAt, card.title, card.description,  card.source.name, card.url, keyword).create());
      cardList.render(cards);
      loadResult(false);
      cards.length === 0 ? notFoundResult(true) : showResult(true);
      if (!USER_NAME) {
        const saveButtons = document.querySelectorAll('.cards__save-icon');
        saveButtons.forEach(button => button.setAttribute('disabled', true));
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
});

logout.addEventListener('click', () => {
  localStorage.removeItem('username');
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

if (USER_NAME) {
  console.log('Пользователь авторизован');
  auth();
} else {
  console.log('Пользователь не авторизован');
  not_auth();
}