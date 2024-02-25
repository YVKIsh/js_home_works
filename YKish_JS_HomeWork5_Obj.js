let book = {
  title: "The Wisdom of Crowds",
  author: "Joe Abercrombie",
  year: 2021,
  genre: ["Black fantasy"],
  // метод, який виводить всі властивості об'єкта
  getInfo: function() {
  // цикл, який перебирає всі ключі об'єкта
  for (let key in this) {
  // перевіряємо, чи ключ не є методом
  if (typeof this[key] !== "function") {
  // виводимо пару ключ: значення в консоль
  console.log(key + ": " + this[key]);
  }
  }
  }
  };
  
  // Тест 1. Вивід методу
  book.getInfo();
  // вивід:
  // title: The Wisdom of Crowds
  // author: Joe Abercrombie
  // year: 2021
  // genre: Black fantasy
  
  // додаємо нову властивість до об'єкта
  book.rating = 4.8;
  
  //Тест 2. Вивід методу після додавання властивості
  book.getInfo();
  // вивід:
  // title: The Wisdom of Crowds
  // author: Douglas Adams
  // year: 2021
  // genre: Black fantasy
  // rating: 4.8