import getDate from '../utils/get-date';
import { SEARCH_INPUT } from './search-elements'

const DAYS_AGO = 7;
const TODAY = 0;
const NUMBER_OF_PAGES = 100;

const NEWS_API_CONFIG = {
  baseUrl: 'https://nomoreparties.co/news/v2/everything',
  apiKey: '0f45b37c67a34232a80824e74e6d0211',
  userInput: SEARCH_INPUT,
  today: getDate(TODAY),
  oneWeekAgo: getDate(DAYS_AGO),
  pageSize: NUMBER_OF_PAGES,
};

const API_CONFIG = {
  url: 'https://api.mycoolnews.students.nomoreparties.space',
  headers: {
      'Content-Type': 'application/json',
  }
}

export {
  API_CONFIG,
  NEWS_API_CONFIG,
};