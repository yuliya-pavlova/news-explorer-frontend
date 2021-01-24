export default class Popup {
  constructor(popup, openingClass) {
      this.popup = popup;
      console.log(this.popup);
      this.openingClass = openingClass;
  }

  open() {
      this.popup.classList.add(this.openingClass);
  }

  close = () => {
      this.popup.classList.remove(this.openingClass);
  }
}
