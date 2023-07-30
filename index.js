const VALIDATION_MASSAGE_TO_USER = "Введите название фильма!";
const VALIDATION_MASSAGE_TO_USER_IF_OVER_SYMBOLS ="Название фильма превышает 25 символов!";
const VALIDATION_LIMIT_SYMBOLS = 25;

let movies = [];

let addMovieButtonNode = document.getElementById("movie-app-button");
const addMovieInputNode = document.getElementById("movie-app-input");
const moviesNode = document.getElementById("movies");
const movieListNode = document.getElementById("movile-app-list");
const validationMessageNode = document.getElementById("validation-message");


const getMovieFromUser = () => {
  let movie = addMovieInputNode.value;

  return movie;
};

const addMovie = () => {
  const nameMovie = getMovieFromUser();
  movies.push(nameMovie);
};

const getMovies = () => {
  return movies;
};

const renderMovies = (addMovie) => {
  return `
    <li class="movie-post">
      <input class="movie-post-checkbox" type="checkbox">
      <label class="movie-post-label">${addMovie}</label>
      <button class="movie-app-delete"></button>
    </li>
            `;
};

const createMovie = (newMovie) => {
  const movieList = renderMovies(newMovie);
  movieListNode.insertAdjacentHTML("afterBegin", movieList);
};

const clearInput = () => {
  addMovieInputNode.value = "";
};

const movieValidation = () => {
  const titleLength = addMovieInputNode.value.length;
  if (titleLength > VALIDATION_LIMIT_SYMBOLS) {
    validationMessageNode.innerText =
      VALIDATION_MASSAGE_TO_USER_IF_OVER_SYMBOLS;
    validationMessageNode.classList.remove("validation-message-hidden");
    addMovieButtonNode = document.getElementById(
      "movie-app-button"
    ).disabled = true;
    return;
  }

  if (!addMovieInputNode.value) {
    validationMessageNode.innerText = VALIDATION_MASSAGE_TO_USER;
    validationMessageNode.classList.remove("validation-message-hidden");
    return;
  }

  addMovieButtonNode = document.getElementById(
    "movie-app-button"
  ).disabled = false;
  validationMessageNode.classList.add("validation-message-hidden");
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
  if (
    event.target.classList.contains("movie-post-checkbox") ||
    event.target.classList.contains("movie-post-label")
  ) {
    movieListNode.classList.toggle("checked-movie-post");
    movieCheckbox.classList.toggle("checked-checkbox");
  }
};

const movieHandler = () => {
  movieValidation();

  if (addMovieInputNode.value === "") {
    return;
  }

  addMovie();
  createMovie(getMovieFromUser());
  clearInput();
};

addMovieButtonNode.addEventListener("click", movieHandler);
movieListNode.addEventListener("click", deleteMoviesHandler);
movieListNode.addEventListener("click", activeMovieCheckbox);
addMovieInputNode.addEventListener("input", () => {
  movieValidation();
});
