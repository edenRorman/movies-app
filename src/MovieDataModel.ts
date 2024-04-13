interface Movie {
  id: string;
  ratingsSummary?: { aggregateRating: number; voteCount: number };
  primaryImageUrl?: string;
  genres?: string[];
  title: string;
  releaseYear?: number;
  runtimeSec?: number;
  plot?: string;
}

export default Movie;
