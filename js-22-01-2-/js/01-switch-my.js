/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// Standart else....if

// const stars = 7;
// let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Mistake nubber of stars!');
// }
// console.log(price);

// Using SWITCH!!!!!!!! (switch - case - break - default)

// const stars = 22;
// let price;

// switch (stars) {
//   case 1:
//     price = 20;
//     console.log('* Hotel');
//     console.log(`You price is ${price} credits.`);
//     break;
//   case 2:
//     price = 30;
//     console.log('** Hotel');
//     console.log(`You price is ${price} credits.`);
//     break;
//   case 3:
//     price = 50;
//     console.log('*** Hotel');
//     console.log(`You price is ${price} credits.`);
//     break;
//   case 4:
//     price = 70;
//     console.log('**** Hotel');
//     console.log(`You price is ${price} credits.`);
//     break;
//   case 5:
//     price = 120;
//     console.log('***** Hotel');
//     console.log(`You price is ${price} credits.`);
//     break;

//   default:
//     console.log(
//       `Are you crazy????? Where did you see ${stars}-th stars Hotel????`,
//     );
// }
// console.log(price);

// ----------------------------------------------------------------------------
/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

const stars = 3;
let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log(
//     `Are you crazy????? Where did you see ${stars}-th stars Hotel????`,
//   );
// }
// console.log(price);

// AND NOW SWITCH!!!!!!!!! (WE CAN USE "||" also!!!!!)

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     console.log('* Hotel');
//     console.log(`You price is ${price} credits.`);
//     break;
//   case 3:
//   case 4:
//     price = 30;
//     console.log('** Hotel');
//     console.log(`You price is ${price} credits.`);
//     break;
//   case 5:
//     price = 120;
//     console.log('*** Hotel');
//     console.log(`You price is ${price} credits.`);
//     break;

//   default:
//     console.log(
//       `Are you crazy????? Where did you see ${stars}-th stars Hotel????`,
//     );
// }
// console.log(price);

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

// 1. сделать переменную
// const option = 4;
// let message = '';
// // 2. сделать switch 1, 2, 3
// // 3. в каждом case записать message
// switch (option) {
//     case 1:
//     message = 'You can take your goods in our office tomorrow at 12:00.';
//     break;
//   case 1:
//     message =
//       'The courier will deliver your package tomorrow from 9:00 to 18:00.';
//     break;
//   case 1:
//     message = 'Parcel will be send today.';
//     break;
//   default:
//     message = 'The manager will call you back.';
// }
// // 4.  сделать лог message
// console.log(message);
