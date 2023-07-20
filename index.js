const movies = [];

const addMovieInputNode = document.getElementById("movie-app-input");
const moviesNode = document.getElementById("movies");

const addMovieButtonNode = document.getElementById("movie-app-button");
const closeMovieButtonNode = document.getElementById("movie-app-close-button");

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
      <div class="movie-post-delete">
        <span class="movie-post-delete-span"></span>
    </div>
</li>
            `;
  });

  moviesNode.innerHTML = moviesHTML;
}

const deleteMovie = (event) => {
  if (event.target.classList.contains("film-item__delete-film") ||
  event.target.classList.contains("film-item__delete-film-span")) {
      const currentFilmItem = event.target.closest(".film-item");
      const currentFilmIndex = getFilmIndex(currentFilmItem);
         
      films.splice(currentFilmIndex, 1);
      currentFilmItem.remove();
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

const closeMovieHandler = () => {
    movies = []
    console.log(1)
}


addMovieButtonNode.addEventListener("click", movieHandler);
closeMovieButtonNode.addEventListener("click", closeMovieHandler);
