import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import { onReady } from './utils/dom';
import AOS from 'aos';
import $ from 'jquery';

new PageHeader();
new PageFooter();
window.$ = $;
window.jQuery = $;

onReady(() => {
  AOS.init();
});
