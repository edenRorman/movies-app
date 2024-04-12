import React from "react";
import styled from "styled-components";
import { MdImageNotSupported } from "react-icons/md";

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
const StyledCard = styled.div`
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

const MovieCard = ({ movie }) => {
  return (
    <StyledCard onClick={() => {}}>
      {movie.primaryImage.url ? (
        <ImgContainer>
          <MovieImg src={movie.primaryImage.url}></MovieImg>
        </ImgContainer>
      ) : (
        <NoImageIcon>
          <MdImageNotSupported />
        </NoImageIcon>
      )}
      <MovieCardTitle>{movie.titleText.text}</MovieCardTitle>
    </StyledCard>
  );
};

export default MovieCard;
