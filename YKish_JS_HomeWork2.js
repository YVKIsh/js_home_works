var prompt = require('prompt');
  prompt.start();
  prompt.get(['age'], function (err, result) {
    const age = Number(result.age)
    if (isNaN(age) || age < 0)  {
        console.log(' Помилка: невірний формат даних'); // перевірка на числовий та невід'ємний формат 
      } else if (age % 100 >= 11 && age % 100 <= 14) {
        console.log(' Цій людині ' + age + ' років');    // виняток 11-14 років
      } else if (age % 10 === 1) {
        console.log(' Цій людині ' + age + ' рік'); // виняток 1 рік
      } else if (1 < age % 10 && age % 10 < 5) {
        console.log(' Цій людині ' + age + ' роки'); // виняток 2-4 роки  
      } else {
        console.log('Цій людині ' + age + ' років '); // звичайний варіант Х років
      }
    });