// https://unsplash.com/documentation
import iziToast from 'izitoast';
import { fetchPhotosByQuery } from './unsplash-api';
import { createGalleryCardTemplate } from './render-functions';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  galleryList: document.querySelector('.js-gallery'),
  targetElement: document.querySelector('.js-target-element'),
};

let page = 1;
let searchedQuery = null;

const options = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1,
};

const observerCallback = async entries => {
  if (entries[0].isIntersecting) {
    try {
      page++;

      const { data } = await fetchPhotosByQuery(searchedQuery, page);

      const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

      refs.galleryList.insertAdjacentHTML('beforeend', galleryCardsTemplate);

      if (page === data.total_pages) {
        observer.unobserve(refs.targetElement);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const observer = new IntersectionObserver(observerCallback, options);

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
    refs.galleryList.innerHTML = '';

    const { data } = await fetchPhotosByQuery(searchedQuery, page);

    const galleryCardsTemplate = data.results.map(img => createGalleryCardTemplate(img)).join('');

    refs.galleryList.innerHTML = galleryCardsTemplate;

    observer.observe(refs.targetElement);
  } catch (err) {
    console.log(err);
  }
};

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
