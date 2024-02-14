console.log('number' + 3 + 3)
// string + 2 numbers, which will transformed to string. Result (string): number33 

console.log(null + 3)
// nothing or empty + number, so only number will remain. Result (number): 3 

console.log(5 && "qwerty")
// number, logical operator and string, so only string will remain. Result (string): qwerty 

console.log(+'40' + +'2' + "hillel")
// 40 +2 = 42 will be added to string. Result (string): 42hillel

console.log('10' - 5 === 6)
// different data types. Result (boolean): false

console.log(true + false)
// 1 + 0 Result(number): 1

console.log('4px' - 3)
// '4px' can't be transformed to the number so it will be recognizes as NaN. NaN - number. Result (number): NaN

console.log('4' - 3)
// '4' will be transformed to 4. 4 - 1. Result (number):1

console.log('6' + 3 ** 0)
// '6' is a string, 3**0 = 1. Then 1 is added to string. Result (string): 61

console.log(12 / '6')
// '6' will be transformed to the number, since 12 is a number. 12 / 6. Result (number): 2

console.log('10' + (5 === 6))
// '10' is a string. 5===6 is false. Result (string): 10false

console.log(null == '')
// null is not equal empty string. Result (boolean): false

console.log(3 ** (9 / 3))
// 3**3. Result (number): 27

console.log(!!'false' == !!'true')
// true == true. Result (boolean): true

console.log(0 || '0' && 1)
// '0' && 1 is 1, 0 || 1 is 1. Result (number): 1

console.log((+null == false) < 1)
// +null is 0. 0 == false is true and it will be tranformed to 1. 1 < 1 is false. Result (boolean): false

console.log(false && true || true)
// false && true is false, false || true is true. Result (boolean): true

console.log(false && (false || true))
// false || true is true, false && true is false.  Result (boolean): false

console.log((+null == false) < 1 ** 5)
//  +null is 0. 0 == false is true. true is 1. 1**5 is 1. 1 < 1 is false. Result (boolean): false