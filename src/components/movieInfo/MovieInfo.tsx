import { useState, useEffect } from "react";
import Movie from "../../models/MovieDataModel";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { IoMdArrowBack } from "react-icons/io";
import MovieInfoRigthSide from "./MovieInfoRigthSide";
import MoviesApi from "../../apis/MoviesApi";
import Loader from "../Loader";

const StyledPage = styled.div`
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
const MovieImage = styled.img`
  width: 100%;
  height: 80vh;
  display: block;
`;
const StyledLeftSide = styled.div`
  flex: 4;
  overflow: hidden;
  padding-right: 20px;
  padding-left: 20px;
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

  return (
    <div>
      {movieInfo ? (
        <StyledPage>
          <StyledBackButton
            color="inherit"
            onClick={handleClick}
            startIcon={<IoMdArrowBack />}
          >
            Back
          </StyledBackButton>
          <StyledMovie>
            <StyledLeftSide>
              <MovieImage
                src={movieInfo.primaryImageUrl}
                alt={movieInfo.title}
              ></MovieImage>
            </StyledLeftSide>
            <MovieInfoRigthSide movie={movieInfo} />
          </StyledMovie>
        </StyledPage>
      ) : (
        <StyledLoader size="200px"></StyledLoader>
      )}
    </div>
  );
};

export default MovieInfo;
