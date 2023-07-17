/* Задание 1
let answerUser = prompt('Напиши JS');
answerUser = answerUser.toUpperCase();
alert(answerUser);
*/

/* Задание 2
function searchStart(str, search) {

    str.forEach((product) => {
        if (product.toLowerCase().startsWith(search.toLowerCase())) {
            console.log(product);
        }
    });
    return str;
};


searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); // ['кошка', 'комар']
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); // ['груша']
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); // []
/*

/* Задание 3
let x = 32.58884;
let x1 = Math.floor(x);
let x2 = Math.ceil(x);
let x3 = Math.round(x);
console.log(x1);
console.log(x2);
console.log(x3);
*/

/* Задание 4
const numbers = [52, 53, 49, 77, 21, 32.];
const minValue = Math.min.apply(null, numbers);
console.log(minValue);
const maxValue = Math.max.apply(null, numbers);
console.log(maxValue);
*/

/* Задание 5
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log(getRndInteger(1, 10));
*/

/* Задание 6
function getRandomArrNumbers(numb) {
    let array = [];
    let halfArray = Math.floor(numb / 2);
    for (let i = 0; i < halfArray; i++) {
        array.push(Math.ceil(Math.random(numb)));
    }
    return array
}
*/

/* Задание 7
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
*/

/* Задание 8
let nowDate = new Date ();
console.log(nowDate);
*/

/* Задание 9
let currentDate = new Date ();
setDate(getDate(73))
*/


/* Задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); // получаем текущую дату
let fullDate = "Сегодня: " + myDate.getDate() +
" " + months[myDate.getMonth()] + 
" " + myDate.getFullYear() + 
", " + days[myDate.getDay()];
let hour = myDate.getHours(); //  час 
let minute = myDate.getMinutes(); // минуты
let second = myDate.getSeconds(); // секунды

console.log(fullDate);
console.log("Текущее время: " + hour + ":" + minute + ":" + second);
*/

/* Задание 11
let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
let shuffledWords = words.sort(() => Math.random() - 0.5);

alert("Перемешанный массив: " + shuffledWords);

const firstWord = prompt("Чему равнялся первый элемент массива?");
const lastWord = prompt("Чему равнялся последний элемент массива?");

if (firstWord === shuffledWords[0] && lastWord === shuffledWords[shuffledWords.length - 1]) {
  alert("Поздравляем, вы угадали оба слова!");
} else if (firstWord === shuffledWords[0] || lastWord === shuffledWords[shuffledWords.length - 1]) {
  alert("Вы были близки к победе!");
} else {
  alert("Вы ответили неверно");
}
*/