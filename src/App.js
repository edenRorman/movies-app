import { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./MovieCard";
import Menu from "./Menu";

const DATA = {
  Search: [
    {
      Title: "Italian Spiderman",
      Year: "2007",
      imdbID: "tt2705436",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
    },
    {
      Title: "Superman, Spiderman or Batman",
      Year: "2011",
      imdbID: "tt2084949",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
    },
    {
      Title: "Spiderman",
      Year: "1990",
      imdbID: "tt0100669",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "The Amazing Spiderman 2 Webb Cut",
      Year: "2021",
      imdbID: "tt18351128",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg",
    },
    {
      Title: "Spiderman the Verse",
      Year: "2019–",
      imdbID: "tt12122034",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg",
    },
    {
      Title: "Spiderman in Cannes",
      Year: "2016",
      imdbID: "tt5978586",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg",
    },
    {
      Title: "Spiderman",
      Year: "2010",
      imdbID: "tt1785572",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "Spiderman and Grandma",
      Year: "2009",
      imdbID: "tt1433184",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg",
    },
    {
      Title: "Fighting, Flying and Driving: The Stunts of Spiderman 3",
      Year: "2007",
      imdbID: "tt1132238",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg",
    },
    {
      Title: "Amazing Spiderman Syndrome",
      Year: "2012",
      imdbID: "tt2586634",
      Type: "movie",
      Poster: "N/A",
    },
  ],
  totalResults: "23",
  Response: "True",
};

const API_URL = "http://www.omdbapi.com?apikey=d8d2909a";

const WebTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin: 10px 0;
`;
const Search = styled.div`
  display: flex;
  justify-content: center;
  padding: 1% 25%;
  align-items: center;
  gap: 20px;
`;
const MovieList = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("spiderman");
  const [moviesList, setMoviesList] = useState("");

  const searchMovie = async (searchTerm) => {
    let response;
    if (!searchTerm) {
      //response = await fetch(`${API_URL}`);
    } else {
      //response = await fetch(`${API_URL}&s=${searchTerm}`);
    }
    const data = DATA;
    //await response.json();
    setMoviesList(data.Search);
  };
  useEffect(() => {
    searchMovie(searchTerm);
  }, []);
  return (
    <div>
      <div>
        {" "}
        <WebTitle>Best movie place</WebTitle>
        <Search>
          <TextField
            fullWidth
            placeholder="Search... "
            variant="outlined"
            value={searchTerm}
            onChange={() => {
              setSearchTerm();
            }}
          />
          <FaSearch
            size={28}
            class="fa-solid fa-coffee fa-2xl"
            onClick={() => {
              searchMovie(searchTerm);
            }}
          />
        </Search>
        <MovieList>
          {moviesList ? (
            moviesList.map((singleMovie) => <MovieCard movie={singleMovie} />)
          ) : (
            <div>No!</div>
          )}
        </MovieList>
      </div>
    </div>
  );
};

export default App;
