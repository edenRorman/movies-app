import React from "react";
import styled from "styled-components";
import { MdImageNotSupported } from "react-icons/md";
import { Link } from "react-router-dom";
import Movie from "./MovieDataModel";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;
const MovieCardTitle = styled.div`
  font-family: sans-serif;
  font-weight: bold;
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
const NoImageIcon = styled.div`
  width: 200px;
  height: 250px;
  background-color: #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <StyledCard to={`/movie/${movie.id}`}>
      {movie.primaryImageUrl ? (
        <ImgContainer>
          <MovieImg src={movie.primaryImageUrl}></MovieImg>
        </ImgContainer>
      ) : (
        <NoImageIcon>
          <MdImageNotSupported />
        </NoImageIcon>
      )}
      <MovieCardTitle>{movie.title}</MovieCardTitle>
    </StyledCard>
  );
};

export default MovieCard;