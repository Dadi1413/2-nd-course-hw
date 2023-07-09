function getSeason(month) {
  if (month < 1 || month > 12) {
    return 'Неправильный параметр';
  } else if (month >= 3 && month <= 5) {
    return 'Весна';
  } else if (month >= 6 && month <= 8) {
    return 'Лето';
  } else if (month >= 9 && month <= 11) {
    return 'Осень';
  } else {
    return 'Зима';
  }
  
}


console.log(getSeason()); // Весна
console.log(getSeason(7)); // Лето
console.log(getSeason(10)); // Осень
console.log(getSeason(12)); // Зима
console.log(getSeason(13)); // Неправильный параметр
