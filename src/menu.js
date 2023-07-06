function renderMenu() {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const menuTitle = document.createElement('h1');
  menuTitle.innerHTML = 'COCKTAIL MENU';
  menuTitle.classList.add('menu-title');

  menuContainer.appendChild(menuTitle);

  menuContainer.appendChild(
    createItem(
      'CLASSIC MOJITO',
      'Rum infused with fresh lime, mint and sugar',
      '$5.00'
    )
  );

  menuContainer.appendChild(
    createItem(
      'ROYAL MARTINI',
      'Freshly brewed espresso mixed with run and lime',
      '$5.00'
    )
  );

  menuContainer.appendChild(
    createItem(
      'RASPBERRY MOJITO',
      'Rum stirred with raspberry, fresh mint, lime and sugar',
      '$5.00'
    )
  );

  menuContainer.appendChild(
    createItem(
      'RETRO MARGARITA',
      'Tequila, lime juice, rum with pinch of salt',
      '$5.00'
    )
  );

  return menuContainer;
}

function createItem(name, description, price) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h1');
  foodName.innerHTML = name;
  foodName.classList.add('food-name');

  const foodPrice = document.createElement('h1');
  foodPrice.innerHTML = price;
  foodPrice.classList.add('food-price');

  const foodDesc = document.createElement('p');
  foodDesc.innerHTML = description;
  foodDesc.classList.add('food-desc');

  menuItem.appendChild(foodName);
  menuItem.appendChild(foodPrice);
  menuItem.appendChild(foodDesc);

  return menuItem;
}

export default renderMenu;
