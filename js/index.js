/*
TODO: Аналіз покупок.
TODO:
TODO: Є обʼєкт products, який представляє покупки користувача в онлайн-магазині.
TODO: Ключ — це назва товару, значення — кількість одиниць, які було куплено.
TODO: 1. Виведи в консоль повідомлення про кожен товар у форматі. (Користувач купив 5 одиниць товару apple).
TODO: 2. Порахуйте загальну кількість всіх куплених товарів.
TODO: 3. Створи новий масив із назвами лише тих товарів, яких було куплено 2 або більше одиниць.
*/

// const products = {
//   apple: 5,
//   banana: 2,
//   orange: 4,
//   mango: 0,
//   pineapple: 1,
// };

//~ 1.
// const productsKeys = Object.keys(products);

// console.log(products);
// console.log(productsKeys);

// for (const key of productsKeys) {
//   console.log(`Користувач купив ${products[key]} одиниць товару ${key}`);
// }

//~ 2.
// const productsValues = Object.values(products);

// console.log(products);
// console.log(productsValues);

// let totalProducts = 0;

// for (const value of productsValues) {
//   totalProducts += value;
// }

// console.log(totalProducts);

//~ 3.
// const productsKeys = Object.keys(products);
// const productsNames = [];

// console.log(products);
// console.log(productsKeys);

// for (const key of productsKeys) {
//   if (products[key] >= 2) {
//     productsNames.push(key);
//   }
// }

// console.log(productsNames);

/*
TODO: Метод для виводу інформації про товар.
TODO:
TODO: Створи обʼєкт product з властивостями title, price, category.
TODO: Додай метод getInfo(), який повертає рядок типу: 'Товар: {title}, Категорія: {category}, Ціна: {price} грн'
*/

// const product = {
//   title: 'Товар 1',
//   price: 10000,
//   category: 'електроніка',

//   getInfo() {
//     return `Товар: ${this.title}, Категорія: ${this.category}, Ціна: ${this.price} грн.`;
//   },
// };

// console.log(product);

// console.log(product.getInfo());

/*
TODO: Створення методу в обʼєкті.
TODO:
TODO: Створи об'єкт user з властивостями firstName, lastName та age, а також методом getFullname().
TODO: Метод має повертати повне імʼя користувача.
*/

// const user = {
//   firstName: 'Glenn',
//   lastName: 'Riley',
//   age: 30,

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// console.log(user);
// console.log(user.getFullName());

/*
TODO: Метод для додавання друзів.
TODO:
TODO: Є обʼєкт user з масивом friends.
TODO: Додай наступні методи:
TODO: - addFriend(friendName) - додає ім’я в список друзів.
TODO: - removeFriend(friendName) - видаляє імʼя із списку друзів.
*/

// const user = {
//   friends: ['Claudia', 'Justin', 'Ada', 'Lilly'],

//   addFriend(friendName) {
//     if (friendName === '') {
//       return;
//     }

//     this.friends.push(friendName);
//   },

//   removeFriend(friendName) {
//     const idxOfFriendName = this.friends.indexOf(friendName);

//     if (idxOfFriendName === -1) {
//       console.log(`${friendName} не знайдено!`);

//       return;
//     }

//     this.friends.splice(idxOfFriendName, 1);
//   },
// };

// console.log(user.friends);

// user.addFriend('Clarence');

// console.log(user.friends);

// user.removeFriend('Justin');
// user.removeFriend('sdf');

// console.log(user.friends);

/*
TODO: Методи для роботи з корзиною товарів.
TODO:
TODO: Є обʼєкт cart. У властивості items зберігається масив з товарами.
TODO: Додай наступні методи в обʼєкт:
TODO: - changeQuantity(productName, value) - змінює кількість товару у кошику.
TODO: - getTotalPrice() - повартає загальну суму товарів у кошику.
*/

// const cart = {
//   items: [
//     { title: 'Хліб', price: 25, quantity: 3 },
//     { title: 'Молоко', price: 30, quantity: 2 },
//   ],

//   changeQuantity(productName, value) {
//     productName = productName.toLowerCase();

//     for (const product of this.items) {
//       if (product.title.toLowerCase() === productName) {
//         product.quantity += value;

//         return;
//       }
//     }
//   },

//   getTotalPrice() {
//     let totalPrice = 0;

//     for (const product of this.items) {
//       totalPrice += product.price * product.quantity;
//     }

//     return totalPrice;
//   },
// };

// console.table(cart.items);

// cart.changeQuantity('хліб', 2);
// console.log(cart.getTotalPrice());

/*
TODO: Пошук за значенням.
TODO:
TODO: Напиши функцію findByName(users, userName), яка шукає об'єкт у масиві за полем firstName.
*/

// const findByName = function (users, userName) {
//   userName = userName.toLowerCase();

//   console.table(users);

//   for (const user of users) {
//     if (user.firstName.toLowerCase() === userName) {
//       return user;
//     }
//   }
// };

// console.log(
//   findByName(
//     [
//       { firstName: 'Allen', age: 30, gender: 'male' },
//       { firstName: 'Theresa', age: 20, gender: 'female' },
//       { firstName: 'Josephine', age: 25, gender: 'female' },
//       { firstName: 'Max', age: 40, gender: 'male' },
//       { firstName: 'Phillip', age: 23, gender: 'male' },
//     ],
//     'Max'
//   )
// );

/*
TODO: Фільтрація об’єктів у масиві
TODO:
TODO: Напиши функцію filterProductsByPrice(products, threshold), яка буде приймати масив об'єктів з товарами.
TODO: Функція має повернути лише ті, в яких ціна менше ніж параметр threshold.
*/

// const filterProductsByPrice = function (products, threshold) {
//   console.table(products);

//   const filteredProducts = [];

//   for (const product of products) {
//     if (product.price < threshold) {
//       filteredProducts.push(product);
//     }
//   }

//   return filteredProducts;
// };

// console.table(
//   filterProductsByPrice(
//     [
//       { title: 'Товар 1', price: 50 },
//       { title: 'Товар 2', price: 150 },
//       { title: 'Товар 3', price: 80 },
//     ],
//     100
//   )
// );
