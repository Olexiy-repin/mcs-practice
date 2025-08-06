/*
TODO: Опиши тип для об'єкта користувача.
*/

// type User = {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// };

// interface IUser {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// }

// const user: IUser = {
//   name: 'Alice',
//   age: 30,
//   isAdmin: false,
// };

/*
TODO: Типізуй масив чисел та масив рядків.
*/

// const numbers: number[] = [1, 2, 3];
// const tags: string[] = ['js', 'ts', 'node'];

// numbers.push(100);
// tags.push('100');

/*
TODO: Типізуй функцію додавання.
*/

// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(10, 20));
// console.log(add(1, 2));

/*
TODO: Функція, яка вітає користувача.
*/

// interface IUser {
//   firstName: string;
// }

// function greet(user: IUser): string {
//   return `Hello, ${user.firstName}`;
// }

// console.log(greet({ firstName: 'Oleksii' }));

/*
TODO: Створити перерахування (enum) для статусу замовлення.
TODO: Очікується: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled'.
TODO:
TODO: Створи функцію checkOrderStatus(status), яка перевіряє статус замовлення і повертає відповідне повідомлення.
TODO: Pending - 'Ваше замовлення в обробці.'
TODO: Shipped - 'Замовлення було відправлено.'
TODO: Delivered - 'Замовлення доставлено.'
TODO: Cancelled - 'Замовлення було відхилено.'
*/

// enum OrderStatus {
//   Pending,
//   Shipped,
//   Delivered,
//   Cancelled,
// }

// function checkOrderStatus(status: OrderStatus) {
//   switch (status) {
//     case OrderStatus.Pending: {
//       return 'Ваше замовлення в обробці.';
//     }

//     case OrderStatus.Shipped: {
//       return 'Замовлення було відправлено.';
//     }

//     case OrderStatus.Delivered: {
//       return 'Замовлення доставлено.';
//     }

//     case OrderStatus.Cancelled: {
//       return 'Замовлення було відхилено.';
//     }
//   }
// }

// console.log(checkOrderStatus(OrderStatus.Cancelled));

/*
TODO: Опиши тип для користувача з необов'язковим email.
*/

// interface IUser {
//   id: number;
//   firstName: string;
//   email?: string;
// }

// const userA: IUser = {
//   id: 1,
//   firstName: 'Ellen',
//   email: 'ellen@gmail.com',
// };

// const userB: IUser = {
//   id: 2,
//   firstName: 'Margaret',
// };

/*
TODO: Функція повертає або число, або повідомлення про помилку (union тип).
*/

// function parseNumber(str: string): 'Invalid number' | number {
//   const num = Number(str);

//   return Number.isNaN(num) ? 'Invalid number' : num;
// }

// console.log(parseNumber('100'));
// console.log(parseNumber('100px'));

/*
TODO: Створити тип для результату API-запиту.
*/

// interface IApiData {
//   id: number;
//   firstName: string;
//   lastName: string;
// }

// interface IApiResult {
//   data: IApiData[];
//   statusCode: number;
//   error?: string;
// }

// const resultA: IApiResult = {
//   data: [
//     {
//       id: 1,
//       firstName: 'Ricky',
//       lastName: 'Parker',
//     },
//     {
//       id: 2,
//       firstName: 'Lettie',
//       lastName: 'Fletcher',
//     },
//     {
//       id: 3,
//       firstName: 'Dylan',
//       lastName: 'Gill',
//     },
//   ],
//   statusCode: 200,
// };

// const resultB: IApiResult = {
//   data: [],
//   statusCode: 404,
//   error: 'Not Found',
// };

/*
TODO: Створи функцію getFirstElement<T>, яка приймає масив і повертає перший елемент.
*/

// function getFirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// console.log(getFirstElement([1, 2, 3]));
// console.log(getFirstElement(['a', 'b']));

/*
TODO: Створи функцію getProperty<T, K>(obj: T, key: K), яка повертає значення властивості об’єкта за ключем.
*/

// function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// console.log(getProperty({ firstName: 'Joseph' }, 'firstName'));
// console.log(getProperty({ title: 'Apple', price: 50 }, 'price'));

/*
TODO: Pick<Type, Keys>
TODO: Є тип User, створи тип UserPreview, який містить лише id і name.
*/

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// };

// type UserPreview = Pick<User, 'id' | 'name'>;

// const user: UserPreview = {
//   id: 1,
//   name: 'Jeremy',
// };

/*
TODO: Omit<Type, Keys>
TODO: Створи тип UserWithoutEmail, в якому немає поля email.
*/

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// };

// type UserWithoutEmail = Omit<User, 'email'>;

// const user: UserWithoutEmail = {
//   id: 2,
//   name: 'Lou',
//   age: 29,
// };

/*
TODO: Partial<Type>
TODO: Створи функцію updateUser, яка приймає часткові оновлення для користувача.
*/

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// };

// type UserForUpdate = Partial<User>;

// function updateUser(user: User, updates: UserForUpdate): User {
//   return {
//     ...user,
//     ...updates,
//   };
// }

// const user: User = {
//   id: 1,
//   name: 'Jordan',
//   email: 'jordan@gmail.com',
//   age: 29,
// };

// updateUser(user, { email: 'jordan1@gmail.com' });

/*
TODO: Record<Keys, Type>
TODO: Створи тип RolePermissions, який відображає список ролей користувачів і їхні права.
*/

// type Role = 'admin' | 'user' | 'guest';

// type PermissionsList = {
//   canEdit: boolean;
//   canDelete: boolean;
// };

// type RolePermissions = Record<Role, PermissionsList>;

// const roles: RolePermissions = {
//   admin: {
//     canEdit: true,
//     canDelete: true,
//   },
//   user: {
//     canEdit: true,
//     canDelete: false,
//   },
//   guest: {
//     canEdit: false,
//     canDelete: false,
//   },
// };
