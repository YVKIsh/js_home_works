var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
  // загальна ціна
  price: function() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === 'string' && key !== 'price' && key !== 'minPrice' && key !== 'maxPrice') {
        total += parseInt(this[key]);
      }
    }
    return total + ' грн';
  },
  // мінімальна ціна
  minPrice: function() {
    let min = Infinity;
    for (let key in this) {
      if (typeof this[key] === 'string' && key !== 'price' && key !== 'minPrice' && key !== 'maxPrice') {
        let price = parseInt(this[key]);
        if (price < min) {
          min = price;
        }
      }
    }
    return min + ' грн';
  },
  // максимальна ціна
  maxPrice: function() {
    let max = -Infinity;
    for (let key in this) {
      if (typeof this[key] === 'string' && key !== 'price' && key !== 'minPrice' && key !== 'maxPrice') {
        let price = parseInt(this[key]);
        if (price > max) {
          max = price;
        }
      }
    }
    return max + ' грн';
  }
};
// Тест 1. Перевірка перед додаванням послуги
console.log("Загальна вартість наданих послуг: " + services.price());
console.log("Мінімальна вартість послуг: " + services.minPrice());
console.log("Максимальна вартість послуг: " + services.maxPrice());
// Додаємо послугу
services['Розбити скло'] = "200 грн";
// Тест 2. Перевірка після додавання послуги
console.log("Загальна вартість наданих послуг: " + services.price());
console.log("Мінімальна вартість послуг: " + services.minPrice());
console.log("Максимальна вартість послуг: " + services.maxPrice());

