//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//function square(a, b) {
//    let result = (a * b);
//    return result;
//}
//let ansver = square(10, 20);
//console.log(ansver);

//- створити функцію яка обчислює та повертає площу кола з радіусом r

//function square(r, p) {
//    let result = (2 * p * r);
//    return result;
//}
//let ansver = square(5, 3.14);
//console.log(ansver);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

//function square(r, h, p) {
//    let result = (2 * p * r * h);
//    return result;
//}
//let ansver = square(5, 10, 3.14);
//console.log(ansver);

//- створити функцію яка приймає масив та виводить кожен його елемент

//function iter(arr) {
//    for (const item of arr) {
//        console.log(item);
//    }
//}
//let animals = [
//    {name: 'vasia', type: 'cat', age: 1.5},
//    {name: 'bobik', type: 'dog', age: 3},
//    {name: 'tusik', type: 'dog', age: 8},
//    {name: 'murka', type: 'cat', age: 3},
//];
//iter(animals);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

//function par(text) {
//    document.write(`<p>${text}</p>`); }
//par('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores aspernatur at consequatur deleniti dicta.');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//function ulCreator(text)
//{
//    document.write(`<ul>
//        <li>${text}</li>
//        <li>${text}</li>
//        <li>${text}</li>
//</ul>`)
//}
//ulCreator('Hello')

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//function inf(text, num) {
//    document.write(`<ul>`)
//    for (let i = 0; i < num; i++) {
//        document.write(`<li>${text}</li>`)
//    }
//    document.write(`</ul>`)
//}
//inf('Hello', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//let array = [1, 2, 5, 'Hello', true];
//function inf(arr) {
//    document.write(`<ul>`)
//    for (const item of arr) {
//        document.write(`<li>${item}</li>`)
//    }
//    document.write(`</ul>`)
//}
//inf(array);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//let array = [ {
//    id: 1,
//    name: 'Vasia',
//    age: 28
//}, {
//    id: 2,
//    name: 'Olya',
//    age: 27
//}
//]
//function masive(array) {
//    for (const item of array) {
//        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
//    }
//}
//masive(array)

//- створити функцію яка повертає найменьше число з масиву

//let array = [1, 8, 3, 0, 6,-2, 4, -8];
//function min(array) {
//    let min = array[0];
//    for (const item of array) {
//        if (item < min) {
//            min = item
//        }
//    }
//    return min;
//}
//console.log(min(array));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//let array = [1, 2, 10];
//function xxx(array) {
//    let sum = 0;
//    for (const item of array) {
//        sum += item;
//    }
//    return sum;
//}
//console.log(xxx(array));