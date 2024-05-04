import Movie from "../models/MovieDataModel";

class MoviesApi {
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
  async getFavorites(userName: string): Promise<Movie[]> {
    const searchUrl = `${this.baseLambdaUsersUrl}/${userName}/favorites`;
    const response = await fetch(searchUrl, { method: "GET" });
    return response.json();
  }

  async addToFavorites(userName: string, movieId: string): Promise<void> {
    const searchUrl = `${this.baseLambdaUsersUrl}/${userName}/favorites/${movieId}`;
    const response = await fetch(searchUrl, { method: "PUT" });
  }

  async removeFromFavorites(userName: string, movieId: string): Promise<void> {
    const searchUrl = `${this.baseLambdaUsersUrl}/${userName}/favorites/${movieId}`;
    const response = await fetch(searchUrl, { method: "DELETE" });
  }

  async isInFavorites(userName: string, movieId: string): Promise<boolean> {
    const searchUrl = `${this.baseLambdaUsersUrl}/${userName}/favorites/${movieId}`;
    const response = await fetch(searchUrl, { method: "GET" });
    return response.json();
  }

  // create new user
  async cresteNewUser(username: string): Promise<string> {
    const searchUrl = `${this.baseLambdaUsersUrl}/${username}`;
    const response = await fetch(searchUrl, { method: "POST" });
    if (response.ok) {
      localStorage.setItem("userName", JSON.stringify(username));
      return "";
    }
    if (response.status === 409) return "duplicate";
    return "error";
  }
}

export default MoviesApi;
