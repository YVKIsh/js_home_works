function pad(str, char, length, isStart) {
  if (typeof str !== 'string' || typeof char !== 'string') {
    throw new TypeError('Перші два аргументи мають бути рядками');
  }

  if (typeof length !== 'number' || length < 0 || length === Infinity) {
    throw new TypeError('Третій аргумент має бути додатнім числом');
  }

  if (typeof isStart !== 'boolean') {
    throw new TypeError('Четвертий аргумент має бути булевим значенням');
  }

  if (length <= str.length) {
    return str;
  }

  const padLength = length - str.length;
  const padStr = char.repeat(padLength);

  if (isStart) {
    return padStr + str;
  } else {
    return str + padStr;
  }
}

// Перевірки:
console.log(pad('qwerty', '+', 10, true)); // "+++++qwerty"
console.log(pad('qwerty', '+', 10, false)); // "qwerty+++++"
console.log(pad("qwerty", "+", 5, true)); // "qwerty"
console.log(pad("qwerty", "+", 5, false)); // "qwerty"