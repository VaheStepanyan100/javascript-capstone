import logo from '../assets/images/logo.svg';

const header = document.querySelector('header');
const headerFunc = () => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('headerContainer');
  header.appendChild(mainContainer);

  const logoImage = document.createElement('img');
  logoImage.src = logo;
  logoImage.width = 200;
  logoImage.height = 30;
  mainContainer.appendChild(logoImage);

  const navigationContainer = document.createElement('div');
  const navUl = document.createElement('ul');
  navUl.classList.add('nav');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  li1.classList.add('movieCounter');
  li2.textContent = 'Genre';
  li3.textContent = 'Rating';
  navUl.appendChild(li1);
  navUl.appendChild(li2);
  navUl.appendChild(li3);
  navigationContainer.appendChild(navUl);
  mainContainer.appendChild(navigationContainer);
};

export default headerFunc;
