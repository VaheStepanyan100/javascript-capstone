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
    movieSection.appendChild(movieElement);
  });
};

export default getAllMovies;
