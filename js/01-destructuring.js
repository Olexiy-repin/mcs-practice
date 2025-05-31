/*
TODO: Проста деструктуризація.
TODO:
TODO: Напиши функцію getUserInfo(user), яка приймає об'єкт користувача з полями firstName та age.
TODO: Функція виводить до консолі рядок у форматі: Ім'я: {firstName}, Вік: {age}.
*/

// const getUserInfo = ({ firstName, age }) => {
//   console.log(`Імʼя: ${firstName}, Вік: ${age}`);
// };

// getUserInfo({ firstName: 'Elva', age: 30 });

/*
TODO: Присвоєння значення за замовчуванням.
TODO:
TODO: Напиши функцію getFullName(user), яка приймає об'єкт користувача з полями firstName та lastName.
TODO: Використай деструктуризацію з присвоєнням значення за замовчуванням для lastName = "Невідомий".
TODO: Функція повинна повертати рядок у форматі "firstName lastName".
*/

// const getFullName = ({ firstName, lastName = 'Невідомий' }) => {
//   return `${firstName} ${lastName}`;
// };

// console.log(getFullName({ firstName: 'Jesus', lastName: 'Barrett' }));
// console.log(getFullName({ firstName: 'Clara' }));

/*
TODO: Використання rest при деструктуризації.
TODO:
TODO: Напиши функцію removePassword(user), яка приймає об'єкт користувача з полями firstName, password та іншими.
TODO: Функція повертає новий об'єкт без поля password.
TODO: Використай деструктуризацію з оператором rest для отримання об'єкта без вказаного поля.
*/

// const removePassword = ({ password, ...newUser }) => newUser;

// console.log(removePassword({ firstName: 'Jack', password: '12345', age: 30 }));

/*
TODO: Глибока деструктуризація.
TODO:
TODO: Напиши функцію introducePerson(user), яка приймає об'єкт користувача з полями firstName і location.
TODO: Функція повинна повертати рядок у форматі: "{firstName} живе в {city}, {country}".
*/

// const introducePerson = ({ firstName, location: { city, country } }) => {
//   return `${firstName} живе в ${city}, ${country}`;
// };

// console.log(introducePerson({ firstName: 'Сергій', location: { city: 'Київ', country: 'Україна' } }));
