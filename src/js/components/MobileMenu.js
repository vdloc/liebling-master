import {
  addClass,
  bindEvent,
  getAttr,
  removeClass,
  select,
  selectAll,
} from '../utils/dom';
import Slider from './Slider';

const mobileMenuClass = {
  visible: 'z-modal opacity-100 visible'.split(' '),
  invisible: '-z-10 opacity-0 invisible'.split(' '),
};

const categoryMenuClass = {
  visible: 'opacity-100 visible'.split(' '),
  invisible: 'opacity-0 invisible'.split(' '),
};

export default class MobileMenu {
  constructor(subMenuSliderOptions) {
    this.subMenuSliderOptions = subMenuSliderOptions;
    this.openMobileMenuButton = select('#hamburger-button', this.header);
    this.mobileMenu = select('#mobile-menu');
    this.closeMobileMenuButton = select(
      '#close-mobile-menu-button',
      this.mobileMenu
    );
    this.navigationTemplateHolder = selectAll('.js-mobile-navigation-template');
    this.mobileNavigation = select('#mobile-navigation', this.mobileMenu);
    this.mobileCategoryMenu = select('#mobile-category-menu', this.mobileMenu);
    this.categoryMenuBackButton = select(
      '#mobile-category-menu-back-button',
      this.mobileCategoryMenu
    );
    this.categoryMenuHeader = select(
      '#mobile-category-menu-header',
      this.mobileCategoryMenu
    );
    this.categoryMenuHeaderTemplate = select(
      '#mobile-category-menu-header-template'
    ).innerHTML;
    this.categorySubmenu = select(
      '#mobile-category-submenu',
      this.mobileCategoryMenu
    );
    this.categorySubmenuTemplates = selectAll('.js-submenu-template');
    // Bind Events
    this.openMobileMenu = this.openMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.openCategoryMenu = this.openCategoryMenu.bind(this);
    this.closeCategoryMenu = this.closeCategoryMenu.bind(this);
    this.init();
  }

  init() {
    bindEvent(this.openMobileMenuButton, 'click', this.openMobileMenu);
    bindEvent(this.closeMobileMenuButton, 'click', this.closeMobileMenu);
    bindEvent(this.categoryMenuBackButton, 'click', this.closeCategoryMenu);

    this.showNavigation();
    this.setupPrimaryNavigation();
  }

  openMobileMenu() {
    addClass(this.mobileMenu, ...mobileMenuClass.visible);
    removeClass(this.mobileMenu, ...mobileMenuClass.invisible);
  }

  closeMobileMenu() {
    removeClass(this.mobileMenu, ...mobileMenuClass.visible);
    addClass(this.mobileMenu, ...mobileMenuClass.invisible);
    this.closeCategoryMenu();
  }

  showNavigation() {
    const navigationHTML = this.navigationTemplateHolder.reduce(
      (html, templateHolder) => {
        const template = templateHolder.innerHTML;
        return html.concat(template);
      },
      ''
    );
    this.mobileNavigation.insertAdjacentHTML('beforeend', navigationHTML);
  }

  openCategoryMenu() {
    addClass(this.mobileCategoryMenu, ...categoryMenuClass.visible);
    removeClass(this.mobileCategoryMenu, ...categoryMenuClass.invisible);
  }

  closeCategoryMenu() {
    removeClass(this.mobileCategoryMenu, ...categoryMenuClass.visible);
    addClass(this.mobileCategoryMenu, ...categoryMenuClass.invisible);
  }

  setupPrimaryNavigation() {
    const primaryNavigation = selectAll(
      '.js-mobile-primary-navigation',
      this.mobileNavigation
    );

    primaryNavigation.forEach((navigation) => {
      const slug = getAttr(navigation, 'data-slug');
      const label = getAttr(navigation, 'data-label');
      const url = getAttr(navigation, 'data-url');

      const clickListener = () => {
        this.setupCategoryMenu(label, slug, url);
        this.openCategoryMenu();
      };

      bindEvent(navigation, 'click', clickListener);
    });
  }

  setupCategoryMenu(label, slug, url) {
    const headerHTML = this.categoryMenuHeaderTemplate
      .replaceAll('@label', label)
      .replaceAll('@url', url);
    const subMenuTemplate = this.categorySubmenuTemplates.find(
      (templateHolder) => {
        const templateSlug = getAttr(templateHolder, 'data-slug');
        return templateSlug === slug;
      }
    );

    this.categoryMenuHeader.innerHTML = headerHTML;
    this.categorySubmenu.innerHTML = subMenuTemplate.innerHTML;

    new Slider({
      container: select('.swiper', this.categorySubmenu),
      prevEl: select('.js-submenu-swiper-prev', this.categorySubmenu),
      nextEl: select('.js-submenu-swiper-next', this.categorySubmenu),
      options: this.subMenuSliderOptions,
    });
  }
}
