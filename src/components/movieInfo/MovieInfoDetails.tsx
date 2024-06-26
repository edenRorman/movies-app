import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import Movie from "../../models/MovieDataModel";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { Button, Tooltip } from "@mui/material";
import MoviesApi from "../../apis/MoviesApi";
import {
  CurrentUserContext,
  CurrentUserContextType,
} from "../../contexts/currentUserContext";

const Container = styled.div`
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

interface MovieInfoDetailsProps {
  movie: Movie;
}

const MovieInfoDetails: React.FC<MovieInfoDetailsProps> = ({ movie }) => {
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

  const handleFavoriteOnClick = () => {
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
    <Container>
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
      <div>{movie.plot}</div>

      <Tooltip
        placement="bottom-start"
        disableHoverListener={Boolean(currentUser)}
        title="Guest user can't add to favotites"
        arrow
      >
        <span>
          <StyledFavoriteButton
            color="inherit"
            variant="outlined"
            disabled={!currentUser}
            onClick={handleFavoriteOnClick}
            startIcon={
              favorite ? (
                <MdFavorite size={26} />
              ) : (
                <MdFavoriteBorder size={26} />
              )
            }
          >
            {favorite ? "Remove from your favorite" : "Add to your favorite"}
          </StyledFavoriteButton>
        </span>
      </Tooltip>
    </Container>
  );
};

export default MovieInfoDetails;
