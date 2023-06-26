function createHeader() {
  const header = document.createElement('header');

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
  const menu = document.createElement('li');
  menu.innerHTML = 'MENU';
  const contact = document.createElement('li');
  contact.innerHTML = 'CONTACT';

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);

  return header;
}

function initializeWebsite() {
  const content = document.getElementById('content');

  content.appendChild(createHeader());
}

export default initializeWebsite;
