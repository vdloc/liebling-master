import { bindEvent, scrollTop, select, selectAll } from '../utils/dom';

export default class PageFooter {
  constructor() {
    this.primaryNavigation = select('#footer-primary-navigation');
    this.secondaryNavigation = select('#footer-secondary-navigation');
    this.secondaryNavigationTemplates = selectAll(
      '.js-footer-secondary-navigation-template'
    );
    this.primaryNavigationTemplates = selectAll(
      '.js-footer-primary-navigation-template'
    );
    this.scrollTopButton = select('#footer-scroll-top');

    this.init();
  }

  init() {
    this.setupPrimaryNavigation();
    this.setupSecondaryNavigation();
    bindEvent(this.scrollTopButton, 'click', scrollTop);
  }

  setupPrimaryNavigation() {
    const navigationHTML = this.primaryNavigationTemplates.reduce(
      (html, templateHolder) => {
        return html.concat(templateHolder.innerHTML);
      },
      ''
    );
    this.primaryNavigation.innerHTML = navigationHTML;
  }

  setupSecondaryNavigation() {
    const navigationHTML = this.secondaryNavigationTemplates.reduce(
      (html, templateHolder) => {
        return html.concat(templateHolder.innerHTML);
      },
      ''
    );
    this.secondaryNavigation.innerHTML = navigationHTML;
  }
}
