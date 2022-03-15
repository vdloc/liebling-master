import $ from 'jquery';
import { onReady, onFullLoad } from './utils/dom';
import ProgressCircle from './components/ProgressCircle';
import PasswordButton from './components/PasswordButton';
import ScrollTopButton from './components/ScrollTopButton';
import SocialButtons from './components/SocialButtons';
import RelatedPosts from './components/RelatedPosts';
import 'applause-button';
import Comment from './components/Comment';
import fitvids from 'fitvids';
import Gallery from './components/Gallery';

window.$ = $;
window.jQuery = $;

onReady(() => {
  fitvids('#post-content');
  new PasswordButton();
  new SocialButtons();
  new ProgressCircle();
  new ScrollTopButton('#progress-button');
  new RelatedPosts();
  new Comment();
});

onFullLoad(() => {
  new Gallery();
});
