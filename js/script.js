/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms === null || numberOfFilms == '' || isNaN(numberOfFilms)) { 
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function lastFilm() {
    for (let i = 0; i < 2; i++) {
        let lastViewedFilm = prompt('Один из последних просмотренных фильмов?', '');
        let lastFilmRating = prompt('На сколько оцените его?', '');
        if (lastViewedFilm != null && lastFilmRating != null && lastViewedFilm != '' && lastViewedFilm.length < 50) {
            personalMovieDB.movies[lastViewedFilm] = lastFilmRating;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }
    }
}

lastFilm();

// while (i < 2) {
//     let lastViewedFilm = prompt('Один из последних просмотренных фильмов?', '');
//     let lastFilmRating = prompt('На сколько оцените его?', '');
//     if (lastViewedFilm != null && lastFilmRating != null && lastViewedFilm != '' && lastViewedFilm.length < 50) {
//                 personalMovieDB.movies[lastViewedFilm] = lastFilmRating;
//                 console.log("done");
//             } else {
//                 console.log("error");
//                 i--;
//             }
//     i++;
// }

// do {
//     let lastViewedFilm = prompt('Один из последних просмотренных фильмов?', '');
//     let lastFilmRating = prompt('На сколько оцените его?', '');
//     if (lastViewedFilm != null && lastFilmRating != null && lastViewedFilm != '' && lastViewedFilm.length < 50) {
//                 personalMovieDB.movies[lastViewedFilm] = lastFilmRating;
//                 console.log("done");
//             } else {
//                 console.log("error");
//                 i--;
//             }
//     i++;
// } while (i < 2);

function level() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

level();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB);

let myFavGenre;

function writeYourGenres() {
    let count = 0;
    for (let i = 1; i < 4; i++) {
        myFavGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[count] = myFavGenre;
        count++;
    }
}

writeYourGenres();

console.log(personalMovieDB);

