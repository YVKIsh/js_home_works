var prompt = require('prompt');
  prompt.start();
  prompt.get(['meas_unit', 'numb'], function (err, result) {
    const numb = Number(result.numb)
    const meas_unit = (result.meas_unit)
    switch (meas_unit) {
      case 'км':
        console.log(numb + ' км це ' + 1000*numb + ' м.');
        break;
      case 'година':
        console.log(numb + ' год. це ' + 60*numb + ' хв.');
        break;
      case 'кг':
        console.log(numb + ' кг це ' + 1000*numb + ' г.');
        break;  
      default:
        console.log('Помилка! Невірний формат даних');
    } 
    });