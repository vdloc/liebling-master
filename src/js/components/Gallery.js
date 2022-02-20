import { getAttr, selectAll, select, setAttr } from '../utils/dom';

export default class Gallery {
  constructor(selector = '.kg-image-card, .kg-gallery-image') {
    this.selector = selector;
    this.containers = selectAll(this.selector);
    this.init();
  }

  init() {
    this.containers.forEach((imageContainer) => {
      const image = select('img', imageContainer);

      if (image) {
        const dataSrc = getAttr(image, 'src');

        setAttr(imageContainer, 'data-src', dataSrc);
        setAttr(image, 'data-src', dataSrc);
      }
    });

    $('#post-content').lightGallery({
      selector: this.selector,
      thumbnail: true,
      fullScreen: true,
      share: true,
    });
  }
}
