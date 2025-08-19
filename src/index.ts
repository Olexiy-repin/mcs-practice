/*
TODO: Клас із властивостями.
TODO:
TODO: Створи клас Car, який має властивості:
TODO:   - brand (рядок);
TODO:   - year (число);
TODO:   - isElectric (булеве);
TODO:   - Додай метод getInfo(), який повертає рядок із коротким описом машини.
*/

// class Car {
//   brand: string;
//   year: number;
//   isElectric: boolean;

//   constructor(brand: string, year: number, isElectric: boolean) {
//     this.brand = brand;
//     this.year = year;
//     this.isElectric = isElectric;
//   }

//   getInfo(): string {
//     return `Brand: ${this.brand}, Year: ${this.year}, isElectric: ${this.isElectric}`;
//   }
// }

// const car = new Car('mazda', 2020, false);

// console.log(car);

// console.log(car.getInfo());

/*
TODO: Модифікатори доступу.
TODO:
TODO: Реалізуй клас User із властивостями:
TODO:   - username (публічна);
TODO:   - password (приватна);
TODO:   - Додай метод checkPassword(pass: string): boolean.
*/

// class User {
//   public username: string;
//   private password: string;

//   constructor(username: string, password: string) {
//     this.username = username;
//     this.password = password;
//   }

//   public checkPassword(pass: string): boolean {
//     return pass.toLowerCase() === this.password.toLowerCase();
//   }
// }

// const user = new User('Oleksii', 'oleksii123');

// console.log(user);

// console.log(user.checkPassword('oleksiisdf123'));

/*
TODO: Конструктор та readonly.
TODO:
TODO: Створи клас Book, у якому:
TODO:   - title — доступна лише для читання (readonly);
TODO:   - author — звичайне поле;
TODO:   - year — число, яке можна змінити.
*/

// Версія без скороченної ініціалізації
// class Book {
//   public readonly title: string;
//   public author: string;
//   public year: number;

//   constructor(title: string, author: string, year: number) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
// }

// const book = new Book('Some title', 'Lela Allison', 2012);

// console.log(book);

// console.log(book.title);

// Версія із скороченною ініціалізацією
// class Book {
//   constructor(public readonly title: string, public author: string, public year: number) {}
// }

// const book = new Book('Some title', 'Scott Terry', 2020);

// console.log(book);

// console.log(book.title);

/*
TODO: Наслідування
TODO:
TODO: Створи базовий клас Animal з властивістю name та методом makeSound().
TODO: Створи класи-нащадки Dog і Cat, які перевизначають makeSound().
*/

// class Animal {
//   constructor(public name: string) {}

//   public makeSound(): void {
//     console.log('Звуки тварин...');
//   }
// }

// class Dog extends Animal {
//   public color: string;

//   constructor(name: string, color: string) {
//     super(name);

//     this.color = color;
//   }

//   public makeSound(): void {
//     super.makeSound();

//     console.log(`${this.name} гавкає!`);
//   }
// }

// const dog = new Dog('Bob', 'black and white');

// console.log(dog);

// dog.makeSound();

// class Cat extends Animal {
//   public makeSound(): void {
//     super.makeSound();

//     console.log(`${this.name} нявкає!`);
//   }
// }

// const cat = new Cat('Tom');

// cat.makeSound();

/*
TODO: Інтерфейси для класів
TODO:
TODO: Створи інтерфейс Shape із методом getArea(): number.
TODO: Реалізуй його у класах Circle і Rectangle.
TODO: Формули:
TODO:   - Площа прямокутника, S = a * b.
TODO:   - Площа круга, S = πr2.
*/

// interface IShape {
//   getArea(): number;
// }

// class Circle implements IShape {
//   constructor(public r: number) {}

//   public getArea(): number {
//     return Math.PI * this.r ** 2;
//   }
// }

// const circle = new Circle(10);

// console.log(circle);

// console.log(circle.getArea());

// class Rectangle implements IShape {
//   constructor(public sideA: number, public sideB: number) {}

//   public getArea(): number {
//     return this.sideA * this.sideB;
//   }
// }

// const rect = new Rectangle(10, 20);

// console.log(rect);

// console.log(rect.getArea());

/*
TODO: Абстрактні класи
TODO:
TODO: Створи абстрактний клас Employee:
TODO:   - з властивістю name;
TODO:   - з властивістю monthlyRate;
TODO:   - з методом getInfo, який повертає повідомлення `${this.name} отримує зарплату: ${this.getSalary()} грн`;
TODO:   - з абстрактним методом getSalary(): number.
TODO: Створи класи Developer та Manager, які реалізують метод getSalary по-різному.
*/

// abstract class Employee {
//   constructor(public name: string, public monthlyRate: number) {}

//   public getInfo(): string {
//     return `${this.name} отримує зарплату: ${this.getSalary()} грн`;
//   }

//   abstract getSalary(): number;
// }

// class Developer extends Employee {
//   public getSalary(): number {
//     return this.monthlyRate;
//   }
// }

// const developer = new Developer('Ricardo', 40000);

// console.log(developer);

// console.log(developer.getSalary());

// class Manager extends Employee {
//   private bonus: number = 5000;

//   getSalary(): number {
//     return this.monthlyRate + this.bonus;
//   }
// }

// const manager = new Manager('Rosetta', 20000);

// console.log(manager);

// console.log(manager.getSalary());
