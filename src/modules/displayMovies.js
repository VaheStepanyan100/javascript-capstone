import commentPopup from './commentPopup.js';
import { getLikesCount, postLikes } from './likesCount.js';
import movieCounter from './movieCounter.js';

const moviesURL = 'https://api.tvmaze.com/shows';
const movieTemplate = document.getElementById('movie-template');
const movieSection = document.querySelector('.movieSection');

const getAllMovies = async () => {
  const result = await fetch(moviesURL);
  const data = await result.json();
  const totalMovies = movieCounter(data);
  data.forEach((movie) => {
    const movieElement = document.importNode(movieTemplate.content, true);
    const movieImage = movieElement.querySelector('.movieCover');
    movieImage.src = movie.image.original;
    movieImage.width = 220;
    movieImage.height = 250;
    const movieTitle = movieElement.querySelector('.movieTitle');
    movieTitle.textContent = movie.name;
    const commentBtn = movieElement.querySelector('button');
    commentBtn.setAttribute('id', movie.id);
    const movieLikes = movieElement.querySelector('.likeNo');
    movieLikes.setAttribute('id', `${movie.id}`);
    const likeBtn = movieElement.querySelector('.fa-regular');
    likeBtn.setAttribute('id', `${movie.id}`);
    const counter = document.querySelector('.movieCounter');
    counter.textContent = `Total Movies (${totalMovies})`;
    movieSection.appendChild(movieElement);
  });
  const commentButtons = document.querySelectorAll('.commentBtn');
  commentButtons.forEach((btn) =>
    btn.addEventListener('click', (e) => {
      commentPopup(e.target.id);
    })
  );

  const updateLikesCount = async () => {
    const likesData = await getLikesCount();
    likesData.forEach((item) => {
      const likesCount = item.likes;
      const likesCountElement = document.getElementById(`${item.item_id}`);
      likesCountElement.textContent = ` ${likesCount}`;
    });
  };
  updateLikesCount();

  const likeBtn = document.querySelectorAll('.likeButton');
  likeBtn.forEach((button) => {
    button.addEventListener('click', async (item) => {
      if (item.target.classList.contains('likeButton')) {
        const { id } = item.target;
        await postLikes(id);
        updateLikesCount();
      }
    });
  });
};

export default getAllMovies;
