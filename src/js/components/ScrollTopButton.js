import { select, scrollTop } from '../utils/dom';

export default class ScrollTopButton {
  constructor(selector = '.js-scrolltop') {
    this.button = select(selector);
    this.button.addEventListener('click', scrollTop);
  }
}
