/*
TODO: Є масив friends, по якому потрібно згенерувати картки з друзями і вставити в список на сторінці.
TODO: Використовуйте document.createElement() та el.append().
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
  const friendItem = document.createElement('li');

  friendItem.classList.add('friends-list-item');

  const friendAvatar = document.createElement('img');

  friendAvatar.classList.add('friend-avatar');
  friendAvatar.src = friendInfo.avatarUrl;
  friendAvatar.alt = friendInfo.altDescription;

  friendItem.append(friendAvatar);

  const friendName = document.createElement('h2');

  friendName.classList.add('friend-name');
  friendName.textContent = friendInfo.fullName;

  friendItem.append(friendName);

  return friendItem;
};

const friendsCardsArr = friends.map(friend => createFriendCard(friend));

console.log(friendsCardsArr);

refs.friendsList.append(...friendsCardsArr);
