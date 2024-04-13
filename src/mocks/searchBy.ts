import convertToMovie from "../utils";

const data = [
  {
    _id: "61e58553ef99b1c5434243d5",
    id: "tt0468569",
    ratingsSummary: {
      aggregateRating: 9,
      voteCount: 2862710,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: {
      id: "rm4023877632",
      width: 1383,
      height: 2048,
      url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      caption: {
        plainText:
          "Morgan Freeman, Gary Oldman, Christian Bale, Michael Caine, Aaron Eckhart, Heath Ledger, Maggie Gyllenhaal, Cillian Murphy, and Chin Han in The Dark Knight (2008)",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "Action",
          __typename: "Genre",
        },
        {
          text: "Crime",
          id: "Crime",
          __typename: "Genre",
        },
        {
          text: "Drama",
          id: "Drama",
          __typename: "Genre",
        },
        {
          text: "Thriller",
          id: "Thriller",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "The Dark Knight",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "The Dark Knight",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2008,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: {
      day: 24,
      month: 7,
      year: 2008,
      __typename: "ReleaseDate",
    },
    runtime: {
      seconds: 9120,
      __typename: "Runtime",
    },
    series: null,
    meterRanking: {
      currentRank: 109,
      rankChange: {
        changeDirection: "UP",
        difference: 3,
        __typename: "MeterRankChange",
      },
      __typename: "TitleMeterRanking",
    },
    plot: {
      plotText: {
        plainText:
          "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        __typename: "Markdown",
      },
      language: {
        id: "en-US",
        __typename: "DisplayableLanguage",
      },
      __typename: "Plot",
    },
  },
  {
    _id: "61e59f7c909c2ca7814898cb",
    id: "tt13468860",
    ratingsSummary: {
      aggregateRating: null,
      voteCount: 0,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: null,
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Crime",
          id: "Crime",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "Cold Dark Knight",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Cold Dark Knight",
      __typename: "TitleText",
    },
    releaseYear: null,
    releaseDate: null,
    runtime: null,
    series: null,
    meterRanking: null,
    plot: {
      plotText: null,
      language: null,
      __typename: "Plot",
    },
  },
  {
    _id: "625fc4718994f20f439f1717",
    id: "tt19731776",
    ratingsSummary: {
      aggregateRating: null,
      voteCount: 0,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: null,
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Comedy",
          id: "Comedy",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "RiffTrax: The Dark Knight",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "RiffTrax: The Dark Knight",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2008,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: {
      day: 9,
      month: 12,
      year: 2008,
      __typename: "ReleaseDate",
    },
    runtime: null,
    series: null,
    meterRanking: null,
    plot: null,
  },
  {
    _id: "61e5be3ed735dff3f9500f89",
    id: "tt4494606",
    ratingsSummary: {
      aggregateRating: null,
      voteCount: 0,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: null,
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Comedy",
          id: "Comedy",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "The Dark Knight: Not So Serious",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "The Dark Knight: Not So Serious",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2009,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: {
      day: null,
      month: 5,
      year: 2009,
      __typename: "ReleaseDate",
    },
    runtime: {
      seconds: 3480,
      __typename: "Runtime",
    },
    series: null,
    meterRanking: null,
    plot: {
      plotText: {
        plainText:
          "The ultimate Dark Knight parody. It spoofs many of the major scenes from the movie. This comedy film was shot on the University of Illinois campus.",
        __typename: "Markdown",
      },
      language: {
        id: "en-US",
        __typename: "DisplayableLanguage",
      },
      __typename: "Plot",
    },
  },
  {
    _id: "61e59f6dd8f3c0931e4897cb",
    id: "tt1345836",
    ratingsSummary: {
      aggregateRating: 8.4,
      voteCount: 1822376,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: {
      id: "rm834516224",
      width: 486,
      height: 720,
      url: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_.jpg",
      caption: {
        plainText:
          "Morgan Freeman, Gary Oldman, Christian Bale, Michael Caine, Matthew Modine, Anne Hathaway, Marion Cotillard, and Joseph Gordon-Levitt in The Dark Knight Rises (2012)",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "Action",
          __typename: "Genre",
        },
        {
          text: "Crime",
          id: "Crime",
          __typename: "Genre",
        },
        {
          text: "Drama",
          id: "Drama",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "The Dark Knight Rises",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "The Dark Knight Rises",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2012,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: {
      day: 20,
      month: 7,
      year: 2012,
      __typename: "ReleaseDate",
    },
    runtime: {
      seconds: 9840,
      __typename: "Runtime",
    },
    series: null,
    meterRanking: {
      currentRank: 292,
      rankChange: {
        changeDirection: "UP",
        difference: 66,
        __typename: "MeterRankChange",
      },
      __typename: "TitleMeterRanking",
    },
    plot: {
      plotText: {
        plainText:
          "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
        __typename: "Markdown",
      },
      language: {
        id: "en-US",
        __typename: "DisplayableLanguage",
      },
      __typename: "Plot",
    },
  },
  {
    _id: "61e5bf04971a4a15d6503ed7",
    id: "tt4653714",
    ratingsSummary: {
      aggregateRating: 5.4,
      voteCount: 11,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: null,
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Comedy",
          id: "Comedy",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "The Dark Knight Falls",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "The Dark Knight Falls",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2015,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: {
      day: 18,
      month: 2,
      year: 2015,
      __typename: "ReleaseDate",
    },
    runtime: {
      seconds: 3720,
      __typename: "Runtime",
    },
    series: null,
    meterRanking: null,
    plot: {
      plotText: {
        plainText:
          "The sequel to The Dark Knight: Not So Serious finds the self-centered and thickheaded Batman pitted against Bane, an unstoppable stud who is hell-bent on forcing Gotham's citizens to get physically fit.",
        __typename: "Markdown",
      },
      language: {
        id: "en-US",
        __typename: "DisplayableLanguage",
      },
      __typename: "Plot",
    },
  },
  {
    _id: "61e5a55ed8f3c0931e4a1585",
    id: "tt14490204",
    ratingsSummary: {
      aggregateRating: null,
      voteCount: 0,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: {
      id: "rm4195664385",
      width: 1280,
      height: 1920,
      url: "https://m.media-amazon.com/images/M/MV5BMDNlNzgzMGYtNWRhZi00YmNiLTllYzItZTdiMTQ5NTBlNzFjXkEyXkFqcGdeQXVyMTMxNDM0Nzgz._V1_.jpg",
      caption: {
        plainText: "Vijay Kumar in Gimbago the Dark Knight (2017)",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Horror",
          id: "Horror",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "Gimbago the Dark Knight",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Gimbago the Dark Knight",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2017,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: {
      day: 21,
      month: 9,
      year: 2017,
      __typename: "ReleaseDate",
    },
    runtime: null,
    series: null,
    meterRanking: null,
    plot: null,
  },
  {
    _id: "61e5bdf1a66e5964234ffab3",
    id: "tt4430982",
    ratingsSummary: {
      aggregateRating: null,
      voteCount: 0,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: null,
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "Action",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "Batman: The Dark Knight Beyond",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Batman: The Dark Knight Beyond",
      __typename: "TitleText",
    },
    releaseYear: null,
    releaseDate: null,
    runtime: null,
    series: null,
    meterRanking: null,
    plot: {
      plotText: null,
      language: null,
      __typename: "Plot",
    },
  },
  {
    _id: "61e581eb909c2ca781417de5",
    id: "tt0147505",
    ratingsSummary: {
      aggregateRating: 2.2,
      voteCount: 193,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: {
      id: "rm3800635904",
      width: 520,
      height: 699,
      url: "https://m.media-amazon.com/images/M/MV5BZWFlZGYzMDUtNWIxNC00MzA1LWE5OTItZGVhZjEzMDg4NzE5XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_.jpg",
      caption: {
        plainText: "Sinbad: The Battle of the Dark Knights (1998)",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Adventure",
          id: "Adventure",
          __typename: "Genre",
        },
        {
          text: "Fantasy",
          id: "Fantasy",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "Sinbad: The Battle of the Dark Knights",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "Sinbad: The Battle of the Dark Knights",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 1998,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: {
      day: 11,
      month: 6,
      year: 1998,
      __typename: "ReleaseDate",
    },
    runtime: {
      seconds: 5400,
      __typename: "Runtime",
    },
    series: null,
    meterRanking: null,
    plot: {
      plotText: {
        plainText:
          "Young Anthony and his grandfather read a magical book about their ancestor Sinbad and become participants in it. Sinbad and wizard Sage must stop evil wizard Bophisto and his minion Nimbus from obtaining the key to all knowledge.",
        __typename: "Markdown",
      },
      language: {
        id: "en-US",
        __typename: "DisplayableLanguage",
      },
      __typename: "Plot",
    },
  },
  {
    _id: "61e5be4d8a5a6a599f5014a5",
    id: "tt4504908",
    ratingsSummary: {
      aggregateRating: null,
      voteCount: 0,
      __typename: "RatingsSummary",
    },
    episodes: null,
    primaryImage: {
      id: "rm2964985344",
      width: 1000,
      height: 1415,
      url: "https://m.media-amazon.com/images/M/MV5BNjNiNDgyZmEtYTU4Zi00NDhlLTkyNWItOWUwODVlOGFhODhkXkEyXkFqcGdeQXVyNjc1NDAxNTA@._V1_.jpg",
      caption: {
        plainText: "The Dark Knight: Knightfall - Part Three (2014)",
        __typename: "Markdown",
      },
      __typename: "Image",
    },
    titleType: {
      text: "Movie",
      id: "movie",
      isSeries: false,
      isEpisode: false,
      __typename: "TitleType",
    },
    genres: {
      genres: [
        {
          text: "Action",
          id: "Action",
          __typename: "Genre",
        },
        {
          text: "Adventure",
          id: "Adventure",
          __typename: "Genre",
        },
        {
          text: "Drama",
          id: "Drama",
          __typename: "Genre",
        },
        {
          text: "Romance",
          id: "Romance",
          __typename: "Genre",
        },
        {
          text: "Thriller",
          id: "Thriller",
          __typename: "Genre",
        },
      ],
      __typename: "Genres",
    },
    titleText: {
      text: "The Dark Knight: Knightfall - Part Three",
      __typename: "TitleText",
    },
    originalTitleText: {
      text: "The Dark Knight: Knightfall - Part Three",
      __typename: "TitleText",
    },
    releaseYear: {
      year: 2014,
      endYear: null,
      __typename: "YearRange",
    },
    releaseDate: {
      day: 28,
      month: 12,
      year: 2014,
      __typename: "ReleaseDate",
    },
    runtime: {
      seconds: 6120,
      __typename: "Runtime",
    },
    series: null,
    meterRanking: null,
    plot: {
      plotText: {
        plainText:
          "Crimson's grip tightens as his plans come to life, and the only ones who can stop him are Reclaimer and the Defenders.",
        __typename: "Markdown",
      },
      language: {
        id: "en-US",
        __typename: "DisplayableLanguage",
      },
      __typename: "Plot",
    },
  },
];
const searchBy = data.map(convertToMovie);

export default searchBy;
