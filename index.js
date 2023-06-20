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
                <div class='movie-post'>
                    <p class='movie-name'>${movie.movie}</p>
                    <button id="movie-app-close-button" 
                    class="movie-app-close-button"></button> 
                </div>
            `;
  });

  moviesNode.innerHTML = moviesHTML;
}

const clearInput = () => {
    addMovieInputNode.value = "";
};


const movieHandler = () => {
  const movieFromUser = getMovieFromUser();

  
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
