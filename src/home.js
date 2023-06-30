function renderHome() {
  const content = document.getElementById('content');

  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  content.appendChild(homeContainer);
}

export default renderHome;
