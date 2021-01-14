import '../pages/main.css';
import LoginForm from './LoginForm';
import Popup from './Popup';
import Api from './Api';

const isDev = process.env.NODE_ENV === 'development';
// const baseUrl = isDev ? 'http://localhost:3000' : 'https://api.news-explorer.space';
// const newsUrl = isDev
//   ? 'https://newsapi.org/v2/everything'
//   : `https://nomoreparties.co/news/v2/top-headlines`;

// const newsApi = new NewsApi({
//   baseUrl: newsUrl,
//   apiKey: '0f45b37c67a34232a80824e74e6d0211',
// });

const popupLogin = document.querySelector('.popup-login');
const openPopupLogin = document.querySelector('.main-menu__button-login');
console.log("test");

(function() {
  window.onload = function() {
    const config = {
      url: NODE_ENV === 'production' ? 'https://api.mymesto.ml' : 'http://localhost:3000/',
      headers: {
          'Content-Type': 'application/json',
          credentials: 'include',
      }
    }
    const api = new Api(config);


    const popupLogin = document.querySelector('.popup-login');
    const openPopupLogin = document.querySelector('.main-menu__button-login');
    const closeButtonLogin = document.querySelector('.popup-login__close');
    const openingClassPopup = 'popup-login_is-opened';

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

    const overlay = document.querySelector('.overlay');

    // const signInPopup = new Popup(popupLogin, openingClassPopup);
    // const loginForm = new LoginForm(popupLogin, signInPopup, api);


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
  };
})();

openPopupLogin.addEventListener('click', () => {
  console.log("test");
  popupLogin.classList.add('popup-login_is-opened');
});