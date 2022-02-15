import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import { onFullLoad } from './utils/dom';
import AOS from 'aos';

AOS.init();

onFullLoad(() => {
  new PageHeader();
  new PageFooter();
});
