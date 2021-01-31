import toDate from '../utils/to-date';

export default class Card {
  constructor(urlToImage, publishedAt, title, description,  source,link, keyword, api, id) {
      this.urlToImage = urlToImage;
      this.publishedAt = publishedAt;
      this.title = title;
      this.description = description;
      this.source = source;
      this.link = link;
      this.keyword = keyword;
      this.api = api;
      this._id = id;
  }

  // _like = (event) => {
  //     event.target.classList.toggle('place-card__like-icon_liked');
  // }

  delete = (event) => {
      event.stopPropagation();
      this.api.deleteArticle(this._id)
      .then(res => {
        this._removeEventListenersPersonal();
        this._view.remove();
      })
      .catch((err) => console.log(err));
  }

  save = (event) => {
    event.stopPropagation();
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
        this._id = res.article._id;
      })
      .catch((err) => console.log(err));

}

  create() {
      const template = `
      <div class="cards__item">
        <p class="cards__message">Войдите, чтобы сохранять статьи</p>
        <div class="cards__save-button">
          <button class="cards__save-icon"></button>
      </div>
      <a href="" target="_blank">
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
      this.urlToImage ? this._view.querySelector('.cards__image').src = this.urlToImage : this._view.querySelector('.cards__image').src = 'https://zakaztxt.ru/wp-content/uploads/2017/01/news.jpg';

      this._view.querySelector('.cards__date').textContent = toDate(this.publishedAt);
      this._view.querySelector('.cards__title').textContent = this.title;
      this._view.querySelector('a').href = this.link;

      this._view.querySelector('.cards_description').textContent = this.description;
      this._view.querySelector('.cards__source').textContent = this.source;
      this._setEventListeners();
      return this._view;
  }

  createPersonalCard() {
    const template = `
    <div class="cards__item">
    <p class="cards__keywords"></p>
    <p class="cards__message element_not-visible">Убрать из сохраненных</p>
    <div class="cards__save-button">
      <button class="cards__delete-icon cards__delete-icon_selected"></button>
    </div>
    <a href="" target="_blank">
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

    this._view.querySelector('.cards__date').textContent = toDate(this.publishedAt);
    this._view.querySelector('.cards__title').textContent = this.title;
    this._view.querySelector('a').href = this.link;
    this.urlToImage ? this._view.querySelector('.cards__image').src = this.urlToImage : this._view.querySelector('.cards__image').src = 'https://zakaztxt.ru/wp-content/uploads/2017/01/news.jpg';

    this._view.querySelector('.cards_description').textContent = this.description;
    this._view.querySelector('.cards__source').textContent = this.source;

    this._view.querySelector('.cards__keywords').textContent = this.keyword;
    this._setEventListenersPersonal();
    return this._view;
}

  _setEventListenersPersonal = () => {
    this._view.querySelector('.cards__save-button').addEventListener('click', this.delete);
  }

  _removeEventListenersPersonal = () => {
    this._view.querySelector('.cards__save-button').removeEventListener('click', this.delete);
  }

  _setEventListeners = () => {
    this._view.querySelector('.cards__save-icon').addEventListener('click', this.save);
  }

  _removeEventListeners = () => {
    this._view.querySelector('.cards__save-icon').removeEventListener('click', this.save);
  }
}