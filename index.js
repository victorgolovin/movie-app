const VALIDATION_MASSAGE_TO_USER = "Введите название фильма!";
const VALIDATION_MASSAGE_TO_USER_IF_OVER_SYMBOLS = "Название фильма превышает 30 символов!";
const VALIDATION_LIMIT_SYMBOLS = 30;

const movies = [];

const addMovieInputNode = document.getElementById("movie-app-input");
const moviesNode = document.getElementById("movies");

let addMovieButtonNode = document.getElementById("movie-app-button");
const movieListNode = document.getElementById("movile-app-list");
const validationMessageNode = document.getElementById("validation-message");

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
};

const clearInput = () => {
  addMovieInputNode.value = "";
};

const movieValidation = () => {
  const titleLength = addMovieInputNode.value.length;
  if (titleLength > VALIDATION_LIMIT_SYMBOLS) {
    validationMessageNode.innerText = VALIDATION_MASSAGE_TO_USER_IF_OVER_SYMBOLS;
    validationMessageNode.classList.remove("validation-message-hidden");
    addMovieButtonNode = document.getElementById("movie-app-button").disabled = true;
    return;
  }

  if (!addMovieInputNode.value) {
    validationMessageNode.innerText = VALIDATION_MASSAGE_TO_USER;
    validationMessageNode.classList.remove("validation-message-hidden");
    return;
  }

  addMovieButtonNode = document.getElementById("movie-app-button").disabled = false;
  validationMessageNode.classList.add("validation-message-hidden");
};

const movieHandler = () => {
  movieValidation();

  if (addMovieInputNode.value === "") {
    return;
  }

  const movieFromUser = getMovieFromUser();

  addMovie(movieFromUser);
  renderMovies();
  clearInput();
};

const deleteMoviesHandler = (event) => {
  const deleteMovieItem = event.target.closest(".movie-post");
  const deleteMovieIndex = getMovies(deleteMovieItem);
  if (event.target.classList.contains("movie-app-delete")) {
    movies.splice(deleteMovieIndex, 1);
    deleteMovieItem.remove();
  }
};

const activeMovieCheckbox = (event) => {
  const movieListNode = event.target.closest(".movie-post");
  const movieCheckbox = event.target.closest(".movie-post-label");
  if (event.target.classList.contains("movie-post-checkbox") || event.target.classList.contains("movie-post-label"))
  {
    movieListNode.classList.toggle("checked-movie-post");
    movieCheckbox.classList.toggle("checked-checkbox");
  }
};

addMovieButtonNode.addEventListener("click", movieHandler);
movieListNode.addEventListener("click", deleteMoviesHandler);
movieListNode.addEventListener("click", activeMovieCheckbox);
addMovieInputNode.addEventListener("input", () => {movieValidation()});
