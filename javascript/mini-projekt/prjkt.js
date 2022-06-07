// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
//которая имеет детальную информацию про объект на который кликнули

 // fetch(`https://jsonplaceholder.typicode.com/users`)
 //     .then(value => value.json())
 //     .then(value => {
 //         const divElement = document.createElement(`div`);
 //         divElement.setAttribute('class', 'wrap');
 //         document.body.append(divElement);
 //
 //         for (const item of value) {
 //             const innerDiv = document.createElement('div');
 //             innerDiv.setAttribute('class', 'inner');
 //             for (const itemKey in item) {
 //
 //
 //                 innerDiv.innerHTML = `<h2>Id : ${item.id}</h2>
 //                                  <h2>Name : ${item.name}</h2>`
 //                 divElement.append(innerDiv);
 //
 //                 const button = document.createElement('button');
 //                 button.innerText = 'Click';
 //                 divElement.append(button);
 //
 //                 button.onclick = () => {
 //                     fetch( `https:jsonplaceholder.typicode.com/users/${user.id}/posts`)
 //                         .then(value => value.json())
 //                         .then(value => {
 //                             for (const elementElement of element) {
 //
 //
 //                             const element = document.createElement('div');
 //                             divElement.append(element);
 //
 //                                 const div = 'div';
 //                                 const htmlDivElement = document.createElement('div');
 //                                 htmlDivElement.innerText = users.id + ' ' + users.name + ' ' + users.username + ' ' +
 //                                     users.address;
 //                                 divElement.append(htmlDivElement);
 //
 //                             }
 //
 //                         });
 //                 }
 //
 //
 //             }
 //         }
 //     })

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
        for (const post of value) {
            const divElement = document.createElement('div');
            document.body.append(divElement);
            const { id, name } = post;
            divElement.innerHTML = `<h2>id : ${id}</h2>
                                <h2>name: ${name}</h2>`;

            const button = document.createElement('button');
            button.innerText = 'Click';
            divElement.append(button);

            button.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(value => {
                        const userDetails = document.createElement('div');
                        divElement.append(userDetails);
                        for (const post of value) {
                            const userItem = document.createElement('div');
                            userItem.innerText = user;
                            userDetails.append(userItem);

                        }

                    })
            }
        }

    });


// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную
// информацию про текущий пост.

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки
// (дать задний фон + margin. Иными словами - крайне четкая сетка)