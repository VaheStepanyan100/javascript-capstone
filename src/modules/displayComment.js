const getComment = async (id) => {
  const commentApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments?item_id=item${id}`;
  const response = await fetch(commentApi);
  const data = await response.json();
  return data;
};

const displayComment = async (id) => {
  const comment = await getComment(id);
  const commentList = document.querySelector('.commentList');

  if (comment) {
    commentList.innerHTML = '';
    for (let i = comment.length - 1; i >= 0; i -= 1) {
      commentList.innerHTML += `
        <li class="show-comment">
        ${comment[i].creation_date} ${comment[i].username}: ${comment[i].comment}
        </li>
        `;
    }
  }
};

export default displayComment;
