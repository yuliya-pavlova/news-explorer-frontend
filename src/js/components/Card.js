import toDate from '../utils/to-date';

export default class Card {
  constructor(urlToImage, publishedAt, title, description,  source,link, keyword, api) {
      this.urlToImage = urlToImage;
      this.publishedAt = publishedAt;
      this.title = title;
      this.description = description;
      this.source = source;
      this.link = link;
      this.keyword = keyword;
      this.api = api;
  }

  // _like = (event) => {
  //     event.target.classList.toggle('place-card__like-icon_liked');
  // }

  // delete = (event) => {
  //     event.stopPropagation();
  //     this._removeEventListeners();
  //     this._view.remove();
  // }

  save = (event) => {
    event.stopPropagation();
    console.log('Хочу сохранить статью', this._view);
    const obj = {
      keyword: this.keyword,
      title: this.title,
      text: this.description,
      date: toDate(this.publishedAt),
      source: this.source,
      link: this.link,
      image: this.urlToImage,
    };
    console.log(obj);
    this.api.addArticle(obj)
      .then((res) => {
        // button.classList.remove('results__grid-card-mark_unselected');
        // button.classList.add('results__grid-card-mark_selected');
        this._id = res._id;
        console.log('Добавлена статья с id = ', res._id)
      })
      .catch((err) => console.log(err));

}

  // _showPicture = () => {
  //     this.openImagePopup(this.link);
  // }

  create() {
      const template = `
      <div class="cards__item">
        <p class="cards__message">Войдите, чтобы сохранять статьи</p>
        <div class="cards__save-button">
          <button class="cards__save-icon"></button>
      </div>
      <a href="./index.html">
        <img class="cards__image" src="" alt="">
      </a>
      <span class="cards__date"></span>
      <div class="cards__text-container">
        <h3 class="cards__title"></h3>
        <p class="cards_description"></p>
      </div>
      <p class="cards__source"></p>
    </div>
      `;
      const element = document.createElement('div');
      element.insertAdjacentHTML('afterbegin', template);

      this._view = element.firstElementChild;
      this._view.querySelector('.cards__image').src = this.urlToImage;
      this._view.querySelector('.cards__date').textContent = toDate(this.publishedAt);
      this._view.querySelector('.cards__title').textContent = this.title;

      this._view.querySelector('.cards_description').textContent = this.description;
      this._view.querySelector('.cards__source').textContent = this.source;
      this._setEventListeners();
      return this._view;
  }

  _setEventListeners = () => {
    this._view.querySelector('.cards__save-icon').addEventListener('click', this.save);

      // this._view.querySelector('.place-card__delete-icon').addEventListener('click', this._delete);
      // this._view.querySelector('.place-card__like-icon').addEventListener('click', this._like);
      // this._view.querySelector('.place-card__image').addEventListener('click', this._showPicture);
  }

  _removeEventListeners = () => {
      // this._view.querySelector('.place-card__delete-icon').removeEventListener('click', this._delete);
      // this._view.querySelector('.place-card__like-icon').removeEventListener('click', this._like);
      // this._view.querySelector('.place-card__image').removeEventListener('click', this._showPicture);
  }
}