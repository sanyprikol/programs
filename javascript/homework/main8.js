//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)

//function User(id, name, surname, email, phone) {
//    this.id = id;
//    this.name = name;
//    this.surname = surname;
//    this.email = email;
//    this.phone = phone
//}
//let array = [];
//let user1 = new User(4, 'Slavik', 'Pupkin', 'sp@gmail.com', '0673382985');
//let user2 = new User(9, 'Taras', 'Shevchemko', 'ts@gmail.com', '0976558526',);
//let user3 = new User(1, 'Kolya', 'Gluhii', 'kg@gmail.com', '0635687249',);
//let user4 = new User(7, 'Olya', 'Ivanova', 'oi@gmail.com', '0685593176',);
//let user5 = new User(2, 'Grisha', 'Bulkin', 'gb@gmail.com', '0939978256',);
//let user6 = new User(10, 'Vasya', 'Kalina', 'vk@gmail.com', '0975698893',);
//let user7 = new User(3, 'Vita', 'Ivanuk', 'vi@gmail.com', '0960025973',);
//let user8 = new User(8, 'Dina', 'Kaplun', 'dk@gmail.com', '0983578964',);
//let user9 = new User(6, 'Orest', 'Lutii', 'ol@gmail.com', '0632589314',);
//let user10 = new User(5, 'Tanya', 'Mulik', 'tm@gmail.com', '0678931450',);
//array = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
//let users = array.filter(value => value.id % 2 === 0);
//console.log(users);
//let users1 = array.sort((a,b) => a.id - b.id);
//console.log(users1);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//class User {
//    constructor(id, name, surname, email, phone, order) {
//        this.id = id;
//        this.name = name;
//        this.surname = surname;
//        this.email = email;
//        this.phone = phone;
//        this.order = order
//    }
//}
//let arrey = [];
//let user1 = new User(4, 'Slavik', 'Pupkin', 'sp@gmail.com', '0673382985', ['meat']);
//let user2 = new User(9, 'Taras', 'Shevchemko', 'ts@gmail.com', '0976558526', ['meat', 'bread']);
//let user3 = new User(1, 'Kolya', 'Gluhii', 'kg@gmail.com', '0635687249', ['meat', 'milk', 'beer']);
//let user4 = new User(7, 'Olya', 'Ivanova', 'oi@gmail.com', '0685593176', ['meat']);
//let user5 = new User(2, 'Grisha', 'Bulkin', 'gb@gmail.com', '0939978256', ['meat', 'orange', 'lime', 'oil']);
//let user6 = new User(10, 'Vasya', 'Kalina', 'vk@gmail.com', '0975698893', ['bread', 'milk', 'apple']);
//let user7 = new User(3, 'Vita', 'Ivanuk', 'vi@gmail.com', '0960025973', ['tomato', 'beef']);
//let user8 = new User(8, 'Dina', 'Kaplun', 'dk@gmail.com', '0983578964', ['orange', 'bread', 'potato']);
//let user9 = new User(6, 'Orest', 'Lutii', 'ol@gmail.com', '0632589314', ['milk']);
//let user10 = new User(5, 'Tanya', 'Mulik', 'tm@gmail.com', '0678931450', ['meat', 'beer']);
//arrey = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
//let users = arrey.sort((a, b) => a.order.length - b.order.length);
//console.log(users);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//function Car(model, produser, year, maxspeed, vmotor) {
//    this.model = model;
//    this.produser = produser;
//    this.year = year;
//    this.maxspeed = maxspeed;
//    this.vmotor = vmotor
//    this.drive = function () {
//        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//    };
//    this.info = function () {
//        for (const item in this) {
//            console.log(`${item} - ${this[item]}`);
//        }
//    };
//    this.increaseMaxSpeed = function (newSpeed) {
//        this.maxspeed += newSpeed;
//    };
//    this.changeYear = function (newYear) {
//        this.year = newYear;
//    };
//    this.driver = function (driver) {
//        this.driver = driver;
//    }
//}
//let newCar = new Car('Audi', 'Germani', 2018, 260, 6);
//newCar.drive();
//newCar.info();
//console.log(newCar.increaseMaxSpeed(40));
//console.log(newCar);
//newCar.changeYear(2019);
//newCar.driver('Tolik');


//- (Те саме, тільки через клас)
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//class Car {
//    constructor (model, produser, year, maxspeed, vmotor) {
//        this.model = model;
//        this.produser = produser;
//        this.year = year;
//        this.maxspeed = maxspeed;
//        this.vmotor = vmotor;
//    }
//        drive () {
//            console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
//        };
//        info () {
//            for (const item in this) {
//                console.log(`${item} - ${this[item]}`);
//            }
//        };
//        increaseMaxSpeed (newSpeed) {
//            this.maxspeed += newSpeed;
//            return newSpeed;
//        };
//        changeYear (newYear) {
//            this.year = newYear;
//        };
//        driver (driver) {
//            this.driver = driver;
//        }
//    }

//let newCar = new Car('Audi', 'Germani', 2018, 260, 6);
//newCar.drive();
//newCar.info();
//console.log(newCar.increaseMaxSpeed(40));
//console.log(newCar);
//newCar.changeYear(2019);
//newCar.driver('Tolik');

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

//function cinderella(name, age, footsize) {
//    this.name = name;
//    this.age = age;
//    this.footsize = footsize;
//}
//let arrcinderella = [
//    new cinderella('Masha', 27, 35),
//    new cinderella('Olya', 23, 36),
//    new cinderella('Ira', 33, 38),
//    new cinderella('Lena', 28, 39),
//    new cinderella('Nina', 21, 37),
//    new cinderella('Sveta', 40, 39),
//    new cinderella('Julia', 17, 32),
//    new cinderella('Oksana', 36, 41),
//    new cinderella('Katya', 22, 35),
//    new cinderella('Arina', 19, 37)
//];
//function prince(name, age, findsize) {
//    this.name = name;
//    this.age = age;
//    this.findsize =findsize;
//}
//let newprince = new prince('Anton', 29, 36);

//let find = (arrcind, prince) => {
//    for (const item of arrcind) {
//        if(item.footsize === prince.findsize){
//            return `${item.name} ${item.age} ${item.footsize}`;
//        }
//    }
//}
//console.log(find(arrcinderella, newprince));
//let cind = arrcinderella.find(value => value.footsize === newprince.findsize);
//console.log(cind);













