const moviesURL = 'https://api.tvmaze.com/shows';
// const commentPopupTemplate = document.getElementById('commentPopup-template');
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
        </div>
      </div>
    </div>
  `;
  commentSection.innerHTML = commentContent;
  body.appendChild(commentSection);

  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    body.removeChild(commentSection);
  });
};

export default commentPopup;
