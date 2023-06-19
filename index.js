const movies = [];

const addMovieInputNode = document.getElementById("movie-app-input");

const addMovieButtonNode = document.getElementById("movie-app-button");



const getMovieFromUser = () => {
    const movie = addMovieInputNode.ariaValueMax;

    return {
        movie: movie
    };
}

const addMovie = () => {

}

const movieHandler = () => {

}

addMovieButtonNode = addEventListener("click", movieHandler);