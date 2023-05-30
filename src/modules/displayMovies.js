import commentPopup from './commentPopup.js';

const moviesURL = 'https://api.tvmaze.com/shows';
const movieTemplate = document.getElementById('movie-template');
const movieSection = document.querySelector('.movieSection');

const getAllMovies = async () => {
  const result = await fetch(moviesURL);
  const data = await result.json();
  data.forEach((movie) => {
    const movieElement = document.importNode(movieTemplate.content, true);
    const movieImage = movieElement.querySelector('.movieCover');
    movieImage.src = movie.image.original;
    movieImage.width = 220;
    movieImage.height = 250;
    const movieTitle = movieElement.querySelector('.movieTitle');
    movieTitle.innerHTML = movie.name;
    const commentBtn = movieElement.querySelector('button');
    commentBtn.setAttribute('id', movie.id);
    movieSection.appendChild(movieElement);
  });
  const commentButtons = document.querySelectorAll('.commentBtn');
  commentButtons.forEach((btn) => btn.addEventListener('click', (e) => {
    commentPopup(e.target.id);
  }));
};

export default getAllMovies;
