const refs = {
  loader: document.querySelector('.js-loader'),
};

export const loader = {
  show() {
    refs.loader.classList.remove('is-hidden');
  },

  hide() {
    refs.loader.classList.add('is-hidden');
  },
};
