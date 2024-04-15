import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const EmptyPageText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 60px;
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
          <h1>Sorry ....</h1>
          There are no movies for the given search "{searchTerm}".
          <br />
          Pls try again! :)
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
