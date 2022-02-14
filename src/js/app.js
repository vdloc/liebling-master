import PageFooter from './components/PageFooter';
import PageHeader from './components/PageHeader';
import { onFullLoad } from './utils/dom';

onFullLoad(() => {
  new PageHeader();
  new PageFooter();
});
