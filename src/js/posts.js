import iziToast from 'izitoast';
import { fetchAllPosts, createNewPost, deletePostById } from './mockapi';
import { createPostCardTemplate } from './render-functions';
import { loader } from './loader';

const refs = {
  postsList: document.querySelector('.js-posts-list'),
  postForm: document.querySelector('.js-post-form'),
};

const renderPosts = () => {
  loader.show();

  fetchAllPosts()
    .finally(() => {
      loader.hide();
    })
    .then(result => {
      const postsCardsTemplate = result.map(post => createPostCardTemplate(post)).join('');

      refs.postsList.innerHTML = postsCardsTemplate;
    })
    .catch(err => {
      console.log(err);
    });
};

renderPosts();

const onPostFormSubmit = event => {
  event.preventDefault();

  const { target: postFormEl } = event;

  const formData = {
    post_title: postFormEl.elements.post_title.value.trim(),
    post_body: postFormEl.elements.post_body.value.trim(),
  };

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    iziToast.error({
      message: 'Всі поля форми мають бути заповнені!',
      position: 'topRight',
    });

    return;
  }

  postFormEl.reset();
  loader.show();

  createNewPost(formData)
    .finally(() => {
      loader.hide();
    })
    .then(result => {
      iziToast.success({
        message: `${result.post_title}, успішно додано!`,
        position: 'topRight',
      });

      renderPosts();
    })
    .catch(err => {
      console.log(err);
    });
};

const onDeleteBtnClick = event => {
  const deleteBtnEl = event.target.closest('button[data-delete]');

  if (deleteBtnEl === null) {
    return;
  }

  const postId = deleteBtnEl.dataset.postId;

  loader.show();

  deletePostById(postId)
    .finally(() => {
      loader.hide();
    })
    .then(result => {
      iziToast.success({
        message: `${result.post_title} було видалено успішно!`,
        position: 'topRight',
      });

      renderPosts();
    })
    .catch(err => {
      console.log(err);
    });
};

refs.postForm.addEventListener('submit', onPostFormSubmit);
refs.postsList.addEventListener('click', onDeleteBtnClick);
