import PageHeader from './components/PageHeader';
import { selectAll, onFullLoad } from './utils/dom';

onFullLoad(() => {
  new PageHeader();
});
