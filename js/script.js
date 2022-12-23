/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Ліга справедливості",
        "Ла-ла ленд",
        "Одержимість",
        "Скотт Пілігрім проти..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');
adv.forEach(item => {
item.remove();
});


poster.style.backgroundImage = 'url("img/bg.jpg")';

genre.textContent = 'Драма';

movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i+1} ${item}
            <div class="delete"></div>
        </li>
    `;
});





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