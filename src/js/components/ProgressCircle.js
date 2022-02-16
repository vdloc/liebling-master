import { isMobile } from '../utils/helpers';
import { getParent, getWidth, select, setAttr } from '../utils/dom';

const CIRCLE_SELECTOR = '#progress-circle';

export default class ProgressCircle {
  constructor() {
    this.circle = select(CIRCLE_SELECTOR);
    this.svg = getParent(this.circle);
    this.lastScrollingY = window.scrollY;
    this.lastWindowHeight = 0;
    this.lastDocumentHeight = 0;
    this.circumference = 0;
    this.isTicking = false;
    this.onScrolling = this.onScrolling.bind(this);
    this.onResizing = this.onResizing.bind(this);
    this.updating = this.updating.bind(this);
    this.init();
  }

  init() {
    this.setHeights();
    this.setCircleStyles();
    this.updating();

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
      this.circle.style.strokeDashoffset = offset;
    }
  }

  setCircleStyles() {
    const svgWidth = getWidth(this.svg);
    const radiusCircle = svgWidth / 2;
    const borderWidth = isMobile() ? 2 : 3;

    setAttr(this.svg, 'viewBox', `0 0 ${svgWidth} ${svgWidth}`);
    setAttr(this.circle, 'stroke-width', borderWidth);
    setAttr(this.circle, 'r', radiusCircle - (borderWidth - 1));
    setAttr(this.circle, 'cx', radiusCircle);
    setAttr(this.circle, 'cy', radiusCircle);

    this.circumference = radiusCircle * 2 * Math.PI;
    this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.circle.style.strokeDashoffset = this.circumference;
  }
}
