var arr = [
    {
    userName: 'Test',
    lastName: 'Test',
    email: 'test.test@gmail.com',
    },
    {
    userName: 'Dmitro',
    lastName: 'Porohov',
    email: 'dmitro.porohov@yahoo.com',
    },
    {
    userName: 'Andrii',
    lastName: '',
    email: 'andrii@mail.ru', // Нам такі не підходять
    },
    ];
    
    // регулярний вираз, який відповідає email, зареєстрованим на доменах gmail.com та yahoo.com
    // і має одне або два слова, які можуть містити латинські букви та цифри, розділені крапкою, перед @
    let regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/;
    
    // масив, який буде зберігати адреси, гідні довіри
    let trustedEmails = [];
    
    // цикл, який проходить по всіх елементах масиву arr
    for (let obj of arr) {
    // якщо email об'єкта відповідає регулярному виразу
    if (regex.test(obj.email)) {
    // додати email до масиву trustedEmails
    trustedEmails.push(obj.email);
    }
    }
    
    // Тест 1
    console.log(trustedEmails); // ["test.test@gmail.com", "dmitro.porohov@yahoo.com"]