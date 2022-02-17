import fitvids from 'fitvids';
import { onReady } from './utils/dom';
import ProgressCircle from './components/ProgressCircle';
import PasswordButton from './components/PasswordButton';
import Gallery from './components/Gallery';
import ScrollTopButton from './components/ScrollTopButton';
import SocialButtons from './components/SocialButtons';
import RelatedPosts from './components/RelatedPosts';

onReady(() => {
  fitvids('#post-content');
  new PasswordButton();
  new SocialButtons();
  new Gallery();
  new ProgressCircle();
  new ScrollTopButton('#progress-button');
  new RelatedPosts();
});
