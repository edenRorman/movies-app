import styled from "styled-components";
import React from "react";
import Chip from "@mui/material/Chip";
import Movie from "./MovieDataModel";

const StyledRigthSide = styled.div`
  flex: 3;
`;

const StyledTag = styled(Chip)`
  margin-right: 4px;
  margin-top: 12px;
`;

const Title = styled.div`
  font-family: sans-serif;
  font-weight: bold;
  padding: 10px;
  padding-left: 0px;
  font-size: xx-large;
`;

interface MovieInfoRigthSideProps {
  movie: Movie;
}

const MovieInfoRigthSide: React.FC<MovieInfoRigthSideProps> = ({ movie }) => {
  return (
    <StyledRigthSide>
      <Title>{movie.title}</Title>
      {movie.ratingsSummary && (
        <div>
          <u>Ratings Summary</u>:<b> {movie.ratingsSummary.aggregateRating} </b>{" "}
          from:
          <b> {movie.ratingsSummary.voteCount}</b> votes
        </div>
      )}
      <div>
        {movie.genres?.map((genre: string) => (
          <StyledTag key={genre} label={genre} variant="outlined" />
        ))}
      </div>
      <Title>overview</Title>
      {movie.releaseYear && (
        <div>
          <u>ReleaseYear</u>:{movie.releaseYear}{" "}
        </div>
      )}
      {movie.runtimeSec && (
        <div>
          {" "}
          <u>Time in second</u>: {movie.runtimeSec}{" "}
        </div>
      )}
      <br />
      <div>{movie.plot}</div>
    </StyledRigthSide>
  );
};

export default MovieInfoRigthSide;
