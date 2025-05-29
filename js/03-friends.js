/*
TODO: Є масив friends, по якому потрібно згенерувати картки з друзями і вставити в список на сторінці.
TODO: Використовуйте шаблоні рядки та innerHTML.
TODO: Розмітка однієї карточки має бути наступною:
  <li class="friends-list-item">
    <img class="friend-avatar" src="" alt="">
    <h2 class="friend-name"></h2>
  </li>
*/

const friends = [
  {
    fullName: 'Lester Warren',
    avatarUrl: 'https://placehold.co/32x32/orange/white?text=LW',
    altDescription: 'Lester Warren',
  },
  {
    fullName: 'Nannie Garrett',
    avatarUrl: 'https://placehold.co/32x32/orange/white?text=NG',
    altDescription: 'Nannie Garrett',
  },
  {
    fullName: 'Bill Moss',
    avatarUrl: 'https://placehold.co/32x32/orange/white?text=BM',
    altDescription: 'Bill Moss',
  },
  {
    fullName: 'Craig Curry',
    avatarUrl: 'https://placehold.co/32x32/orange/white?text=CC',
    altDescription: 'Craig Curry',
  },
  {
    fullName: 'Antonio Russell',
    avatarUrl: 'https://placehold.co/32x32/orange/white?text=AR',
    altDescription: 'Antonio Russell',
  },
  {
    fullName: 'Lela Jennings',
    avatarUrl: 'https://placehold.co/32x32/orange/white?text=LJ',
    altDescription: 'Lela Jennings',
  },
];

const refs = {
  friendsList: document.querySelector('.js-friends-list'),
};

const createFriendCard = friendInfo => {
  return `
  <li class="friends-list-item">
    <img class="friend-avatar" src="${friendInfo.avatarUrl}" alt="${friendInfo.altDescription}">
    <h2 class="friend-name">${friendInfo.fullName}</h2>
  </li>
  `;
};

const friendsCardsTemplate = friends.map(friend => createFriendCard(friend)).join('');

refs.friendsList.insertAdjacentHTML('beforeend', friendsCardsTemplate);
