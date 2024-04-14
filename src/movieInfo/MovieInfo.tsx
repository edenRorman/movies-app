import React, { useState, useEffect } from "react";
import Movie from "../MovieDataModel";
import convertToMovie from "../utils";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { IoMdArrowBack } from "react-icons/io";
import MovieInfoRigthSide from "./MovieInfoRigthSide";
import MoviesApi from "../MoviesApi";

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

const MovieInfo = () => {
  const [movieInfo, setMovieInfo] = useState<Movie | undefined>(undefined);
  const { movieId } = useParams();

  useEffect(() => {
    const callGetSpecificMovie = async () => {
      const movie = await new MoviesApi().getSpecificMovie(movieId!!);
      setMovieInfo(movie);
    };
    callGetSpecificMovie();
  }, [setMovieInfo]);

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
