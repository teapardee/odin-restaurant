function renderHome() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const homebody = document.createElement('div');
  homebody.classList.add('home-body');

  homebody.innerHTML =
    'COCKTAIL BAR & GRILL OPENING 7/4/2025! <br> Free COCKTAIL for first 100 customers that book through HotSeat. <br> Click below to book!';

  const button = document.createElement('button');
  button.classList.add('book-btn');
  button.innerHTML = 'RESERVE SEAT';

  homeContainer.appendChild(homebody);
  homeContainer.appendChild(button);

  return homeContainer;
}

export default renderHome;
