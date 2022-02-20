import { select, scrollTop } from '../utils/dom';

export default class ScrollTopButton {
  constructor(selector = '') {
    this.button = select(selector);
    this.button.addEventListener('click', scrollTop);
  }
}
