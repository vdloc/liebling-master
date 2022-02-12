import Slider from './components/Slider';
import { selectAll, onFullLoad } from './utils/dom';

onFullLoad(() => {
  const featuredSliders = selectAll('.js-featured-slider');

  featuredSliders.forEach(slider => {
    new Slider(slider);
  });
});
