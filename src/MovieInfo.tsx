import React from "react";
import styled from "styled-components";

const MovieInfo = ({ movie }) => {
  <div>
    <button>Back to all movies list</button>
    <img src={movie.backdrop_path}></img>
    <div>
      <div>{movie.original_title}</div>
      <div>{movie.genres}</div>
      <h2>overview</h2>
      <div>{movie.overview}</div>
    </div>
  </div>;
};

export default MovieInfo;
