import tippy from 'tippy.js';
import ClipboardJS from 'clipboard';
import { bindEvent, getAttr, select, selectAll } from '../utils/dom';
import { debounce } from '../utils/helpers';

export default class SocialButtons {
  constructor() {
    this.buttons = selectAll('.js-social-button');
    this.getLinkButton = select('#social-link-button');
    this.commentButton = select('#social-comment-button');
    this.commentSection = select('#comment-section');
    this.init();
  }

  init() {
    this.buttons.forEach((button) => {
      const label = getAttr(button, 'data-label');

      tippy(button, {
        content: label,
      });
    });
    this.setupGetLinkButton();
    this.setupCommentButton();
  }

  setupGetLinkButton() {
    const clipboard = new ClipboardJS(this.getLinkButton);
    const buttonLabel = getAttr(this.getLinkButton, 'data-label');

    tippy(this.getLinkButton, {
      content: buttonLabel,
      trigger: 'mouseenter focus click',
    });

    clipboard.on('success', () => {
      this.getLinkButton._tippy.setContent('Đã sao chép liên kết');

      const restoreLabel = debounce(() => {
        this.getLinkButton._tippy.setContent(buttonLabel);
      }, 1000);

      restoreLabel();
    });
  }

  setupCommentButton() {
    bindEvent(this.commentButton, 'click', () => {
      this.commentSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
