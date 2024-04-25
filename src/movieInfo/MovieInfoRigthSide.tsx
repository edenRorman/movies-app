import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Movie from "../MovieDataModel";
import { MdFavoriteBorder } from "react-icons/md";
import { Button } from "@mui/material";
import MoviesApi from "../MoviesApi";
import {
  CurrentUserContext,
  CurrentUserContextType,
} from "../currentUserContext";

const StyledRigthSide = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: sans-serif;
`;
const StyledTag = styled(Chip)`
  margin-right: 4px;
  margin-top: 12px;
`;
const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;
const StyledFavoriteButton = styled(Button)`
  border-color: black !important;
  width: 50%;
`;

const Bold = styled.span`
  font-weight: bold;
`;

interface MovieInfoRigthSideProps {
  movie: Movie;
}

const MovieInfoRigthSide: React.FC<MovieInfoRigthSideProps> = ({ movie }) => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const { currentUser } =
    useContext<CurrentUserContextType>(CurrentUserContext);

  useEffect(() => {
    if (currentUser) {
      const checkIfFavorite = async () => {
        const favoriteState = await new MoviesApi().isInFavorites(
          currentUser!!,
          movie.id
        );
        setFavorite(favoriteState);
      };
      checkIfFavorite();
    }
  }, [currentUser, movie.id]);

  const handleOnClickFavorite = () => {
    if (currentUser) {
      setFavorite(!favorite);
      if (!favorite) {
        new MoviesApi().addToFavorites(currentUser, movie.id);
      } else {
        new MoviesApi().removeFromFavorites(currentUser, movie.id);
      }
    }
  };
  return (
    <StyledRigthSide>
      <Title>{movie.title}</Title>
      {movie.ratingsSummary && (
        <div>
          <Bold>Ratings Summary:</Bold> {movie.ratingsSummary.aggregateRating}{" "}
          from:
          <Bold> {movie.ratingsSummary.voteCount}</Bold> votes
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
          <Bold>ReleaseYear:</Bold> {movie.releaseYear}
        </div>
      )}
      {movie.runtimeSec && (
        <div>
          <Bold>Time in second:</Bold> {movie.runtimeSec}
        </div>
      )}
      <br />
      <div>{movie.plot}</div>
      <br />

      {favorite ? (
        <StyledFavoriteButton
          color="inherit"
          variant="outlined"
          onClick={handleOnClickFavorite}
          startIcon={<MdFavoriteBorder size={26} />}
        >
          Remove to your favorite
        </StyledFavoriteButton>
      ) : (
        <StyledFavoriteButton
          color="inherit"
          disabled={!currentUser}
          variant="outlined"
          onClick={handleOnClickFavorite}
          startIcon={<MdFavoriteBorder size={26} />}
        >
          Add from your favorite
        </StyledFavoriteButton>
      )}
    </StyledRigthSide>
  );
};

export default MovieInfoRigthSide;
