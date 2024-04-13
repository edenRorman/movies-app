import Movie from "./MovieDataModel";

const convertToMovie = (data: any): Movie => {
  type Genre = { text: string; id: string; __typename: string };
  const getAllGenres = data.genres?.genres.map((genre: Genre) => genre.text);
  return {
    id: data.id,
    ratingsSummary: {
      aggregateRating: data.ratingsSummary?.aggregateRating,
      voteCount: data.ratingsSummary?.voteCount,
    },
    primaryImageUrl: data.primaryImage?.url,
    genres: getAllGenres,
    title: data.titleText.text,
    releaseYear: data.releaseYear?.year,
    runtimeSec: data.runtime?.seconds,
    plot: data.plot?.plotText?.plainText,
  };
};

export default convertToMovie;
