import displayComment from './displayComment.js';
import addComment from './addComment.js';

const moviesURL = 'https://api.tvmaze.com/shows';
const body = document.querySelector('body');
const commentSection = document.createElement('section');
commentSection.classList.add('commentSection');

const commentPopup = async (id) => {
  const result = await fetch(`${moviesURL}/${id}`);
  const data = await result.json();
  const commentContent = `
    <div class="popupContainer">
      <div class="commentPopup">
        <div class="popupHeader">
          <p id="closeBtn">x</p>
        </div>
        <div class="popupBody">
          <img src=${data.image.original} alt="movie image" class="movieCover" />
          <h2 class="movieTitle">${data.name}</h2>
          <ul class="movieDetails">
            <li><span>Language:</span> ${data.language}</li>
            <li><span>Premiered:</span> ${data.premiered}</li>
            <li><span>Rating:</span> ${data.rating.average}</li>
            <li><span>Runtime:</span> ${data.averageRuntime}</li>
          </ul>
          <div class='commentContainer'>
            <h3 class='commentTitle'>Comments</h3>
            <div class='commentList'></div>
          </div>
          <div class="AddComment">
              <h4>Add a comment</h4>
              <form id="${id}" class="commentForm">
                  <input type="text" class="formControl" id="username" placeholder="Your name.." required>
                  <textarea name="comment" class="formControl" id="comment" rows="5" placeholder="Your insights.." required></textarea>
                  <button class="addComtBtn">Add Comment</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  `;
  commentSection.innerHTML = commentContent;
  body.appendChild(commentSection);
  displayComment(id);

  const commentForm = document.querySelector('.commentForm');
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(e.target.id);
  });

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    body.removeChild(commentSection);
  });
};

export default commentPopup;
