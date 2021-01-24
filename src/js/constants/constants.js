const server = NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.my-news-explorer.ml';
const serverNews = NODE_ENV === 'development' ? 'https://newsapi.org/v2/' : 'https://nomoreparties.co/news/v2/';

//const server = 'https://api.my-news-explorer.ml';

const optionsForApi = {
  headers: {
    'Content-Type': 'application/json',
  },
  url: server,
};

const optionsForNewsApi = {
  server: serverNews,
};

const popupLoginList = {
  openedClassPopup: 'popup-login_is-opened',
};

const popupSignupList = {
  openedClassPopup: 'popup-registration_is-opened',
};

const popupInfoList = {
  openedClassPopup: 'popup-info_is-opened',
};

const errorMessages = {
  passwordError: 'Введите не менее 8 символов (без пробелов)',
  textLengthError: 'Введите не менее 2 символов',
  empty: 'Это обязательное поле',
  emailError: 'Неправильный формат email',
};

export {
  errorMessages,
  optionsForApi,
  optionsForNewsApi,
  popupLoginList,
  popupSignupList,
  popupInfoList,
};