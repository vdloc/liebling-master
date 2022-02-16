import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import { onFullLoad, onReady } from './utils/dom';
import AOS from 'aos';
import $ from 'jquery';

new PageHeader();
new PageFooter();



$(() => {
  AOS.init();
  document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  console.log('file: app.js ~ line 19 ~ AOS', AOS);
});

window.aos = AOS;
