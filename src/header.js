import switchPage from './index.js';

function renderHeader() {
  const header = document.createElement('header');

  //logo

  const logo = document.createElement('div');
  logo.classList.add('logo');

  const logoImage = document.createElement('img');
  logoImage.setAttribute('src', './logo.svg');
  logoImage.setAttribute('alt', 'logo image');

  logo.addEventListener('click', function () {
    const content = document.getElementById('content');
    content.innerHTML = '';
    console.log('test');
  });

  header.appendChild(logo);
  logo.appendChild(logoImage);

  //nav

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  const home = document.createElement('li');
  home.innerHTML = home.id = 'HOME';
  home.addEventListener('click', (e) => {
    switchPage(e);
  });

  const menu = document.createElement('li');
  menu.innerHTML = menu.id = 'MENU';
  menu.addEventListener('click', (e) => {
    switchPage(e);
  });

  const contact = document.createElement('li');
  contact.innerHTML = contact.id = 'CONTACT';
  contact.addEventListener('click', (e) => {
    switchPage(e);
  });

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);

  return header;
}

export default renderHeader;
