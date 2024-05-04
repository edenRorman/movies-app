import { FormEvent, useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Button, Pagination, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import Movie from "../models/MovieDataModel";
import MovieCard from "./MovieCard";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import MoviesApi from "../apis/MoviesApi";
import EmptyState from "./EmptyState";
import {
  CurrentUserContext,
  CurrentUserContextType,
} from "../contexts/currentUserContext";
import Loader from "./Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Search = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 50%;
`;
const MovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StyledLoader = styled(Loader)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CATALOG_PAGE_SIZE = 10;

const MoviesCatalog = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { currentUser } =
    useContext<CurrentUserContextType>(CurrentUserContext);

  const { genre } = useParams();
  let location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const searchTermFromUrl = searchParams.get("searchTerm");

  const searchMovie = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ searchTerm: searchTerm.trim() });
  };

  const searchOnClick = () => {
    setSearchParams({ searchTerm: searchTerm.trim() });
  };

  useEffect(() => {
    setCurrentPage(1);
    const getMovies = async () => {
      let movies: Movie[];
      if (location.pathname.includes("favorite") && currentUser) {
        movies = await new MoviesApi().getFavorites(currentUser!!);
      } else if (location.pathname.includes("upcoming")) {
        movies = await new MoviesApi().getUpcoming(searchTermFromUrl);
      } else if (genre) {
        movies = await new MoviesApi().searchByGenre(genre, searchTermFromUrl);
      } else {
        movies = await new MoviesApi().searchRandom(searchTermFromUrl);
      }
      setMoviesList(movies);
      setIsLoading(false);
    };
    getMovies();
  }, [
    setMoviesList,
    genre,
    location,
    currentUser,
    searchTermFromUrl,
    setIsLoading,
  ]);

  const moviesByPage: Movie[] = useMemo(() => {
    const startIndex = CATALOG_PAGE_SIZE * (currentPage - 1);
    let endIndex = CATALOG_PAGE_SIZE * currentPage - 1;
    if (endIndex > moviesList.length) endIndex = moviesList.length;
    return moviesList.slice(startIndex, endIndex + 1);
  }, [moviesList, currentPage]);

  const handlePaginationOnChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Search onSubmit={searchMovie}>
        <TextField
          fullWidth
          placeholder="Search... "
          variant="outlined"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <Button
          color="inherit"
          startIcon={<FaSearch size={28} />}
          onClick={searchOnClick}
        ></Button>
      </Search>
      {isLoading ? (
        <StyledLoader size="150px"></StyledLoader>
      ) : (
        <>
          <MovieList>
            {moviesList.length > 0 ? (
              moviesByPage.map((singleMovie: Movie) => (
                <MovieCard movie={singleMovie} key={singleMovie.id} />
              ))
            ) : (
              <EmptyState searchTerm={searchTermFromUrl} genre={genre} />
            )}
          </MovieList>
          {moviesList.length > CATALOG_PAGE_SIZE && (
            <Pagination
              count={Math.ceil(moviesList.length / CATALOG_PAGE_SIZE)}
              page={currentPage}
              onChange={handlePaginationOnChange}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default MoviesCatalog;
