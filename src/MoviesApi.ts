import Movie from "./MovieDataModel";
import FavoriteMovies from "./favoriteMovies";

class MoviesApi {
  baseUrl: string = "https://moviesdatabase.p.rapidapi.com";
  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce5b38e66cmsh602fa4174c0ede4p1653bfjsn77edad1c59b2",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  baseLambdaMovieUrl =
    "https://obp141wk6a.execute-api.us-east-1.amazonaws.com/dev/v1/movies";
  baseLambdaUsersUrl =
    "https://obp141wk6a.execute-api.us-east-1.amazonaws.com/dev/v1/users";
  lambdaOptions = {
    method: "GET",
  };

  // Search by term
  async searchByTerm(searchTerm: string): Promise<Movie[]> {
    const searchUrl = `${this.baseLambdaMovieUrl}/${searchTerm}`;
    const response = await fetch(searchUrl, this.lambdaOptions);
    return await response.json();
  }

  // Sesrch By genre
  async searchByGenre(
    genre: string,
    searchTerm: string | null
  ): Promise<Movie[]> {
    const searchUrl = `${this.baseLambdaMovieUrl}/genres/${genre}`;
    const response = await fetch(searchUrl, this.lambdaOptions);
    const moviesToReturn: Movie[] = await response.json();

    if (searchTerm)
      return moviesToReturn.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return moviesToReturn;
  }

  // random
  async searchRandom(searchTerm: string | null): Promise<Movie[]> {
    const searchUrl = `${this.baseLambdaMovieUrl}/random`;
    const response = await fetch(searchUrl, this.lambdaOptions);
    const results: Movie[] = await response.json();

    if (searchTerm)
      return results.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return results;
  }

  // Get all genres
  async getAllGenres(): Promise<string[]> {
    const searchUrl = `${this.baseLambdaMovieUrl}/genres`;
    const response = await fetch(searchUrl, this.lambdaOptions);
    const results: string[] = await response.json();

    return results;
  }

  // Get specific movie by id
  public async getSpecificMovie(movieId: string): Promise<Movie> {
    const searchUrl = `${this.baseLambdaMovieUrl}/${movieId}`;
    const response = await fetch(searchUrl, this.lambdaOptions);
    return await response.json();
  }

  // Get Upcoming
  async getUpcoming(searchTerm: string | null): Promise<Movie[]> {
    const searchUrl = `${this.baseLambdaMovieUrl}/upcomimg`;
    const response = await fetch(searchUrl, this.lambdaOptions);
    const results: Movie[] = await response.json();

    if (searchTerm)
      return results.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return results;
  }

  // Get Favorite
  async getFavorites(): Promise<Movie[]> {
    const currentFavoriteString = localStorage.getItem("FavoriteMovie");
    if (currentFavoriteString) {
      const currentFavorite: FavoriteMovies = new Map(
        JSON.parse(currentFavoriteString)
      );
      return Array.from(currentFavorite.values());
    }
    return [];
  }

  async addToFavorites(movie: Movie): Promise<void> {
    let currentFavorite: FavoriteMovies;
    const currentFavoriteString = localStorage.getItem("FavoriteMovie");
    if (currentFavoriteString) {
      currentFavorite = new Map(JSON.parse(currentFavoriteString));
    } else {
      currentFavorite = new Map<string, Movie>();
    }
    currentFavorite.set(movie.id, movie);
    localStorage.setItem(
      "FavoriteMovie",
      JSON.stringify(Array.from(currentFavorite.entries()))
    );
  }

  async removeFromFavorites(movieId: string): Promise<void> {
    const currentFavoriteString = localStorage.getItem("FavoriteMovie");
    if (currentFavoriteString) {
      const currentFavorite: FavoriteMovies = new Map(
        JSON.parse(currentFavoriteString)
      );
      currentFavorite.delete(movieId);
      localStorage.setItem(
        "FavoriteMovie",
        JSON.stringify(Array.from(currentFavorite.entries()))
      );
    }
  }

  async isInFavorites(movieId: string): Promise<boolean> {
    const allFavorites = await this.getFavorites();
    return allFavorites.some((movie) => movie.id === movieId);
  }

  // create new user
  async cresteNewUser(username: string): Promise<string> {
    const searchUrl = `${this.baseLambdaUsersUrl}/${username}`;
    const response = await fetch(searchUrl, { method: "POST" });
    if (response.ok) return "";
    if (response.status === 409) return "duplicate";
    return "error";
  }
}

export default MoviesApi;
