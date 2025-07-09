// https://unsplash.com/documentation
import iziToast from 'izitoast';
import { fetchPhotosByQuery } from './unsplash-api';
import { createGalleryCardTemplate } from './render-functions';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
  loader: document.querySelector('.js-loader'),
};

let page = 1;
let searchedQuery = null;
let galleryCardHeight = null;

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();

    const { currentTarget: searchForm } = event;

    searchedQuery = searchForm.elements.user_query.value.trim();

    if (searchedQuery === '') {
      iziToast.error({
        message: 'Поле для пошуку має бути заповненим!',
        position: 'topRight',
      });

      return;
    }

    page = 1;
    refs.loadMoreBtn.classList.add('is-hidden');
    refs.galleryList.innerHTML = '';
    refs.loader.classList.remove('is-hidden');

    const { data } = await fetchPhotosByQuery(searchedQuery, page);

    refs.loader.classList.add('is-hidden');

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;

    galleryCardHeight = refs.galleryList.querySelector('li').getBoundingClientRect().height;

    if (data.total_pages > 1) {
      refs.loadMoreBtn.classList.remove('is-hidden');

      refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
    }
  } catch (err) {
    refs.loader.classList.add('is-hidden');

    console.log(err);
  }
};

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    refs.loader.classList.remove('is-hidden');

    const { data } = await fetchPhotosByQuery(searchedQuery, page);

    refs.loader.classList.add('is-hidden');

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

    scrollBy({
      top: galleryCardHeight * 2,
      behavior: 'smooth',
    });

    if (page === data.total_pages) {
      refs.loadMoreBtn.classList.add('is-hidden');
      refs.loadMoreBtn.removeEventListener('click', onLoadMoreBtnClick);
    }
  } catch (err) {
    refs.loader.classList.add('is-hidden');

    console.log(err);
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
