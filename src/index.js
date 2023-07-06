import './style.css';
import renderHeader from './header';
import renderMenu from './menu';
import renderHome from './home';
import renderContact from './contact';

init();

function init() {
  const header = document.getElementById('headerContainer');
  header.appendChild(renderHeader());
  const content = document.getElementById('content');
  content.appendChild(renderHome());
}

function switchPage(e) {
  let page = e.currentTarget.getAttribute('id');
  const content = document.getElementById('content');
  content.innerHTML = '';

  switch (page) {
    case 'HOME':
      content.appendChild(renderHome());
      break;
    case 'MENU':
      content.appendChild(renderMenu());
      break;
    case 'CONTACT':
      content.appendChild(renderContact());
      break;
    default:
  }
}

export default switchPage;
