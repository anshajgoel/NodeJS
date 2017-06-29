/**
 * Created by anshaj on 6/29/17.
 */


var movies = require('./movies');
// movies.favmovie= "Interstellar";
// console.log("Anshaj :" + movies.favmovie);


//Lec 11


//Lec 11 - Object factory

var anshaj_movies = movies();
anshaj_movies.favmovie = "interstellar";
console.log("anshaj:" + anshaj_movies.favmovie)