import ClipboardJS from 'clipboard';
import { select, setAttr, setText } from '../utils/dom';

export default class PasswordButton {
  constructor() {
    this.selector = '.m-clipboard-button';
    this.holderSelector = '#rar-pass';
    this.password = window.RAR_PASS;
    this.beforeCopyLabel = 'Copy';
    this.afterCopyLabel = 'Đã copy';
    this.btn = select(this.selector);
    this.holder = select(this.holderSelector);
    this.clipboard = null;
    this.handleSuccess = this.handleSuccess.bind(this);
    this.init();
  }

  init() {
    setAttr(this.btn, 'data-clipboard-text', this.password);
    setText(this.holder, this.password);

    this.clipboard = new ClipboardJS(this.selector);
    this.clipboard.on('success', this.handleSuccess);
  }

  handleSuccess(event) {
    const trigger = event.trigger;

    setText(trigger, this.afterCopyLabel);
    setTimeout(() => {
      setText(trigger, this.beforeCopyLabel);
    }, 3000);
  }
}
