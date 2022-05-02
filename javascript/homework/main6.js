//Все стірлочними!!!!!!!!!
//    - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//let array = [1, 5, 8, 2];
//let fn = (arr) => {
//    let sum = 0;
//    for (let arrElement of arr) {
//        sum += arrElement
//    }
//    return sum / arr.length;
//}
//console.log(fn(array));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

//let fn = (...arg) => {
//    let min = arg[0];
//    let max = arg[0];
//    for (let argElement of arg) {
//        if (argElement < min) {
//            min = argElement
//        }
//        if (argElement > max) {
//            max = argElement
//        }
//    }
//    console.log(max);
//    return min;
//}
//console.log(fn(3,6,4,9,7));

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//let random = () => {
//    let arr = [];
//    for (let i = 0; i < 10; i++) {
//        arr[i] = (Math.round(Math.random() * 100));
//    }
//    return arr;
//}
//console.log(random());

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

//let random = (limit) => {
//    let arr = [];
//    for (let i = 0; i < limit; i++) {
//        arr[i] = (Math.round(Math.random() * 100));
//    }
//    return arr;
//}
//console.log(random(5));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

//let arr = [2, 8, 4];
//let rev = (array) => {
//    let newArr =[];
//    for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
//        newArr[j] = array[i];
//    }
//    return newArr;
//}
//console.log(rev(arr));

//    Переробити на стрілочні функції з попереднього дз
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

//let calc = (a, b) => a * b;
//console.log(calc(10, 20));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

//let calc = (p, r) => p * Math.pow(r, 2);
//console.log(calc(3.14, 5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

//let calc = (r, h, p) => 2 * r * h * p;
//console.log(calc(5, 10, 3.14));

//- створити функцію яка приймає масив та виводить кожен його елемент

//let arr = [1, 4, 5, 9];
//let foo = (array) => {
//    for (let arrayElement of array) {
//        console.log(arrayElement);
//    }
//}
//foo(arr);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

//let text = (inf) => document.write(`<p>${inf}</p>`);
//text('Hello');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//let text = (inf) => document.write(`<ul><li>${inf}</li><li>${inf}</li><li>${inf}</li></ul>`);
//text('Hello');

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//let text = (inf, num) => {
//    document.write(`<ul>`)
//    for (let i = 0; i < num; i++) {
//        document.write(`<li>${inf}</li>`)
//    }
//    document.write(`</ul>`)
//}
//text('Hello', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

//let arr = [1, false, 'Hello', 9];
//let text = (array) => {
//    document.write(`<ul>`)
//    for (let i = 0; i < array.length; i++) {
//        document.write(`<li>${array[i]}</li>`)
//    }
//    document.write(`</ul>`)
//}
//text(arr);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//let arr= [
//    {
//        id : 1,
//        name : "Olya",
//        age : 27
//    },
//    {
//        id : 2,
//        name: "Igor",
//        age: 30
//    }
//];
//let text = (inf) => {
//    for (let item of inf) {
//        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
//    }
//}
//text(arr);

//- створити функцію яка повертає найменьше число з масиву

//let arr = [6, 5, 7, 3, 9, 4];
//let min = (arr) => {
//    let min = arr[0];
//    for (let minElement of arr) {
//        if (minElement < min) {
//            min = minElement;
//        }
//    }
//    return min;
//}
//console.log(min(arr));

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

//let array = [1, 2, 10];
//let sum = (arr) => {
//    let sum = 0;
//    for (let arrElement of arr) {
//        sum += arrElement;
//    }
//    return sum;
//}
//console.log(sum(array));

//-створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

//let arr = [
//    {
//        age: 25
//    },
//    {
//        age: 35
//    }
//];
//let change = (array) => {
//    let temp = array[0];
//    array[0] = array[1];
//    array[1] = temp;
//    return array;
//}
//console.log(change(arr));




