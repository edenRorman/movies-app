import Movie from "./MovieDataModel";
import FavoriteMovies from "./favoriteMovies";
import randomMovies from "./mocks/random";
import searchBy from "./mocks/searchBy";
import searchGenere from "./mocks/searchGenre";
import specificId from "./mocks/specificId";
import upComingMovies from "./mocks/upComing";
import convertToMovie from "./utils";

class MoviesApi {
  constructor() {}

  baseUrl: string = "https://moviesdatabase.p.rapidapi.com";
  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce5b38e66cmsh602fa4174c0ede4p1653bfjsn77edad1c59b2",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  // Search by term
  async searchByTerm(searchTerm: string): Promise<Movie[]> {
    if (searchTerm === "dark knight") {
      return searchBy;
    }
    return [];
    // const searchUrl = `${this.baseUrl}/titles/search/title/${searchTerm}?exact=false&info=base_info&titleType=movie`;
    // const response = await fetch(searchUrl, this.options);
    // const results = await response.json();
    // return results.results.map(convertToMovie);
  }

  // Sesrch By genre
  async searchByGenre(
    genre: string,
    searchTerm: string | null
  ): Promise<Movie[]> {
    if (genre === "Action") {
      const moviesToReturn = searchGenere;
      return moviesToReturn;
    }
    return [];
    // const searchUrl = `${this.baseUrl}/titles/random?limit=50&list=top_boxoffice_200&genre=${genre}`;
    // const response = await fetch(searchUrl, this.options);
    // const results = await response.json();
    // const moviesToReturn: Movie[] = results.results.map(convertToMovie);

    // if (searchTerm)
    //   return moviesToReturn.filter((movie) =>
    //     movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    // return moviesToReturn;
  }

  // random
  async searchRandom(searchTerm: string | null): Promise<Movie[]> {
    return randomMovies;

    // const searchUrl = `${this.baseUrl}/titles/random?limit=50&list=top_boxoffice_200`;
    // const response = await fetch(searchUrl, this.options);
    // const results = await response.json();
    // const moviesToReturn: Movie[] = results.results.map(convertToMovie);

    // if (searchTerm)
    //   return moviesToReturn.filter((movie) =>
    //     movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    // return moviesToReturn;
  }

  // Get all genres
  async getAllGenres(): Promise<string[]> {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film-Noir",
      "Game-Show",
      "History",
      "Horror",
      "Music",
      "Musical",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  // Get specific movie by id
  public async getSpecificMovie(movieId: string): Promise<Movie> {
    return specificId;
    // const searchUrl = `${this.baseUrl}/titles/${movieId}?info=base_info`;
    // const response = await fetch(searchUrl, this.options);
    // const result = await response.json();
    // return convertToMovie(result.results);
  }

  // Get Upcoming
  async getUpcoming(searchTerm: string | null): Promise<Movie[]> {
    return upComingMovies;

    // const searchUrl = `${this.baseUrl}/titles/x/upcoming?limit=50`;
    // const response = await fetch(searchUrl, this.options);
    // const results = await response.json();
    // const moviesToReturn: Movie[] = results.results.map(convertToMovie);

    // if (searchTerm)
    //   return moviesToReturn.filter((movie) =>
    //     movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    //   );
    // return moviesToReturn;
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
}

export default MoviesApi;
