import React, { useState, useEffect } from "react";
import Movie from "./MovieDataModel";
import convertToMovie from "./utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { IoMdArrowBack } from "react-icons/io";
import MovieInfoRigthSide from "./MovieInfoRigthSide";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const StyledBackButton = styled(Button)`
  color: black !important;
  gap: 6px !important;
  border: 1px solid rgb(141 141 141 / 60%) !important;
  width: 10%;
  flex-direction: row !importent;
`;
const StyledMovie = styled.div`
  display: flex;
  flex-direction: row;
`;
const MovieImage = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 90%;
`;
const StyledLeftSide = styled.div`
  flex: 5;
`;

const singleDATA = {
  results: {
    _id: "61e5af6bef99b1c5434c8847",
    id: "tt1877830",
    ratingsSummary: {
      aggregateRating: 7.8,
      voteCount: 783243,
      __typename: "RatingsSummary",
    },
    episodes: null,
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
    genres: {
      genres: [
        {
          text: "Action",
          id: "Action",
          __typename: "Genre",
        },
        {
          text: "Crime",
          id: "Crime",
          __typename: "Genre",
        },
        {
          text: "Drama",
          id: "Drama",
          __typename: "Genre",
        },
        {
          text: "Thriller",
          id: "Thriller",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
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
    runtime: {
      seconds: 10560,
      __typename: "Runtime",
    },
    series: null,
    meterRanking: {
      currentRank: 47,
      rankChange: {
        changeDirection: "DOWN",
        difference: 1,
        __typename: "MeterRankChange",
      },
      __typename: "TitleMeterRanking",
    },
    plot: {
      plotText: {
        plainText:
          "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        __typename: "Markdown",
      },
      language: {
        id: "en-US",
        __typename: "DisplayableLanguage",
      },
      __typename: "Plot",
    },
  },
};

interface MovieInfoProps {
  movieId: string;
}

const MovieInfo: React.FC<MovieInfoProps> = ({ movieId }) => {
  const [movieInfo, setMovieInfo] = useState<Movie | undefined>(undefined);
  const searchSpecificMovie = async () => {
    const data = convertToMovie(singleDATA.results);
    //await response.json();
    setMovieInfo(data);
  };
  useEffect(() => {
    searchSpecificMovie();
  }, []);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }

  return (
    <div>
      {movieInfo ? (
        <StyledPage>
          <StyledBackButton onClick={handleClick}>
            <IoMdArrowBack />
            Back
          </StyledBackButton>
          <StyledMovie>
            <StyledLeftSide>
              <MovieImage src={movieInfo.primaryImageUrl}></MovieImage>
            </StyledLeftSide>
            <MovieInfoRigthSide movie={movieInfo} />
          </StyledMovie>
        </StyledPage>
      ) : (
        <div>Loading page</div>
      )}
    </div>
  );
};

export default MovieInfo;
