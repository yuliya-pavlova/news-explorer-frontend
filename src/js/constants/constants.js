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