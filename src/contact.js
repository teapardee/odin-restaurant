function renderContact() {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  const contactbody = document.createElement('div');
  contactbody.classList.add('contact-body');

  contactbody.innerHTML = 'Phone: (123) 457-3939 <br> Email: info@cocktail.com';

  contactContainer.appendChild(contactbody);

  return contactContainer;
}

export default renderContact;
