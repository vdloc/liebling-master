import { isMobile } from '../helpers';

const CIRCLE_SELECTOR = '.js-progress';

export default class ProgressCircle {
  constructor() {
    this.circle = $(CIRCLE_SELECTOR);
    this.lastScrollingY = window.scrollY;
    this.lastWindowHeight = 0;
    this.lastDocumentHeight = 0;
    this.circumference = 0;
    this.isTicking = false;
    this.onScrolling = this.onScrolling.bind(this);
    this.onResizing = this.onResizing.bind(this);
    this.updating = this.updating.bind(this);
  }

  init() {
    this.setHeights();
    this.setCircleStyles();
    this.updating();

    setTimeout(() => {
      this.circle.parent().css('opacity', 1);
    }, 300);

    window.addEventListener('scroll', this.onScrolling, { passive: true });
    window.addEventListener('resize', this.onResizing, { passive: true });
  }

  onScrolling() {
    this.lastScrollingY = window.scrollY;
    this.requestTicking();
  }

  onResizing() {
    this.setHeights();

    setTimeout(() => {
      this.setCircleStyles();
      this.requestTicking();
    }, 200);
  }

  requestTicking() {
    if (!this.isTicking) {
      requestAnimationFrame(this.updating);
    }

    this.isTicking = true;
  }

  updating() {
    const progressMax = this.lastDocumentHeight - this.lastWindowHeight;
    const percent = Math.ceil((this.lastScrollingY / progressMax) * 100);

    if (percent <= 100) {
      this.setProgress(percent);
    }

    this.isTicking = false;
  }

  setHeights() {
    this.lastWindowHeight = window.innerHeight;
    this.lastDocumentHeight = parseFloat(
      getComputedStyle(document.documentElement, null).height.replace('px', '')
    );
  }

  setProgress(percent) {
    if (percent <= 100) {
      const offset = this.circumference - (percent / 100) * this.circumference;
      this.circle[0].style.strokeDashoffset = offset;
    }
  }

  setCircleStyles() {
    const svgWidth = this.circle.parent().width();
    const radiusCircle = svgWidth / 2;
    const borderWidth = isMobile() ? 2 : 3;

    this.circle.parent().attr('viewBox', `0 0 ${svgWidth} ${svgWidth}`);
    this.circle.attr('stroke-width', borderWidth);
    this.circle.attr('r', radiusCircle - (borderWidth - 1));
    this.circle.attr('cx', radiusCircle);
    this.circle.attr('cy', radiusCircle);

    this.circumference = radiusCircle * 2 * Math.PI;

    this.circle[0].style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle[0].style.strokeDashoffset = this.circumference;
  }
}
