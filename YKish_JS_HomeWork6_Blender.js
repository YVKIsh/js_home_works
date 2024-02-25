function myBlend(arr) {
  // цикл, який проходить по всіх елементах масиву
  for (let i = 0; i < arr.length; i++) {
  // змінна, яка зберігає випадковий індекс в межах довжини масиву
  let randomIndex = Math.floor(Math.random() * arr.length);
  // змінна, яка зберігає поточний елемент масиву
  let currentElement = arr[i];
  // обмінюємо місцями поточний елемент масиву з елементом, який має випадковий індекс
  arr[i] = arr[randomIndex];
  arr[randomIndex] = currentElement;
  }
  // повертаємо перемішаний масив
  return arr;
  }
  
  // Тест 
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(myBlend(arr));
  