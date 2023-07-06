import switchPage from './index.js';

function renderHeader() {
  const header = document.createElement('header');

  console.log('test');

  //logo

  const logo = document.createElement('div');
  logo.classList.add('logo');

  const logoImage = document.createElement('img');
  logoImage.setAttribute('src', './logo.svg');
  logoImage.setAttribute('alt', 'logo image');

  header.appendChild(logo);
  logo.appendChild(logoImage);

  //nav

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const home = document.createElement('li');
  home.innerHTML = 'HOME';
  home.id = 'HOME';
  home.addEventListener('click', (e) => {
    switchPage(e);
  });

  const menu = document.createElement('li');
  menu.innerHTML = 'MENU';
  menu.id = 'MENU';
  menu.addEventListener('click', (e) => {
    switchPage(e);
  });

  const contact = document.createElement('li');
  contact.innerHTML = 'CONTACT';
  contact.id = 'CONTACT';
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
