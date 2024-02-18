/* Задание 1
let answerUser = prompt('Напиши JS');
answerUser = answerUser.toUpperCase();
alert(answerUser);
*/

/* Задание 2
function searchStart(words, prefix) {
return words.filter(word => word.toLowerCase().startsWith(prefix.toLowerCase()));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); 
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
function getRandomArrNumbers(number) {
    let length = Math.floor(number / 2); 
    let arr = [];
  
    for (let i = 0; i < length; i++) {
      let randomNum = Math.floor(Math.random() * (number + 1)); 
      arr.push(randomNum); 
    }
  
    return arr;
}
  
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));
*/

/* Задание 7
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(2, 5));
*/

/* Задание 8
let nowDate = new Date ();
console.log(nowDate);
*/

/* Задание 9
let currentDate = new Date();
let futureDate = new Date(); 
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate.toDateString()); 
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