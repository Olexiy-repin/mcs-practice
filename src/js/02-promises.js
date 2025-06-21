/*
TODO: Створи функцію delayedPromise(delay), яка повертає проміс.
TODO: Проміс має виконуватись через delay мілісекунд.
TODO: Якщо проміс завершився успішно, то результатом роботи проміса буде рядок `Fulfilled promise in ${delay}ms`.
TODO: Якщо проміс було відхилено, то результатом роботи проміса буде рядок `Rejected promise in ${delay}ms`.
*/

const { default: iziToast } = require('izitoast');

// const delayedPromise = delay => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = Math.random() > 0.5;

//       if (isSuccess) {
//         resolve(`Fulfilled promise in ${delay}ms`);
//       } else {
//         reject(`Rejected promise in ${delay}ms`);
//       }
//     }, delay);
//   });

//   return promise;
// };

// delayedPromise(1000)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

/*
TODO: Є функція startValue(), яка повертає проміс із числом 5. Створи ланцюжок .then(), який:
TODO:   - додасть до числа 3;
TODO:   - помножить результат на 2;
TODO:   - перетворить у рядок виду "Result: 16"
*/

// const startValue = () => {
//   return Promise.resolve(5);
// };

// startValue()
//   .then(result => {
//     return result + 3;
//   })
//   .then(result => {
//     return result * 2;
//   })
//   .then(result => {
//     console.log(`Result: ${result}`);
//   });

/*
TODO: Створи три проміси:
TODO:   - перший виконується через 2 сек із рядком "A";
TODO:   - другий через 1 сек з "B";
TODO:   - третій через 3 сек з "C".

TODO: Використай Promise.all, щоб отримати масив результатів після завершення всіх трьох.
TODO: Використай Promise.race, щоб отримати результат найшвидшого.
*/

// const promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('A');
//   }, 2000);
// });

// const promiseB = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('B');
//   }, 1000);
// });

// const promiseC = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('C');
//   }, 3000);
// });

// Promise.all([promiseA, promiseB, promiseC])
//   .then(results => {
//     console.log(results);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Promise.race([promiseA, promiseB, promiseC])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });
