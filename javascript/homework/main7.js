//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

//let inf = 'hello world';
//let inf2 = 'lorem ipsum';
//let inf3 = 'javascript is cool';
//console.log(inf.length);
//console.log(inf2.length);
//console.log(inf3.length);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'

//let inf = 'hello world';
//let inf2 = 'lorem ipsum';
//let inf3 = 'javascript is cool';
//console.log(inf.toUpperCase());
//console.log(inf2.toUpperCase());
//console.log(inf3.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

//let inf = 'HELLO WORLD';
//let inf2 = 'LOREM IPSUM';
//let inf3 = 'JAVASCRIPT IS COOL';
//console.log(inf.toLowerCase());
//console.log(inf2.toLowerCase());
//console.log(inf3.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробіл

//let str = ' dirty string   ';
//console.log(str.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

//let str = 'Ревуть воли як ясла повні';
//let stringToarray = (str) => str.split(' ');
//console.log(stringToarray(str));

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//let nums = [10,8,-7,55,987,-1011,0,1050,0];

//let nums = [10,8,-7,55,987,-1011,0,1050,0];
//console.log(nums.map(value => value.toString()));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]

//let nums = [11,21,3];
//let sortNums = (arr, direction) => {
//    if (direction === 'ascending') {
//        arr.sort((a, b) => a - b)
//    }
//    else if (direction === 'descending') {
//        arr.sort((a, b) => b - a)
//    }
//    return arr;
//}
//console.log(sortNums(nums, 'ascending'));
//console.log(sortNums(nums, 'descending'));

//- є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//let sort = (array) => array.sort((a,b) => b.monthDuration - a.monthDuration);
//console.log(sort(coursesAndDurationArray));
//let filter = (array) => array.filter(value => value.monthDuration > 5);
//console.log(filter(coursesAndDurationArray));


//описати колоду карт
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше


//{
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}

let cardArr = [
    {cardSuit: 'spade',
         value: '6',
         color: 'black'},
    {cardSuit: 'spade',
        value: '7',
        color: 'black'},
    {cardSuit: 'spade',
        value: '8',
        color: 'black'},
    {cardSuit: 'spade',
        value: '9',
        color: 'black'},
    {cardSuit: 'spade',
        value: '10',
        color: 'black'},
    {cardSuit: 'spade',
        value: 'jack',
        color: 'black'},
    {cardSuit: 'spade',
        value: 'queen',
        color: 'black'},
    {cardSuit: 'spade',
        value: 'king',
        color: 'black'},
    {cardSuit: 'spade',
        value: 'ace',
        color: 'black'},
    {cardSuit: 'diamond',
        value: '6',
        color: 'red'},
    {cardSuit: 'diamond',
        value: '7',
        color: 'red'},
    {cardSuit: 'diamond',
        value: '8',
        color: 'red'},
    {cardSuit: 'diamond',
        value: '9',
        color: 'red'},
    {cardSuit: 'diamond',
        value: '10',
        color: 'red'},
    {cardSuit: 'diamond',
        value: 'jack',
        color: 'red'},
    {cardSuit: 'diamond',
        value: 'queen',
        color: 'red'},
    {cardSuit: 'diamond',
        value: 'king',
        color: 'red'},
    {cardSuit: 'diamond',
        value: 'ace',
        color: 'red'},
    {cardSuit: 'heart',
        value: '6',
        color: 'red'},
    {cardSuit: 'heart',
        value: '7',
        color: 'red'},
    {cardSuit: 'heart',
        value: '8',
        color: 'red'},
    {cardSuit: 'heart',
        value: '9',
        color: 'red'},
    {cardSuit: 'heart',
        value: '10',
        color: 'red'},
    {cardSuit: 'heart',
        value: 'jack',
        color: 'red'},
    {cardSuit: 'heart',
        value: 'queen',
        color: 'red'},
    {cardSuit: 'heart',
        value: 'king',
        color: 'red'},
    {cardSuit: 'heart',
        value: 'ace',
        color: 'red'},
    {cardSuit: 'clubs',
        value: '6',
        color: 'black'},
    {cardSuit: 'clubs',
        value: '7',
        color: 'black'},
    {cardSuit: 'clubs',
        value: '8',
        color: 'black'},
    {cardSuit: 'clubs',
        value: '9',
        color: 'black'},
    {cardSuit: 'clubs',
        value: '10',
        color: 'black'},
    {cardSuit: 'clubs',
        value: 'jack',
        color: 'black'},
    {cardSuit: 'clubs',
        value: 'queen',
        color: 'black'},
    {cardSuit: 'clubs',
        value: 'king',
        color: 'black'},
    {cardSuit: 'clubs',
        value: 'ace',
        color: 'black'},
    {cardSuit: 'nosuit',
        value: 'joker',
        color: 'black'},
    {cardSuit: 'nosuit',
        value: 'joker',
        color: 'red'},
]

console.log(cardArr.find(value => value.cardSuit === 'clubs' && value.value === 'ace'));
console.log(cardArr.filter(value => value.value === '6'));
console.log(cardArr.filter(value => value.color === 'red'));
console.log(cardArr.filter(value => value.cardSuit === 'spade' && value.value > '8' || value.cardSuit === 'spade' && value.value ==='10'));