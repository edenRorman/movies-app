import { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import Movie from "./MovieDataModel";
import MovieCard from "./MovieCard";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import MoviesApi from "./MoviesApi";
import EmptyState from "./EmptyState";

const Search = styled.div`
  display: flex;
  justify-content: center;
  padding: 1% 25%;
  align-items: center;
  gap: 20px;
`;
const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const SearchButton = styled.div`
  :hover {
    cursor: pointer;
    padding: 5px;
    margin: -5px;
    background-color: #efefef;
    border-radius: 10px;
  }
`;

const MoviesCatalog = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const { genre } = useParams();
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const searchTermFromUrl = searchParams.get("searchTerm");

  const searchMovie = async () => {
    setSearchParams({ searchTerm: searchTerm.trim() });
  };

  useEffect(() => {
    if (location.pathname.includes("favorite")) {
      const callGetUpcomingMovies = async () => {
        const allFavoriteMovies = await new MoviesApi().getFavorites();
        setMoviesList(allFavoriteMovies);
      };
      callGetUpcomingMovies();
    } else if (location.pathname.includes("upcoming")) {
      const callGetUpcomingMovies = async () => {
        const allUpcomingMovies = await new MoviesApi().getUpcoming(
          searchTermFromUrl
        );
        setMoviesList(allUpcomingMovies);
      };
      callGetUpcomingMovies();
    } else if (genre) {
      const callGetGenerMovies = async () => {
        const allGenreMovies = await new MoviesApi().searchByGenre(
          genre,
          searchTermFromUrl
        );
        setMoviesList(allGenreMovies);
      };
      callGetGenerMovies();
    } else {
      const callGetRandomMovies = async () => {
        const allGenreMovies = await new MoviesApi().searchRandom(
          searchTermFromUrl
        );
        setMoviesList(allGenreMovies);
      };
      callGetRandomMovies();
    }
  }, [setMoviesList, genre, location, searchParams]);

  return (
    <div>
      <Search>
        <TextField
          fullWidth
          placeholder="Search... "
          variant="outlined"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <SearchButton>
          <FaSearch
            size={28}
            className="fa-solid fa-coffee fa-2xl"
            onClick={searchMovie}
          />
        </SearchButton>
      </Search>
      <MovieList>
        {moviesList.length > 0 ? (
          moviesList.map((singleMovie: Movie) => (
            <MovieCard movie={singleMovie} />
          ))
        ) : (
          <EmptyState searchTerm={searchTermFromUrl} genre={genre} />
        )}
      </MovieList>
    </div>
  );
};

export default MoviesCatalog;
