/*
TODO: Рефакторинг методів обʼєкта calculator.
TODO:
TODO: Виправ методи так, щоб усі обчислення виконувались правильно.
*/

// const calculator = {
//   valueA: 10,
//   valueB: 5,

//   sum() {
//     return this.valueA + this.valueB;
//   },

//   diff() {
//     return this.valueA - this.valueB;
//   },

//   multiply() {
//     return this.valueA * this.valueB;
//   },

//   divide() {
//     return this.valueA / this.valueB;
//   },
// };

// console.log(calculator.sum()); // 15
// console.log(calculator.diff()); // 5
// console.log(calculator.multiply()); // 50
// console.log(calculator.divide()); // 2

/*
TODO: Рефакторинг метода getAverageGrade().
TODO:
TODO: Метод getAverageGrade() повинен повертати середній бал студента. Виправ this, де потрібно.
*/

// const student = {
//   firstName: 'Віктор',
//   grades: [90, 80, 100],

//   getAverageGrade() {
//     const totalGrade = this.grades.reduce((acc, mark) => acc + mark, 0);

//     return `${this.firstName} має середній бал ${totalGrade / this.grades.length}`;
//   },
// };

// console.log(student.getAverageGrade());

/*
TODO: Створення базового класу з методом.
TODO:
TODO: Створи клас Rectangle, який приймає ширину і висоту.
TODO: Додай метод getArea(), який повертає площу прямокутника.
*/

// class Rectangle {
//   constructor(rectWidth, rectHeight) {
//     // this = {};
//     this.width = rectWidth;
//     this.height = rectHeight;
//     // return this;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const rectA = new Rectangle(10, 5);

// console.log(rectA);

// console.log(rectA.getArea());

// const rectB = new Rectangle(15, 4);

// console.log(rectB);

// console.log(rectB.getArea());

/*
TODO: Приватні властивості та гетери/сетери.
TODO:
TODO: Створи клас User з приватною властивістю #password. Додай:
TODO: - гетер password, який повертає значення пароля;
TODO: - сетер password, який дозволяє змінити пароль, але тільки якщо він довший за 6 символів;
TODO: - метод maskedPassword, який повертає ******.
*/

// class User {
//   #password;

//   constructor(userPassword) {
//     // this = {};
//     this.#password = userPassword;
//     // return this;
//   }

//   get password() {
//     return this.#password;
//   }

//   set password(newPassword) {
//     if (newPassword.length >= 6) {
//       this.#password = newPassword;
//     }
//   }

//   maskedPassword() {
//     return '*'.repeat(this.#password.length);
//   }
// }

// const userA = new User('1234567');

// console.log(userA);

// console.log(userA.password);

// userA.password = '123';

// console.log(userA.password);

// userA.password = 'qwerty123';

// console.log(userA.password);

// console.log(userA.maskedPassword());

/*
TODO: Клас з валідацією через сетер
TODO:
TODO: Створи клас Product, в якому:
TODO: - створи приватну властивість #price;
TODO: - створи сетер price, який змінює ціну, якщо ціна не відʼємна
TODO: - створи гетер price, який повертає ціну з написом "грн".
*/

// class Product {
//   #price;

//   constructor(productName, productPrice) {
//     // this = {};
//     this.title = productName;
//     this.#price = productPrice;
//     // return this;
//   }

//   get price() {
//     return `${this.#price} грн.`;
//   }

//   set price(newPrice) {
//     this.#price = newPrice >= 0 ? newPrice : this.#price;
//   }
// }

// const productA = new Product('Телевізор', 10000);

// console.log(productA);

// console.log(productA.price);

// productA.price = 50;

// console.log(productA.price);

/*
TODO: Клас BankAccount
TODO:
TODO: Створи клас BankAccount з:
TODO: - приватним полем #balance
TODO: - методами deposit(amount) і withdraw(amount)
TODO:   - deposit(amount) - додає amount до #balance, якщо amount > 0.
TODO:   - withdraw(amount) - віднімає amount від #balance, якщо amount < #balance і amount > 0.
TODO: - гетером balance, який повертає значення балансу.
*/

// class BankAccount {
//   #balance;

//   constructor(userBalance) {
//     this.#balance = userBalance;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }

//   withdraw(amount) {
//     if (amount < this.#balance && amount > 0) {
//       this.#balance -= amount;
//     }
//   }
// }

// const account = new BankAccount(1000);

// console.log(account);

// console.log(account.balance);

// account.deposit(200);

// console.log(account.balance);

// account.withdraw(500);

// console.log(account.balance);

/*
TODO: Кошик інтернет-магазину
TODO:
TODO: Створи 2 класи Cart та CartItem.
TODO: Клас CartItem буде відповідати за створення товару, який буде додаватися в кошик.
TODO: Клас Cart буде відповідати за створення кошику.
TODO:
TODO: Клас CartItem має повертати екземпляр із трьома властивостями:
TODO: - title
TODO: - price
TODO: - quantity
TODO:
TODO: Клас Cart має повертати екземпляр із:
TODO: - властивістю items, це масив із товарами;
TODO: - методом addItem(newItem) для додавання нового товару до масиву items;
TODO: - методом removeItem(itemTitle) для видалення товару із масиву items;
*/

// class CartItem {
//   constructor(productTitle, productPrice, productQuantity) {
//     this.title = productTitle;
//     this.price = productPrice;
//     this.quantity = productQuantity;
//   }
// }

// class Cart {
//   constructor() {
//     this.items = [];
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemTitle) {
//     this.items = this.items.filter(item => item.title !== itemTitle);
//   }
// }

// const userCart = new Cart();

// console.log(userCart);

// userCart.addItem(new CartItem('Ноутбук', 30000, 1));
// userCart.addItem(new CartItem('Мишка', 800, 2));

// console.log(userCart);

// userCart.removeItem('Ноутбук');

// console.log(userCart);
