/*
TODO: На сторінці знаходиться список друзів.
TODO: Порахуйте і виведіть до <span> на сторінці кількість друзів.
*/

const refs = {
  friendsList: document.querySelector('.js-friends-list'),
  outputEl: document.querySelector('.js-friends-count-output'),
};

console.log(refs);

refs.outputEl.textContent = refs.friendsList.children.length;
