/*
TODO: Метод forEach().
TODO:
TODO: Виведи всі елементи масиву з індексами.
*/

// const fruits = ['apple', 'banana', 'cherry'];

// console.log(fruits);

// const result = fruits.forEach((el, idx, arr) => {
//   console.log(`${idx}: ${el}`);
// });

/*
TODO: Метод map().
TODO:
TODO: Створи новий масив, у якому всі числа подвоєні.
*/

// const nums = [1, 2, 3];
// const doubleNumbers = nums.map(el => el * 2);

// console.log(nums);
// console.log(doubleNumbers);

/*
TODO: Метод filter().
TODO:
TODO: Відфільтруй користувачів віком від 18 років.
*/

// const users = [
//   { firstName: 'Ira', age: 17 },
//   { firstName: 'Max', age: 22 },
//   { firstName: 'Bobby', age: 28 },
//   { firstName: 'Anthony', age: 15 },
// ];
// const filteredUsers = users.filter(el => el.age >= 18);

// console.table(users);
// console.table(filteredUsers);

/*
TODO: Метод find().
TODO:
TODO: Знайди користувача з email 'test@example.com'.
*/

// const users = [
//   { firstName: 'Ann', email: 'ann@mail.com' },
//   { firstName: 'Test', email: 'test@example.com' },
// ];
// const user = users.find(el => el.email === 'test@example.com');

// console.table(users);
// console.log(user);

/*
TODO: Метод some().
TODO:
TODO: Чи є серед товарів хоча б один з нульовою кількістю на складі?
*/

// const stock = [
//   { title: 'Monitor', quantity: 5 },
//   { title: 'Keyboard', quantity: 0 },
// ];
// const isSomeProductOutOfStock = stock.some(el => el.quantity === 0);

// console.table(stock);
// console.log(isSomeProductOutOfStock);

/*
TODO: Метод every().
TODO:
TODO: Перевір, чи всі студенти склали тест (score > 50).
*/

// const students = [
//   { firstName: 'Ivan', score: 78 },
//   { firstName: 'Oksana', score: 91 },
//   { firstName: 'Pavlo', score: 45 },
// ];
// const isAllStudentsApproved = students.every(el => el.score > 50);

// console.table(students);
// console.log(isAllStudentsApproved);

/*
TODO: Метод reduce().
TODO:
TODO: Порахуй загальну вартість товарів у кошику.
*/

// const cart = [
//   { title: 'Book', price: 12, quantity: 2 },
//   { title: 'Pen', price: 3, quantity: 4 },
// ];

/*
1 Ітерація
  acc = 0;
  el = { title: 'Book', price: 12, quantity: 2 };
  idx = 0;
  arr = cart;

  return 24;

2 Ітерація
  acc = 24;
  el = { title: 'Pen', price: 3, quantity: 4 };
  idx = 1;
  arr = cart;

  return 36;
*/

// const totalPrice = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);

// console.table(cart);
// console.log(totalPrice);

/*
TODO: Метод map().
TODO:
TODO: Створи функцію addBonus(employees)
TODO: Функція має для кожного працівника додати нову властивість bonus, яка дорівнює 10% від зарплати, якщо стаж > 5 років.
*/

// const addBonus = employees => {
//   return employees.map(el => {
//     el.bonus = el.experience > 5 ? el.salary * 0.1 : 0;

//     return el;
//   });
// };

// console.log(
//   addBonus([
//     { firstName: 'Fred', salary: 1000, experience: 6 },
//     { firstName: 'Jose', salary: 800, experience: 3 },
//   ])
// );

/*
TODO: Сортування товарів за кількістю коментарів
TODO:
TODO: Створи функцію sortByDescendingCommentsCount(products).
TODO: Функція має повертати масив з товарами відсортованих за кількістю коментарів. 
*/

// const sortByDescendingCommentsCount = products => {
//   console.table(products);

//   return products.toSorted((productA, productB) => {
//     return productB.comments.length - productA.comments.length;
//   });
// };

// console.table(
//   sortByDescendingCommentsCount([
//     {
//       name: 'Ноутбук',
//       price: 27000,
//       comments: [
//         { description: 'comment 1', rating: 4 },
//         { description: 'comment 2', rating: 3.5 },
//         { description: 'comment 3', rating: 4 },
//       ],
//     },
//     {
//       name: 'Смартфон',
//       price: 19000,
//       comments: [
//         { description: 'comment 1', rating: 4 },
//         { description: 'comment 2', rating: 5 },
//       ],
//     },
//     {
//       name: 'Планшет',
//       price: 14000,
//       comments: [
//         { description: 'comment 1', rating: 4 },
//         { description: 'comment 2', rating: 3.5 },
//         { description: 'comment 3', rating: 4 },
//         { description: 'comment 4', rating: 4.5 },
//       ],
//     },
//     {
//       name: 'Монітор',
//       price: 8500,
//       comments: [{ description: 'comment 1', rating: 3 }],
//     },
//   ])
// );

/*
TODO: Методи filter() та map().
TODO: 
TODO: Створити функцію getStudentsWithHighScore(allStudents).
TODO: Функція буде повертати масив імен студентів, які мають середній бал > 85.
*/

// const getStudentsWithHighScore = allStudents => {
//   return allStudents.filter(student => student.averageScore > 85).map(student => student.firstName);
// };

// const students = [
//   { firstName: 'Olha', averageScore: 90 },
//   { firstName: 'Ivan', averageScore: 75 },
//   { firstName: 'Svitlana', averageScore: 88 },
// ];

// console.table(students);
// console.log(getStudentsWithHighScore(students)); // ['Olha', 'Svitlana']
