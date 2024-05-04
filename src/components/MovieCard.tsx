import React, { SyntheticEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Movie from "../models/MovieDataModel";
import ImageNotAvailable from "../images/imageNotAvailableCard.png";

const MovieImg = styled.img`
  aspect-ratio: 1/1;
  object-fit: cover;
  width: 100%;
`;
const ImgContainer = styled.div`
  width: 200px;
  height: 250px;
  background-color: #cccccc;
  display: flex;
`;
const StyledCard = styled(Link)`
  padding: 25px;
  text-decoration: none;
  color: black;
  :hover {
    cursor: pointer;
    color: #555757;
  }
`;
const MovieCardTitle = styled.div`
  font-family: sans-serif;
  background-color: #ececec;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  width: 200px;
  height: 50px;
  align-content: center;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const addDefaultImg = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.src = ImageNotAvailable;
  };

  return (
    <StyledCard to={`/movie/${movie.id}`}>
      <ImgContainer>
        {movie.primaryImageUrl ? (
          <MovieImg
            src={movie.primaryImageUrl}
            alt={movie.title}
            onError={addDefaultImg}
          />
        ) : (
          <MovieImg src={ImageNotAvailable} alt={movie.title} />
        )}
      </ImgContainer>
      <MovieCardTitle>{movie.title}</MovieCardTitle>
    </StyledCard>
  );
};

export default MovieCard;
