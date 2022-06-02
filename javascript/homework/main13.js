// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         const divElement = document.createElement(`div`);
//         divElement.setAttribute('class', 'wrap');
//         document.body.appendChild(divElement);
//         for (const item of value) {
//             const innerDiv = document.createElement('div');
//             innerDiv.setAttribute('class', 'inner');
//             innerDiv.innerHTML = `<h2>UserID : ${item.userId}</h2>
//                 <h2>ID : ${item.Id}</h2>
//                 <h2>Title : ${item.title}</h2>
//                 <h2>Body : ${item.body}</h2>`
//             divElement.appendChild(innerDiv);
//         }
//     })



//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

// fetch(`https://jsonplaceholder.typicode.com/comments`)
//     .then(value => value.json())
//     .then(value => {
//         const divElement = document.createElement('div');
//         document.body.append(divElement);
//
//         for (const item of value) {
//             const innerDiv = document.createElement('div');
//             divElement.append(innerDiv);
//             for (const itemKey in item) {
//                 const divElement1 = document.createElement('div');
//                 divElement1.innerText = `${itemKey} ${item[itemKey]}`;
//                 divElement.append(divElement1);
//             }
//
//
//         }
//     });
































