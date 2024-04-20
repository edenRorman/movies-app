import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Movie from "../MovieDataModel";
import { MdFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { Button } from "@mui/material";
import MoviesApi from "../MoviesApi";
import { CurrentUserContext, CurrentUserContextType } from "../Root";

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
const StyledFavoriteButton = styled(Button)`
  color: black !important;
  border-color: black !important;
  gap: 6px;
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
  }, [currentUser]);

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
      <br />

      {favorite ? (
        <StyledFavoriteButton
          variant="outlined"
          onClick={handleOnClickFavorite}
        >
          <MdOutlineFavorite size={26} />
          Remove to your favorite
        </StyledFavoriteButton>
      ) : (
        <StyledFavoriteButton
          variant="outlined"
          onClick={handleOnClickFavorite}
        >
          <MdFavoriteBorder size={26} />
          Add from your favorite
        </StyledFavoriteButton>
      )}
    </StyledRigthSide>
  );
};

export default MovieInfoRigthSide;
