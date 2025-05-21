/*
TODO: Сума елементів масиву
TODO:
TODO: Напиши функцію sumArray(arr), яка приймає масив чисел і повертає їхню суму.
*/

// const sumArray = function (arr) {
//   let total = 0;

//   // for (let i = 0; i < arr.length; i++) {
//   //   total += arr[i];
//   // }

//   for (const el of arr) {
//     total += el;
//   }

//   return total;
// };

// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([10, 20, 30, 40])); // 100

/*
TODO: Пошук найбільшого елемента
TODO:
TODO: Створи функцію findMax(arr), яка знаходить найбільше число в масиві.
*/

// const findMax = function (arr) {
//   let max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// };

// console.log(findMax([4, 7, 1, 9, 2])); // 9
// console.log(findMax([4, 7, -1, -9, 2])); // 7

/*
TODO: Підрахунок кількості парних чисел
TODO:
TODO: Напиши функцію countEven(arr), яка повертає кількість парних чисел у масиві.
*/

// const countEven = function (arr) {
//   let counter = 0;

//   for (const num of arr) {
//     if (num % 2 === 0) {
//       counter++;
//     }
//   }

//   return counter;
// };

// console.log(countEven([2, 5, 6, 7, 8])); // 3

/*
TODO: Створення масиву квадратів
TODO:
TODO: Створи функцію squares(arr), яка повертає новий масив квадратів чисел.
*/

// const squares = function (arr) {
//   const newArr = [];

//   for (const num of arr) {
//     newArr.push(num ** 2);
//   }

//   return newArr;
// };

// console.log(squares([1, 2, 3])); // [1, 4, 9]

/*
TODO: Фільтрація рядків за довжиною
TODO:
TODO: Напиши функцію filterShortWords(words, maxLength), яка повертає масив слів, коротші за maxLength.
*/

// const filterShortWords = function (words, maxLength) {
//   const newArr = [];

//   for (const word of words) {
//     if (word.length < maxLength) {
//       newArr.push(word);
//     }
//   }

//   return newArr;
// };

// console.log(filterShortWords(['cat', 'elephant', 'dog'], 4)); // ['cat', 'dog']

/*
TODO: Об’єднання двох масивів без дублікатів
TODO:
TODO: Створи функцію mergeUnique(arr1, arr2), яка об’єднує два масиви та повертає новий масив без повторень.
*/

// const mergeUnique = function (arr1, arr2) {
//   const arrOfAllElements = arr1.concat(arr2);

//   const newArr = [];

//   for (const num of arrOfAllElements) {
//     if (!newArr.includes(num)) {
//       newArr.push(num);
//     }
//   }

//   return newArr;
// };

// console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]

/*
TODO: Пошук спільних елементів у двох масивах
TODO:
TODO: Реалізуй функцію commonElements(arr1, arr2), яка повертає масив спільних елементів.
*/

// const commonElements = function (arr1, arr2) {
//   const newArr = [];

//   for (const num of arr1) {
//     if (arr2.includes(num)) {
//       newArr.push(num);
//     }
//   }

//   return newArr;
// };

// console.log(commonElements([1, 2, 3], [2, 3, 4])); // [2, 3]
