import { useState, useEffect, SyntheticEvent } from "react";
import Movie from "../../models/MovieDataModel";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { IoMdArrowBack } from "react-icons/io";
import MovieInfoDetails from "./MovieInfoDetails";
import MoviesApi from "../../apis/MoviesApi";
import Loader from "../Loader";
import ImageNotAvailable from "../../images/imageNotAvailable.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const StyledBackButton = styled(Button)`
  border: 1px solid rgb(141 141 141 / 60%) !important;
  width: 10%;
  margin-left: 20px !important;
`;
const StyledMovie = styled.div`
  display: flex;
`;
const MovieImageContainer = styled.div`
  display: flex;
  flex: 4;
  overflow: hidden;
  padding-right: 20px;
  padding-left: 20px;
`;
const MovieImage = styled.img`
  width: 100%;
  height: 80vh;
  display: block;
  border: #afafaf 1px solid;
`;
const StyledLoader = styled(Loader)`
  display: flex;
  align-items: center;
  justify-content: center;
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
  }, [setMovieInfo, movieId]);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/home");
  }

  const addDefaultImg = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
    ev.currentTarget.src = ImageNotAvailable;
  };

  return (
    <div>
      {movieInfo ? (
        <Container>
          <StyledBackButton
            color="inherit"
            onClick={handleClick}
            startIcon={<IoMdArrowBack />}
          >
            Back
          </StyledBackButton>
          <StyledMovie>
            <MovieImageContainer>
              <MovieImage
                src={movieInfo.primaryImageUrl}
                alt={movieInfo.title}
                onError={addDefaultImg}
              ></MovieImage>
            </MovieImageContainer>
            <MovieInfoDetails movie={movieInfo} />
          </StyledMovie>
        </Container>
      ) : (
        <StyledLoader size="200px"></StyledLoader>
      )}
    </div>
  );
};

export default MovieInfo;
