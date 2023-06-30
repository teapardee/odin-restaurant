import './style.css';
import renderHeader from './header';
import renderHome from './home';

init();

function init() {
  const content = document.getElementById('headerContainer');

  content.appendChild(renderHeader());
}
