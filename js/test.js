'use strict';

// Спрощення console.log();
function log (element) {
    return console.log(element);
}



//Створив подію, яку обробник буде створювати до тих пір, поки вона не дорівнює 3
/*
let i = 0;
const clickOnFilm = document.querySelector('.promo__mnu-item');

const delEl = (e) => {
    console.log(e.target);
    i++;
    if(i == 3){
        clickOnFilm.removeEventListener('click', delEl);
    }
};
clickOnFilm.addEventListener('click', delEl);
*/



//Створив подію, яка відмінює стандартну поведінку браузера. 
//Таким чином можна замість переходу по посиланню зробити щось, що мені потрібно
/*
const clickOnFilm = document.querySelector('.promo__mnu-item');

clickOnFilm.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Бро !');
});
*/



//Розкрешення всіх елементів псевдомасиву
/*
const clickOnFilm = document.querySelectorAll('.promo__mnu-item');

const paintEl = (e) => {
    e.target.style.color = 'green';
};

clickOnFilm.forEach(item => {
item.addEventListener('click', paintEl);
});
*/



//Ставлю умову, якщо дитина( звертання за іменем до неї ) - текстова нода, пропускаємо ітерацію.
/*
for(let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }

    log(node);
}
*/



//Задача на створення змінної із загальним відсотком та студентами, які при діленні дадуть нам середній відсоток. 
//ІТЕРАТИВНА ФУНКЦІЯ
/*
let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
                name: 'Peter',
                progress: 20
            }, {
                name: 'Ann',
                progress: 18
            }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    },
    ts: {
        basic: [{
            name: 'Pit',
            progress: 30
        }, {
            name: 'Joe',
            progress: 10
        }],
        pro: [{
            name: 'Perez',
            progress: 15
        }, {
            name: 'Jack',
            progress: 16
        }]
    }
};

function getTotalProcentByIteration(data){
 let total = 0;
 let student = 0;

 for(let course of Object.values(data)){
    if(Array.isArray(course)){
        student += course.length;

        for( let i = 0; i < course.length; i++){
            total += course[i].progress;
        }
    } else {
        for (let secondCourse of Object.values(course)){
            student += secondCourse.length;

            for ( let i = 0; i < secondCourse.length; i++){
                total += secondCourse[i].progress;
            }
        }
    }
 }
 return total / student;
}
console.log(getTotalProcentByIteration(students));
*/

//РЕКУРСИВНА ФУНКЦІЯ до задачі
/*
function getTotalProcentByRecursion (data){
if(Array.isArray(data)){
    let total = 0;

    for(let i = 0; i < data.length; i++){
        total += data[i].progress;
    }

    return [total, data.length];
} else {
    const total = [0, 0];

    for(let secondData of Object.values(data)){
        const secondDataArr = getTotalProcentByRecursion(secondData);
        total[0] += secondDataArr[0];
        total[1] += secondDataArr[1];
    }

    return total;
}
}
const res = getTotalProcentByRecursion(students);
console.log(res[0]/res[1]);
*/



//Факторіал РЕКУРСИВНОЮ функцією
/*
function factorial (n){
    if(typeof(n) !== 'number' || !Number.isInteger(n)){
        return 'Будь ласка, введіть правильний варіант !';
    }

    if (n >= 1){
        return n * factorial(n - 1);
    } else {
        return 1;
    }
  }
  console.log(factorial(3));
*/