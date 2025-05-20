/*
TODO: Перевірка віку
TODO:
TODO: Створи функцію checkAge(age).
TODO: Якщо age від 18 до 60 включно — функція повертає "Доступ дозволено", інакше — "Доступ заборонено".
*/

// function checkAge(age) {
//   return age >= 18 && age <= 60 ? 'Доступ дозволено' : 'Доступ заборонено';
// }

// console.log(checkAge(24));
// console.log(checkAge(17));
// console.log(checkAge(61));

/*
TODO: Визначення пори року
TODO:
TODO: Створи функцію getSeason(month), яка приймає номер місяця (1–12) і повертає назву пори року.
TODO: Наприклад: 1, 2, 12 => "Зима"
*/

// function getSeason(month) {
//   let seaseon = '';

//   switch (month) {
//     case 12:
//     case 1:
//     case 2: {
//       seaseon = 'Зима';

//       break;
//     }

//     case 3:
//     case 4:
//     case 5: {
//       seaseon = 'Весна';

//       break;
//     }

//     case 6:
//     case 7:
//     case 8: {
//       seaseon = 'Літо';

//       break;
//     }

//     case 9:
//     case 10:
//     case 11: {
//       seaseon = 'Осінь';

//       break;
//     }
//   }

//   return seaseon;
// }

// console.log(getSeason(1));
// console.log(getSeason(5));
// console.log(getSeason(8));
// console.log(getSeason(10));

/*
TODO: Калькулятор
TODO:
TODO: Напиши функцію calculate(a, b, operator), яка виконує операцію:
TODO: +, -, *, / — залежно від оператора. Реалізуй через switch.
*/

// function calculate(a, b, operator) {
//   switch (operator) {
//     case '+': {
//       return a + b;
//     }

//     case '-': {
//       return a - b;
//     }

//     case '*': {
//       return a * b;
//     }

//     case '/': {
//       return a / b;
//     }
//   }
// }

// console.log(calculate(10, 20, '+'));
// console.log(calculate(10, 20, '-'));
// console.log(calculate(10, 20, '*'));
// console.log(calculate(10, 20, '/'));

/*
TODO: Перевірка домену пошти
TODO:
TODO: Напиши функцію isGmail(email), яка перевіряє, чи є email поштою на Gmail (тобто містить "@gmail.com").
TODO: Повертає true або false.
*/

// function isGmail(email) {
//   return email.endsWith('@gmail.com');
// }

// console.log(isGmail('test@gmail.com'));
// console.log(isGmail('test@gmail.c'));

/*
TODO: Заміна частини рядка
TODO:
TODO: Напиши функцію censorWord(sentence, word), яка замінює слово у реченні на "***".
TODO: Наприклад: censorWord("You are dumb", "dumb") => "You are ***"
*/

// function censorWord(sentence, word) {
//   return sentence.toLowerCase().replaceAll(word, '***');
// }

// console.log(censorWord('You are dumb', 'dumb'));

/*
TODO: Виділення доменного імені
TODO:
TODO: Напиши функцію getDomain(email), яка повертає частину після символу "@" у email.
TODO: Наприклад: getDomain("test@gmail.com") => "gmail.com"
*/

// function getDomain(email) {
//   const indexOfChar = email.indexOf('@');

//   return email.slice(indexOfChar + 1);
// }

// console.log(getDomain('test@gmail.com'));

/*
TODO: Сума чисел
TODO:
TODO: Обчисли суму всіх чисел від 1 до n. Значення n вводиться користувачем (prompt).
*/

// const max = Number(prompt('Введіть якесь число більше 1'));

// let total = 0;

// for (let i = 1; i <= max; i++) {
//   total += i;
// }

// console.log(total);

/*
TODO: Пошук першого кратного 7
TODO:
TODO: Знайди перше число від 100 до 200, яке ділиться на 7 без остачі.
TODO: Зупини цикл після знаходження.
*/

// let firstEvenNumber = 0;

// for (let i = 100; i <= 200; i++) {
//   if (i % 7 === 0) {
//     firstEvenNumber = i;

//     break;
//   }
// }

// console.log(firstEvenNumber);

/*
TODO: Паліндром
TODO:
TODO: Напиши функцію isPalindrome(str), яка повертає true, якщо str — паліндром.
TODO: Наприклад: "level", "madam".
*/

// function isPalindrome(str) {
//   let reversedStr = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }

//   return str === reversedStr;
// }

// console.log(isPalindrome('level'));
// console.log(isPalindrome('cat'));
// console.log(isPalindrome('madam'));
