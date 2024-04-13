import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import Movie from "./MovieDataModel";
import MovieCard from "./MovieCard";
import { useLocation, useParams } from "react-router-dom";
import MoviesApi from "./MoviesApi";

const DATA = {
  entries: 10,
  results: [
    {
      _id: "61e5af6bef99b1c5434c8847",
      id: "tt1877830",
      primaryImage: {
        id: "rm2474894849",
        width: 1382,
        height: 2048,
        url: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
        caption: {
          plainText:
            "Paul Dano, Colin Farrell, Robert Pattinson, and Zoë Kravitz in The Batman (2022)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        categories: [
          {
            value: "movie",
            __typename: "TitleTypeCategory",
          },
        ],
        canHaveEpisodes: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "The Batman",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "The Batman",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2022,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 4,
        month: 3,
        year: 2022,
        __typename: "ReleaseDate",
      },
      position: 114,
    },
    {
      _id: "61e5ade3cffb8f2faa4c2b13",
      id: "tt1727824",
      primaryImage: {
        id: "rm2666152448",
        width: 1381,
        height: 2048,
        url: "https://m.media-amazon.com/images/M/MV5BMTA2NDc3Njg5NDVeQTJeQWpwZ15BbWU4MDc1NDcxNTUz._V1_.jpg",
        caption: {
          plainText: "Rami Malek in Bohemian Rhapsody (2018)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "Bohemian Rhapsody",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "Bohemian Rhapsody",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2018,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 1,
        month: 11,
        year: 2018,
        __typename: "ReleaseDate",
      },
      position: 69,
    },
    {
      _id: "61e5b7248a5a6a599f4e6027",
      id: "tt2975590",
      primaryImage: {
        id: "rm2302675456",
        width: 1823,
        height: 2700,
        url: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        caption: {
          plainText:
            "Ben Affleck and Henry Cavill in Batman v Superman: Dawn of Justice (2016)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "Batman v Superman: Dawn of Justice",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "Batman v Superman: Dawn of Justice",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2016,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 24,
        month: 3,
        year: 2016,
        __typename: "ReleaseDate",
      },
      position: 79,
    },
    {
      _id: "61e5b8f2d735dff3f94ecd87",
      id: "tt3371366",
      primaryImage: {
        id: "rm1428563968",
        width: 1383,
        height: 2048,
        url: "https://m.media-amazon.com/images/M/MV5BN2YwOWM4ODgtZTMzMi00ZmFmLTk5NTEtNmY4ZDcwNzQxNDhjXkEyXkFqcGdeQXVyNTI0NzAyNjY@._V1_.jpg",
        caption: {
          plainText:
            "Anthony Hopkins, Mark Wahlberg, Erik Aadahl, Jim Carter, Peter Cullen, Laura Haddock, and Isabela Merced in Transformers: The Last Knight (2017)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "Transformers: The Last Knight",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "Transformers: The Last Knight",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2017,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 22,
        month: 6,
        year: 2017,
        __typename: "ReleaseDate",
      },
      position: 179,
    },
    {
      _id: "61e581e3d735dff3f9417bef",
      id: "tt0145487",
      primaryImage: {
        id: "rm3632146944",
        width: 511,
        height: 755,
        url: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
        caption: {
          plainText: "Spider-Man (2002)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "Spider-Man",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "Spider-Man",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2002,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 4,
        month: 7,
        year: 2002,
        __typename: "ReleaseDate",
      },
      position: 92,
    },
    {
      _id: "61e5b991909c2ca7814ef27b",
      id: "tt3501632",
      primaryImage: {
        id: "rm1413491712",
        width: 1382,
        height: 2048,
        url: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
        caption: {
          plainText:
            "Jeff Goldblum, Anthony Hopkins, Cate Blanchett, Idris Elba, Mark Ruffalo, Karl Urban, Tom Hiddleston, Chris Hemsworth, and Tessa Thompson in Thor: Ragnarok (2017)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "Thor: Ragnarok",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "Thor: Ragnarok",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2017,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 26,
        month: 10,
        year: 2017,
        __typename: "ReleaseDate",
      },
      position: 88,
    },
    {
      _id: "61e5971578c012aa34467e0d",
      id: "tt1201607",
      primaryImage: {
        id: "rm3179585537",
        width: 2000,
        height: 3000,
        url: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        caption: {
          plainText:
            "Rupert Grint, Daniel Radcliffe, and Emma Watson in Harry Potter and the Deathly Hallows: Part 2 (2011)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "Harry Potter and the Deathly Hallows: Part 2",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "Harry Potter and the Deathly Hallows: Part 2",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2011,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 13,
        month: 7,
        year: 2011,
        __typename: "ReleaseDate",
      },
      position: 16,
    },
    {
      _id: "61e5c8c1b597b91eb9529249",
      id: "tt6718170",
      primaryImage: {
        id: "rm1249126401",
        width: 690,
        height: 1024,
        url: "https://m.media-amazon.com/images/M/MV5BYTc4MTdlOGYtNzk3YS00ZTg0LTkyNTUtMjMzYmI3MjViNWE0XkEyXkFqcGdeQXVyMTUzMTQ0NzQz._V1_.jpg",
        caption: {
          plainText:
            "Jack Black, Charlie Day, Chris Pratt, Seth Rogen, Keegan-Michael Key, and Anya Taylor-Joy in Super Mario Bros: Film (2023)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        displayableProperty: {
          value: {
            plainText: "",
            __typename: "Markdown",
          },
          __typename: "DisplayableTitleTypeProperty",
        },
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        categories: [
          {
            value: "movie",
            __typename: "TitleTypeCategory",
          },
        ],
        canHaveEpisodes: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "Super Mario Bros: Film",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "The Super Mario Bros. Movie",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2023,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 26,
        month: 5,
        year: 2023,
        __typename: "ReleaseDate",
      },
      position: 18,
    },
    {
      _id: "61e59cd5ef99b1c54347ef91",
      id: "tt1300854",
      primaryImage: {
        id: "rm520987392",
        width: 770,
        height: 1100,
        url: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg",
        caption: {
          plainText:
            "Don Cheadle, Robert Downey Jr., Gwyneth Paltrow, Guy Pearce, Paul Bettany, Rebecca Hall, and Stephanie Szostak in Iron Man Three (2013)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "Iron Man Three",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "Iron Man Three",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2013,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 24,
        month: 4,
        year: 2013,
        __typename: "ReleaseDate",
      },
      position: 24,
    },
    {
      _id: "61e582e7909c2ca78141b5cb",
      id: "tt0241527",
      primaryImage: {
        id: "rm683213568",
        width: 510,
        height: 755,
        url: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        caption: {
          plainText:
            "Robbie Coltrane, Warwick Davis, Richard Harris, Rupert Grint, Daniel Radcliffe, Harry Taylor, and Emma Watson in Harry Potter and the Sorcerer's Stone (2001)",
          __typename: "Markdown",
        },
        __typename: "Image",
      },
      titleType: {
        text: "Movie",
        id: "movie",
        isSeries: false,
        isEpisode: false,
        __typename: "TitleType",
      },
      titleText: {
        text: "Harry Potter en de steen der wijzen",
        __typename: "TitleText",
      },
      originalTitleText: {
        text: "Harry Potter and the Sorcerer's Stone",
        __typename: "TitleText",
      },
      releaseYear: {
        year: 2001,
        endYear: null,
        __typename: "YearRange",
      },
      releaseDate: {
        day: 22,
        month: 11,
        year: 2001,
        __typename: "ReleaseDate",
      },
      position: 49,
    },
  ],
};

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

  const searchMovie = async () => {
    if (searchTerm.length === 0) return;

    const allMovies = await new MoviesApi().searchByTerm(searchTerm);
    setMoviesList(allMovies);
  };

  useEffect(() => {
    if (location.pathname.includes("upcoming")) {
      const callGetUpcomingMovies = async () => {
        const allUpcomingMovies = await new MoviesApi().getUpcoming();
        setMoviesList(allUpcomingMovies);
      };
      callGetUpcomingMovies();
    } else if (genre) {
      const callGetGenerMovies = async () => {
        const allGenreMovies = await new MoviesApi().searchByGenre(genre);
        setMoviesList(allGenreMovies);
      };
      callGetGenerMovies();
    } else {
      const callGetRandomMovies = async () => {
        const allGenreMovies = await new MoviesApi().searchRandom();
        setMoviesList(allGenreMovies);
      };
      callGetRandomMovies();
    }
  }, [setMoviesList, genre, location]);

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
        {moviesList ? (
          moviesList.map((singleMovie: Movie) => (
            <MovieCard movie={singleMovie} />
          ))
        ) : (
          <div>No movies found </div>
        )}
      </MovieList>
    </div>
  );
};

export default MoviesCatalog;
