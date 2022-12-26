/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;

P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Спрощення console.log();
function log (element) {
    return console.log(element);
}



document.addEventListener('DOMContentLoaded', () => {

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
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

          
    const removeAdv = (ar) => {
        ar.forEach(item => {
            item.remove();
        });
    };
    const editMovieList = (films, parent) => {
        parent.innerHTML = '';

        sortFilms(films);

        films.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${item}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((but, i) => {
            but.addEventListener('click', ()=>{
                but.parentElement.remove();
                movieDB.movies.splice(i, 1);

                editMovieList(films, parent);
            });
        });
    };
    const makeChanges = () => {
        poster.style.backgroundImage = 'url("img/bg.jpg")';
        genre.textContent = 'Драма';
    };
    function sortFilms (ar) {
        ar.sort();
    }
    makeChanges();
    removeAdv(adv);
    editMovieList(movieDB.movies, movieList);
    
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = addInput.value,
            check = checkbox.checked;
            if(newFilm){
                if (newFilm.length > 21){
                    newFilm = `${newFilm.substring(0, 22)}...`;
                }
                movieDB.movies.push(newFilm);                                   //або e.target.reset();

                editMovieList(movieDB.movies, movieList);
            }

            if(check && newFilm){
                log('Додаємо улюблений фільм');
            }

            addForm.reset();             
    });

});
