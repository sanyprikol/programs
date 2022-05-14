//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!

//    - Напишіть код,  котрий :
//-- отримує текст з параграфа з id "content"

//let elementById = document.getElementById('content');
//let text = elementById.innerText;
//console.log(text);

//console.log(document.getElementById('content').innerText);

//-- отримує текст з блоку з id "rules"

//let elementById = document.getElementById('rules');
//let text = elementById.innerText;
//console.log(text);

//console.log(document.getElementById('rules').innerText);


//-- замініть текст параграфа з id 'content' на будь-який інший

//let elementById = document.getElementById('content');
//elementById.innerText = 'Hello';
//elementById.textContent = 'Hi';

//-- замініть текст параграфа з id 'rules' на будь-який інший

//let elementById = document.getElementById('rules');
//elementById.innerHTML = '<p>Hello World</p>';
//elementById.textContent = 'Hello';

//-- змініть кожному елементу колір фону на червоний

//let children = document.body.children;
//for (let child of children) {
//    child.style.background = 'red';
//}

//-- змініть кожному елементу колір тексту на синій

//let children = document.body.children;
//for (let child of children) {
//    child.style.color = 'blue';
//}

//const elementNodeListOf = document.querySelectorAll('*');
//for (const elementNodeListOfElement of elementNodeListOf) {
//    elementNodeListOfElement.style.color = 'blue'
//}

//-- отримати весь список класів елемента з id=rules і вивести їх в console.log

//console.log(document.getElementById('rules').classList);

//-- поміняти колір тексту у всіх елементів fc_rules на червоний

//let elementByClass = document.getElementsByClassName('fc_rules');
//for (let elementByClass1 of elementByClass) {
//    elementByClass1.style.color = 'red';
//}

//Взяти файл template_2.html та працювати в ньому
//1) Напишіть код, який :
//a) додає клас з назвою групи, елементу з ід main_header

//let elementById = document.getElementById('main_header');
//elementById.className = 'hello';

//b) робить шириниу елементу ul 400px

// let elementsByTagName = document.getElementsByTagName('ul');
// for (let elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.width = '400px';
// }

//c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassName = document.getElementsByClassName('linkList');
// for (let elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.width = '50%';
// }

//d) отримує текст який зберігається в елементі з класом listElement2

// let elementsByClassName = document.getElementsByClassName('listElement2');
// for (let elementsByClassNameElement of elementsByClassName) {
//     console.log(elementsByClassNameElement.innerText);
// }

//e) отримує всі елементи li та змінює ім колір фону на сірий

// let elementsByTagName = document.getElementsByTagName('li');
// for (let elementsByTagNameElement of elementsByTagName) {
//     elementsByTagNameElement.style.background = 'gray';
// }

//f) отримує всі елементи 'a' та додає їм клас anchor

// let elementByTagName = document.getElementsByTagName('a');
// for (let elementByTagNameElement of elementByTagName) {
//     elementByTagNameElement.className = 'anchor';
// }

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let elementByTagName = document.getElementsByTagName('a');
// for (let elementByTagNameElement of elementByTagName) {
//     if (elementByTagNameElement.innerText === 'link3') {
//         elementByTagNameElement.style.fontSize = '40px'
//     }
// }

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let elementByTagName = document.getElementsByTagName('a');
// for (let elementByTagNameElement of elementByTagName) {
//     elementByTagNameElement.classList.add(`element_${elementByTagNameElement.innerText}`);
// }

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let bg = prompt('enter color');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (let elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.background = bg;
// }

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let color = prompt('Enter color');
// let elementByClassName = document.getElementsByClassName('sub-header');
// for (let elementByClassNameElement of elementByClassName) {
//     if (elementByClassNameElement.innerText === 'content 2 segment') {
//         elementByClassNameElement.style.color = color;
//     }
// }

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let text = prompt('Enter text');
// let elementByClassName = document.getElementsByClassName('content_1');
// for (let elementByClassNameElement of elementByClassName) {
//     elementByClassNameElement.innerText = text;
// }

//l) отримати елементи p та змінити їм padding на 20px

// let elementByTagName = document.getElementsByTagName('p');
// for (let elementByTagNameElement of elementByTagName) {
//     elementByTagNameElement.style.padding = '20px';
// }

//m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let elementByClassName = document.getElementsByClassName('text2');
// for (let elementByClassNameElement of elementByClassName) {
//     elementByClassNameElement.innerText = 'march-2022';
// }

