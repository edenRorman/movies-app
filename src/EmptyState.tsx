import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import NoResultIcon from "./images/noResult.jpeg";

const EmptyPageText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 60px;
  font-family: sans-serif;
`;

interface EmptyStateProps {
  searchTerm: string | null;
  genre: string | undefined;
}

const EmptyState: React.FC<EmptyStateProps> = ({ searchTerm, genre }) => {
  let location = useLocation();
  return (
    <>
      {location.pathname.includes("favorite") && (
        <EmptyPageText>
          <h1>No favorite movie yet.. </h1>
        </EmptyPageText>
      )}
      {searchTerm && (
        <EmptyPageText>
          <img src={NoResultIcon}></img>
          <h1>Sorry...</h1>
          There are no movies for the given search "{searchTerm}",
          <br />
          Please try to search another movie :)
        </EmptyPageText>
      )}
      {genre && !searchTerm && (
        <EmptyPageText>
          <h1>Maybe in another time ?? </h1>
          we dont have movies for "{genre}" genere
          <br />
          Pls select another again! :)
        </EmptyPageText>
      )}
    </>
  );
};

export default EmptyState;
