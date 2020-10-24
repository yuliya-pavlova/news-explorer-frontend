(function() {
  window.onload = function() {
    const mainMenu = document.querySelector('.main-menu');
    const mainMenuList = document.querySelector('.main-menu__list');
    const openMobileMenu = document.querySelector('.main-menu__button-open-black');
    const closeMobileMenu = document.querySelector('.main-menu__button-close-black');
    const overlay = document.querySelector('.overlay');

    openMobileMenu.addEventListener('click', () => {
      mainMenu.classList.add('main-menu_white');
      mainMenuList.classList.add('main-menu__list_mobile');
      mainMenuList.classList.add('main-menu__list_mobile-white');
      openMobileMenu.classList.add('main-menu__button-open_is-closed');
      closeMobileMenu.classList.add('main-menu__button-close_is-opened');
      overlay.classList.add('overlay_is-opened');
    });
    closeMobileMenu.addEventListener('click', () => {
      mainMenu.classList.remove('main-menu_white');
      mainMenuList.classList.remove('main-menu__list_mobile');
      mainMenuList.classList.remove('main-menu__list_mobile-white');
      openMobileMenu.classList.remove('main-menu__button-open_is-closed');
      closeMobileMenu.classList.remove('main-menu__button-close_is-opened');
      overlay.classList.remove('overlay_is-opened');
    });
  };
})();