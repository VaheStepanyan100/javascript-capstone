import logo from "../assets/images/Movies-logo.svg";

const header = document.querySelector('header');
export const headerFunc = () => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('headerContainer');
  header.appendChild(mainContainer);

  const logoImage = document.createElement('img');
  logoImage.src = logo;
  logoImage.width = 200;
  mainContainer.appendChild(logoImage);

  const navigationContainer = document.createElement('div');
  const navUl = document.createElement('ul');
  navUl.classList.add('nav');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  li1.innerHTML = 'Total Movies';
  li2.innerHTML = 'Genre';
  li3.innerHTML = 'Rating';
  navUl.appendChild(li1);
  navUl.appendChild(li2);
  navUl.appendChild(li3);
  navigationContainer.appendChild(navUl);
  mainContainer.appendChild(navigationContainer);
}


