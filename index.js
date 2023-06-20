const movies = [];

const addMovieInputNode = document.getElementById("movie-app-input");
const moviesNode = document.getElementById("movies");

const addMovieButtonNode = document.getElementById("movie-app-button");

const getMovieFromUser = () => {
  const movie = addMovieInputNode.ariaValueMax;

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
                <div class='post'>
                    <p class='movie-name'>${movie.movie}</p> 
                </div>
            `;
  });

  moviesNode.innerHTML = moviesHTML;
}



const movieHandler = () => {
  const movieFromUser = getMovieFromUser();

  addMovie(movieFromUser);
  renderMovies()
};



addMovieButtonNode.addEventListener("click", movieHandler);
