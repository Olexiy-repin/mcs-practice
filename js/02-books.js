/*
TODO: Список книг.
TODO:
TODO: 1. По масиву books згенеруйту і відмалюйте на сторінці список книг.
TODO: Карточка однієї книги буде мати наступний вигляд:
        <li class="books-list-item">
          <img class="books-list-img" src="" alt="" />
          <h2 class="books-title"></h2>
        </li>
TODO: 2. Використовуючи делегування події click, обробіть кліки по карточкам.
TODO: При кліку на карточку має відкриватися модальне вікно з детальною інформацією про книгу.
TODO: Розмітка модального вікна:
      <img class="modal-book-img" src="" alt="" />
      <div class="modal-content-wrapper">
        <h2 class="modal-book-title"></h2>
        <p class="modal-book-author">Автор: </p>
        <p class="modal-book-rating">Рейтинг: </p>
        <p class="modal-book-desc"></p>
      </div>
TODO: Для логіки модального вікна використовуйте бібліотеку basicLightbox(https://github.com/electerious/basicLightbox/tree/master).
*/

const books = [
  {
    id: 1,
    title: 'Тіні забутих предків',
    description: 'Роман про життя гуцулів, їхні традиції, кохання та містицизм.',
    author: 'Михайло Коцюбинський',
    rating: 4.8,
    imgUrl: '../images/book-01.jpeg',
  },
  {
    id: 2,
    title: 'Фелікс Австрія',
    description: 'Історія жінки у Станіславові кінця XIX століття.',
    author: 'Софія Андрухович',
    rating: 4.5,
    imgUrl: '../images/book-02.jpeg',
  },
  {
    id: 3,
    title: 'Ворошиловград',
    description: 'Молодий чоловік повертається у рідне місто, щоб врятувати бізнес брата.',
    author: 'Сергій Жадан',
    rating: 4.9,
    imgUrl: '../images/book-03.jpeg',
  },
  {
    id: 4,
    title: 'Інтернат',
    description: 'Роман про війну на Донбасі очима вчителя-інтроверта.',
    author: 'Сергій Жадан',
    rating: 4.7,
    imgUrl: '../images/book-04.jpeg',
  },
];

const refs = {
  booksList: document.querySelector('.js-books-list'),
};

const createBookCardTemplate = ({ id, imgUrl, title }) => {
  return `
  <li class="books-list-item js-books-list-item" data-id="${id}">
    <img class="books-list-img" src="${imgUrl}" alt="${title}" />
    <h2 class="books-title">${title}</h2>
  </li>
  `;
};

const booksCardsTemplate = books.map(book => createBookCardTemplate(book)).join('');

refs.booksList.innerHTML = booksCardsTemplate;

const onBookCardClick = event => {
  if (event.target === event.currentTarget) {
    return;
  }

  const bookCardEl = event.target.closest('.js-books-list-item');

  const bookId = Number(bookCardEl.dataset.id);

  const currentBookInfo = books.find(book => book.id === bookId);

  const modalWindowInstance = basicLightbox.create(`
      <img class="modal-book-img" src="${currentBookInfo.imgUrl}" alt="${currentBookInfo.title}" />
      <div class="modal-content-wrapper">
        <h2 class="modal-book-title">${currentBookInfo.title}</h2>
        <p class="modal-book-author">Автор: ${currentBookInfo.author}</p>
        <p class="modal-book-rating">Рейтинг: ${currentBookInfo.rating}</p>
        <p class="modal-book-desc">${currentBookInfo.description}</p>
      </div>
    `);

  modalWindowInstance.show();
};

refs.booksList.addEventListener('click', onBookCardClick);
