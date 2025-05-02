/*
TODO: Вивести привітання
TODO: Є змінні firstName та age.
TODO: Склади шаблонний рядок: "Привіт, мене звати firstName і мені age років."
*/

//~ Варіант через конкатенацію рядків
// const firstName = 'Steve';
// const age = 30;

// const message = 'Привіт, мене звати ' + firstName + ' і мені ' + age + ' років.';

// console.log(message);

//~ Варіант через шаблоні рядки
// const firstName = 'Steve';
// const age = 30;

// const message = `Привіт, мене звати ${firstName} і мені ${age} років.`;

// console.log(message);

/*
TODO: Є змінні a та b. Виведи рядок: "Сума a + b = 13"
*/

// const a = 5;
// const b = 8;

// const message = `Сума a + b = ${a + b}`;

// console.log(message);

/*
TODO: Створи функцію getEventInfo(event, date, location),
TODO: яка буде повертати рядок з інформацією про подію: "Подія [event] відбудеться [date]  у місті [location]"
*/

// function getEventInfo(event, date, location) {
//   return `Подія ${event} відбудеться ${date} у місті ${location}`;
// }

// console.log(getEventInfo('Хакатон', '15 червня', 'Київ'));

/*
TODO: Створи функцію formatUser(name, email), яка повертає рядок: "Користувач [Ім'я] має пошту: [email]"
*/

// function formatUser(name, email) {
//   return `Користувач ${name} має пошту: ${email}`;
// }

// console.log(formatUser('Mollie', 'test1@gmail.com'));
// console.log(formatUser('Susie', 'test2@gmail.com'));
// console.log(formatUser('Robert', 'test3@gmail.com'));

/*
TODO: Перетвори рядок на число.
*/

// const str = '10';
// const num = +str;

// console.log(str);
// console.log(num);

/*
TODO: Є зміна weight, в якій зберігається значення ваги людини.
TODO: Отримай числове значення ваги.
*/

// const weight = '85kg';
// const numericalWeight = Number.parseInt(weight);

// console.log(weight);
// console.log(numericalWeight);

/*
TODO: Є зміна height, в якій зберігається значення висоти людини.
TODO: Отримай числове значення висоти.
*/

// const height = '175.4cm';
// const numericalHeight = Number.parseFloat(height);

// console.log(height);
// console.log(numericalHeight);

/*
TODO: Створи функцію getCubeVolume(side), яка обчислює обʼєм куба за переданною стороною.
TODO: Обʼєм куба розраховується за формулою V = a^3.
*/

// function getCubeVolume(side) {
//   const numericalSide = Number.parseInt(side);

//   return numericalSide ** 3;
// }

// console.log(getCubeVolume('5cm'));
// console.log(getCubeVolume('3cm'));
