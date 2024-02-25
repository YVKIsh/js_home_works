const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
      {
          name: 'Клієнт 1',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
              {
                  name: 'Клієнт 1.1',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
              },
              {
                  name: 'Клієнт 1.2',
                  type: 'subSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
                  partners: [
                      {
                          name: 'Клієнт 1.2.3',
                          type: 'subSubCompany',
                          uses: 'Рішення для продажу квитків',
                          sells: 'Рішення для продажу квитків',
                      }
                  ]
              }
          ]
      },
      {
          name: 'Клієнт 2',
          type: 'subCompany',
          uses: 'ПО для продажу квитків',
          sells: 'Рішення для продажу квитків'
      }
  ]
};

function findValueByKey(companyName) {
  // змінна, яка зберігає об'єкт з інформацією про subCompany, або null, якщо такої subCompany не знайдено
  let result = null;
  // внутрішня функція, яка приймає об'єкт company та рекурсивно перевіряє його властивості на співпадіння з companyName
  function search(company) {
  // якщо властивість name об'єкта company співпадає з companyName
  if (company.name === companyName) {
  // присвоїти result цей об'єкт
  result = company;
  // повернути true, щоб зупинити пошук
  return true;
  }
  // якщо властивість clients або partners об'єкта company є масивом
  if (Array.isArray(company.clients) || Array.isArray(company.partners)) {
  // перебрати масив 
  for (let subCompany of company.clients || company.partners) {
  // шукаємо по елементам масиву
  if (search(subCompany)) {
  // якщо функція search повертає true, то зупиняємо пошук
  return true;
  }
  }
  }
  // якщо нічого не знайдено, то повернути false
  return false;
  }
  // викликати функцію search для об'єкта company, який передається в функцію findValueByKey
  search(company);
  // повернути змінну result
  return result;
  }
  // Тест 1. subCompany є у списку
console.log(findValueByKey('Клієнт 1.2.3')); // об'єкт з інформацією про subCompany
  // Тест 2. subCompany нема у списку
console.log(findValueByKey('Клієнт 3')); // null