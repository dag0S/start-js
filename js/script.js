"use strict";

let numberOfFilms

do {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
} while (numberOfFilms == false);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < numberOfFilms; i++) {
    let a, b;

    do {
        a = prompt('Один из просмотренных фильмов?', '');
    } while ((a.length > 50) || (a === '') || (a == null));

    do {
        b = prompt('На сколько оцените его?', '');
    } while ((b.length > 50) || (b === '') || (b == null));

    personalMovieDB.movies[a] = b;
}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);

