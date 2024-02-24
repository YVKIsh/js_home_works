function myIsNaN(value) {
    // 1. аргумент не є числом
    // 2. typeof NaN === 'number'
    return typeof value === 'number' && value !== value;
  }
  
  // Перевірки:
  console.log(myIsNaN(2801)); // поверне false
  console.log(myIsNaN('qwerty')); //  поверне false
  console.log(myIsNaN(NaN)); // поверне true
  console.log(myIsNaN(undefined)); // поверне false
  console.log(myIsNaN(null)); // поверне false