import displayComment from './displayComment.js';

const addComment = async (id) => {
  const username = document.getElementById('username');
  const comment = document.getElementById('comment');

  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UKP27MmenkdUVvm9H93H/comments';
  const data = {
    item_id: `item${id}`,
    username: username.value,
    comment: comment.value,
  };
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  username.value = '';
  comment.value = '';

  displayComment(id);
};

export default addComment;
