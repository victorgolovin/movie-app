const movies = [];

const addMovieInputNode = document.getElementById("movie-app-input");
const moviesNode = document.getElementById("movies");

const addMovieButtonNode = document.getElementById("movie-app-button");
const deleteMovieNode = document.getElementById("movile-app-list");

const getMovieFromUser = () => {
  const movie = addMovieInputNode.value;

  return {
    movie: movie,
  };
};

const addMovie = ({ movie }) => {
  movies.push({
    movie: movie,
  });
};

const getMovies = () => {
  return movies;
};

const renderMovies = () => {
  const movies = getMovies();

  let moviesHTML = "";

  movies.forEach((movie) => {
    moviesHTML += `
    <li class="movie-post">
      <input class="movie-post-checkbox" type="checkbox">
      <label class="movie-post-label">${movie.movie}</label>
      <button class="movie-app-delete"></button>
    </li>
            `;
  });

  moviesNode.innerHTML = moviesHTML;
}


const deleteMoviesHandler = (event) => {
  if (event.target.classList.contains("movie-app-delete") ||
    event.target.classList.contains("movie-app-delete")) {
        const deleteMovieItem = event.target.closest(".movie-post");
        const deleteMovieIndex = getMovies(deleteMovieItem);
           
        movies.splice(deleteMovieIndex, 1);
        deleteMovieItem.remove();
        };  

}




const clearInput = () => {
    addMovieInputNode.value = "";
};

const emptyInput = () => {
    if (!addMovieInputNode.value) {
        return;
    }
}



const movieHandler = () => {
  const movieFromUser = getMovieFromUser();

  emptyInput()
  addMovie(movieFromUser);
  renderMovies()
  clearInput()
};


addMovieButtonNode.addEventListener("click", movieHandler);
deleteMovieNode.addEventListener("click", deleteMoviesHandler);
