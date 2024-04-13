import Movie from "./MovieDataModel";
import convertToMovie from "./utils";

class MoviesApi {
  constructor() {}

  baseUrl: string = "https://moviesdatabase.p.rapidapi.com";
  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce5b38e66cmsh602fa4174c0ede4p1653bfjsn77edad1c59b2",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  // Search by term
  async searchByTerm(searchTerm: string): Promise<Movie[]> {
    if (searchTerm === "dark knight") {
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
      return data.map(convertToMovie);
    }
    return [];
    // const searchUrl = `${this.baseUrl}/titles/search/title/${searchTerm}?exact=false&info=base_info&titleType=movie`;
    // const response = await fetch(searchUrl, this.options);
    // const results = await response.json();
    // return results.results.map(convertToMovie);
  }

  // Sesrch By genre
  async searchByGenre(
    genre: string,
    searchTerm: string | null
  ): Promise<Movie[]> {
    if (genre === "Action") {
      const mockResult = [
        {
          _id: "61e583cd8a5a6a599f41eaff",
          id: "tt0325980",
          primaryImage: {
            id: "rm2487103488",
            width: 671,
            height: 1000,
            url: "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            caption: {
              plainText:
                "Johnny Depp, Geoffrey Rush, Orlando Bloom, and Keira Knightley in Pirates of the Caribbean: The Curse of the Black Pearl (2003)",
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
          titleText: {
            text: "Pirates of the Caribbean: The Curse of the Black Pearl",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Pirates of the Caribbean: The Curse of the Black Pearl",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2003,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 14,
            month: 8,
            year: 2003,
            __typename: "ReleaseDate",
          },
          position: 157,
        },
        {
          _id: "61e5846ca66e596423420feb",
          id: "tt0383574",
          primaryImage: {
            id: "rm914135296",
            width: 450,
            height: 666,
            url: "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_.jpg",
            caption: {
              plainText:
                "Johnny Depp, Orlando Bloom, and Keira Knightley in Pirates of the Caribbean: Dead Man's Chest (2006)",
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
          titleText: {
            text: "Pirates of the Caribbean: Dead Man's Chest",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Pirates of the Caribbean: Dead Man's Chest",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2006,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 13,
            month: 7,
            year: 2006,
            __typename: "ReleaseDate",
          },
          position: 40,
        },
        {
          _id: "61e584cecffb8f2faa42251b",
          id: "tt0418279",
          primaryImage: {
            id: "rm1443106304",
            width: 1012,
            height: 1500,
            url: "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            caption: {
              plainText:
                "Peter Cullen, Shia LaBeouf, and Megan Fox in Transformers (2007)",
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
          titleText: {
            text: "Transformers",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Transformers",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2007,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 4,
            month: 7,
            year: 2007,
            __typename: "ReleaseDate",
          },
          position: 136,
        },
        {
          _id: "61e5c1128a5a6a599f50beef",
          id: "tt5095030",
          primaryImage: {
            id: "rm1166494976",
            width: 1688,
            height: 2500,
            url: "https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            caption: {
              plainText:
                "Michael Douglas, Michelle Pfeiffer, Laurence Fishburne, Walton Goggins, Michael Peña, Paul Rudd, Evangeline Lilly, and Hannah John-Kamen in Ant-Man and the Wasp (2018)",
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
          titleText: {
            text: "Ant-Man and the Wasp",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Ant-Man and the Wasp",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2018,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 18,
            month: 7,
            year: 2018,
            __typename: "ReleaseDate",
          },
          position: 171,
        },
        {
          _id: "61e59f6dd8f3c0931e4897cb",
          id: "tt1345836",
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
          position: 35,
        },
        {
          _id: "61e583bbe1a8ddbd9641e629",
          id: "tt0317705",
          primaryImage: {
            id: "rm915381504",
            width: 1800,
            height: 2666,
            url: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg",
            caption: {
              plainText:
                "Samuel L. Jackson, Holly Hunter, Jason Lee, Craig T. Nelson, Brad Bird, Sarah Vowell, and Spencer Fox in The Incredibles (2004)",
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
          titleText: {
            text: "The Incredibles",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "The Incredibles",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2004,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 24,
            month: 11,
            year: 2004,
            __typename: "ReleaseDate",
          },
          position: 164,
        },
        {
          _id: "61e5ad5b971a4a15d64c0df3",
          id: "tt1677720",
          primaryImage: {
            id: "rm4286860032",
            width: 2764,
            height: 4096,
            url: "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
            caption: {
              plainText:
                "Steven Spielberg, Ben Mendelsohn, George Michael, Simon Pegg, Mark Rylance, Perdita Weeks, Kamara Benjamin Barnett, Mandy June Turpin, T.J. Miller, Lena Waithe, Stephen Mitchell, Neet Mohan, Win Morisaki, Elliot Barnes-Worrell, Kae Alexander, Sarah Sharman, Robert Gilbert, Raed Abbas, Letitia Wright, Tye Sheridan, Asan N'Jie, Hannah John-Kamen, Cara Theobold, Olivia Cooke, Alphonso Austin, Amy Clare Beales, Jane Leaney, Kathryn Wilder, and Philip Zhao in Ready Player One (2018)",
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
          titleText: {
            text: "Ready Player One",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Ready Player One",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2018,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 29,
            month: 3,
            year: 2018,
            __typename: "ReleaseDate",
          },
          position: 178,
        },
        {
          _id: "61e5ba9d8a5a6a599f4f33d3",
          id: "tt3731562",
          primaryImage: {
            id: "rm1591321345",
            width: 420,
            height: 623,
            url: "https://m.media-amazon.com/images/M/MV5BZDg0OGM1NWEtNDEwOC00OTE2LTliZWEtNzg1MTZkNjFlMmNhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
            caption: {
              plainText: "Kong: Skull Island (2017)",
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
          titleText: {
            text: "Kong: Skull Island",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Kong: Skull Island",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2017,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 9,
            month: 3,
            year: 2017,
            __typename: "ReleaseDate",
          },
          position: 193,
        },
        {
          _id: "61e5c95bcffb8f2faa52b8fd",
          id: "tt7975244",
          primaryImage: {
            id: "rm2583596545",
            width: 6072,
            height: 9000,
            url: "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            caption: {
              plainText:
                "Jack Black, Kevin Hart, Dwayne Johnson, and Karen Gillan in Jumanji: The Next Level (2019)",
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
          titleText: {
            text: "Jumanji: The Next Level",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Jumanji: The Next Level",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2019,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 5,
            month: 12,
            year: 2019,
            __typename: "ReleaseDate",
          },
          position: 99,
        },
        {
          _id: "61e5b072cffb8f2faa4cc80b",
          id: "tt1981115",
          primaryImage: {
            id: "rm1847122688",
            width: 770,
            height: 1100,
            url: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg",
            caption: {
              plainText:
                "Anthony Hopkins, Natalie Portman, Christopher Eccleston, Tadanobu Asano, Idris Elba, Ray Stevenson, Tom Hiddleston, Zachary Levi, Chris Hemsworth, and Jaimie Alexander in Thor: The Dark World (2013)",
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
          titleText: {
            text: "Thor: The Dark World",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Thor: The Dark World",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2013,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 31,
            month: 10,
            year: 2013,
            __typename: "ReleaseDate",
          },
          position: 161,
        },
        {
          _id: "61e58170d735dff3f94163f3",
          id: "tt0107290",
          primaryImage: {
            id: "rm3913805824",
            width: 667,
            height: 1000,
            url: "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
            caption: {
              plainText: "Jurassic Park (1993)",
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
          titleText: {
            text: "Jurassic Park",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Jurassic Park",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 1993,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 30,
            month: 9,
            year: 1993,
            __typename: "ReleaseDate",
          },
          position: 33,
        },
        {
          _id: "61e5c6d9d735dff3f952219b",
          id: "tt6320628",
          primaryImage: {
            id: "rm952737537",
            width: 6072,
            height: 9000,
            url: "https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
            caption: {
              plainText: "Spider-Man: Far from Home (2019)",
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
          titleText: {
            text: "Spider-Man: Far from Home",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Spider-Man: Far from Home",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2019,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 4,
            month: 7,
            year: 2019,
            __typename: "ReleaseDate",
          },
          position: 30,
        },
        {
          _id: "61e5842ee1a8ddbd9642013b",
          id: "tt0360717",
          primaryImage: {
            id: "rm2524386304",
            width: 2689,
            height: 3981,
            url: "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            caption: {
              plainText: "Andy Serkis and Naomi Watts in King Kong (2005)",
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
          titleText: {
            text: "King Kong",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "King Kong",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2005,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 14,
            month: 12,
            year: 2005,
            __typename: "ReleaseDate",
          },
          position: 197,
        },
        {
          _id: "61e588bbcffb8f2faa430535",
          id: "tt0770828",
          primaryImage: {
            id: "rm2035131904",
            width: 680,
            height: 1005,
            url: "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_.jpg",
            caption: {
              plainText: "Henry Cavill in Man of Steel (2013)",
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
          titleText: {
            text: "Man of Steel",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Man of Steel",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2013,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 20,
            month: 6,
            year: 2013,
            __typename: "ReleaseDate",
          },
          position: 151,
        },
        {
          _id: "61e58442ef99b1c54342057f",
          id: "tt0367882",
          primaryImage: {
            id: "rm2683075328",
            width: 1000,
            height: 1500,
            url: "https://m.media-amazon.com/images/M/MV5BZDIzNzM5MDUtZmI5MC00NGQ5LWFlNzEtYzE3ODIxNDI3ZmNhXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_.jpg",
            caption: {
              plainText:
                "Harrison Ford, Karen Allen, Cate Blanchett, Shia LaBeouf, and Andre Alexsen in Indiana Jones and the Kingdom of the Crystal Skull (2008)",
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
          titleText: {
            text: "Indiana Jones and the Kingdom of the Crystal Skull",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Indiana Jones and the Kingdom of the Crystal Skull",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2008,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 22,
            month: 5,
            year: 2008,
            __typename: "ReleaseDate",
          },
          position: 105,
        },
        {
          _id: "61e5d1f48a5a6a599f54cae9",
          id: "tt6791350",
          primaryImage: {
            id: "rm4101910785",
            width: 886,
            height: 1312,
            url: "https://m.media-amazon.com/images/M/MV5BMDgxOTdjMzYtZGQxMS00ZTAzLWI4Y2UtMTQzN2VlYjYyZWRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            caption: {
              plainText:
                "Vin Diesel, Bradley Cooper, Sean Gunn, Chris Pratt, Zoe Saldana, Dave Bautista, Karen Gillan, Pom Klementieff, and Maria Bakalova in Guardians of the Galaxy Vol. 3 (2023)",
              __typename: "Markdown",
            },
            __typename: "Image",
          },
          titleType: {
            displayableProperty: {
              value: {
                plainText: "",
                __typename: "Markdown",
              },
              __typename: "DisplayableTitleTypeProperty",
            },
            text: "Movie",
            id: "movie",
            isSeries: false,
            isEpisode: false,
            categories: [
              {
                value: "movie",
                __typename: "TitleTypeCategory",
              },
            ],
            canHaveEpisodes: false,
            __typename: "TitleType",
          },
          titleText: {
            text: "Guardians of the Galaxy Vol. 3",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Guardians of the Galaxy Vol. 3",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2023,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 5,
            month: 5,
            year: 2023,
            __typename: "ReleaseDate",
          },
          position: 91,
        },
        {
          _id: "61e5b991909c2ca7814ef27b",
          id: "tt3501632",
          primaryImage: {
            id: "rm1413491712",
            width: 1382,
            height: 2048,
            url: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
            caption: {
              plainText:
                "Jeff Goldblum, Anthony Hopkins, Cate Blanchett, Idris Elba, Mark Ruffalo, Karl Urban, Tom Hiddleston, Chris Hemsworth, and Tessa Thompson in Thor: Ragnarok (2017)",
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
          titleText: {
            text: "Thor: Ragnarok",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Thor: Ragnarok",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2017,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 26,
            month: 10,
            year: 2017,
            __typename: "ReleaseDate",
          },
          position: 88,
        },
        {
          _id: "61e5aee0d735dff3f94c69bb",
          id: "tt1825683",
          primaryImage: {
            id: "rm172972800",
            width: 1382,
            height: 2048,
            url: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
            caption: {
              plainText:
                "Angela Bassett, Forest Whitaker, Isaach De Bankolé, Martin Freeman, Michael B. Jordan, Andy Serkis, Chadwick Boseman, Danai Gurira, Lupita Nyong'o, Daniel Kaluuya, and Letitia Wright in Black Panther (2018)",
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
          titleText: {
            text: "Black Panther",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Black Panther",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2018,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 14,
            month: 2,
            year: 2018,
            __typename: "ReleaseDate",
          },
          position: 15,
        },
        {
          _id: "61e5d793971a4a15d6562c15",
          id: "tt6878882",
          primaryImage: {
            id: "rm3749007360",
            width: 857,
            height: 1200,
            url: "https://m.media-amazon.com/images/M/MV5BOTViMmI4ZTEtMzY0Zi00NjMwLWJhMzAtMmU2OTE4N2M4MzI4XkEyXkFqcGdeQXVyNjc2NjA2NTE@._V1_.jpg",
            caption: {
              plainText: "Hong hai xing dong (2018)",
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
          titleText: {
            text: "Hong hai xing dong",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Hong hai xing dong",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2018,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 16,
            month: 2,
            year: 2018,
            __typename: "ReleaseDate",
          },
          position: 190,
        },
        {
          _id: "61e5c2a3a66e596423511be9",
          id: "tt5433138",
          primaryImage: {
            id: "rm2544353793",
            width: 1579,
            height: 2500,
            url: "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
            caption: {
              plainText:
                "Charlize Theron, Vin Diesel, Jordana Brewster, Sung Kang, Ludacris, Michelle Rodriguez, Tyrese Gibson, John Cena, and Nathalie Emmanuel in F9 (2021)",
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
          titleText: {
            text: "Fast & Furious 9",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "F9",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2021,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 8,
            month: 7,
            year: 2021,
            __typename: "ReleaseDate",
          },
          position: 131,
        },
        {
          _id: "61e59b19cffb8f2faa477fb1",
          id: "tt1270797",
          primaryImage: {
            id: "rm873889536",
            width: 675,
            height: 1000,
            url: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg",
            caption: {
              plainText: "Tom Hardy in Venom (2018)",
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
          titleText: {
            text: "Venom",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Venom",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2018,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 4,
            month: 10,
            year: 2018,
            __typename: "ReleaseDate",
          },
          position: 87,
        },
        {
          _id: "61e5b35dd735dff3f94d807d",
          id: "tt2283362",
          primaryImage: {
            id: "rm1932347904",
            width: 1012,
            height: 1500,
            url: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            caption: {
              plainText:
                "Jack Black, Kevin Hart, Dwayne Johnson, Mark Knapton, and Karen Gillan in Jumanji: Welcome to the Jungle (2017)",
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
          titleText: {
            text: "Jumanji: Welcome to the Jungle",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Jumanji: Welcome to the Jungle",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2017,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 21,
            month: 12,
            year: 2017,
            __typename: "ReleaseDate",
          },
          position: 53,
        },
        {
          _id: "61e58199909c2ca781416bf5",
          id: "tt0119567",
          primaryImage: {
            id: "rm2659587072",
            width: 800,
            height: 1178,
            url: "https://m.media-amazon.com/images/M/MV5BMDFlMmM4Y2QtNDg1ZS00MWVlLTlmODgtZDdhYjY5YjdhN2M0XkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg",
            caption: {
              plainText: "The Lost World: Jurassic Park (1997)",
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
          titleText: {
            text: "The Lost World: Jurassic Park",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "The Lost World: Jurassic Park",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 1997,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 25,
            month: 9,
            year: 1997,
            __typename: "ReleaseDate",
          },
          position: 174,
        },
        {
          _id: "61e5905ce1a8ddbd9644d9b1",
          id: "tt10872600",
          primaryImage: {
            id: "rm3936939521",
            width: 2699,
            height: 4000,
            url: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
            caption: {
              plainText:
                "Willem Dafoe, Alfred Molina, Jamie Foxx, Rhys Ifans, Benedict Cumberbatch, Zendaya, and Tom Holland in Spider-Man: No Way Home (2021)",
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
          titleText: {
            text: "Spider-Man: No Way Home",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Spider-Man: No Way Home",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2021,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 16,
            month: 12,
            year: 2021,
            __typename: "ReleaseDate",
          },
          position: 7,
        },
        {
          _id: "61e58f08cffb8f2faa448559",
          id: "tt10648342",
          primaryImage: {
            id: "rm3968995329",
            width: 1688,
            height: 2500,
            url: "https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            caption: {
              plainText:
                "Russell Crowe, Natalie Portman, Christian Bale, Taika Waititi, Chris Hemsworth, Dave Bautista, and Tessa Thompson in Thor: Love and Thunder (2022)",
              __typename: "Markdown",
            },
            __typename: "Image",
          },
          titleType: {
            text: "Movie",
            id: "movie",
            isSeries: false,
            isEpisode: false,
            categories: [
              {
                value: "movie",
                __typename: "TitleTypeCategory",
              },
            ],
            canHaveEpisodes: false,
            __typename: "TitleType",
          },
          titleText: {
            text: "Thor: Love and Thunder",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Thor: Love and Thunder",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2022,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 8,
            month: 7,
            year: 2022,
            __typename: "ReleaseDate",
          },
          position: 115,
        },
        {
          _id: "61e5a213a66e59642349406b",
          id: "tt1392170",
          primaryImage: {
            id: "rm2868031744",
            width: 1382,
            height: 2048,
            url: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg",
            caption: {
              plainText: "Jennifer Lawrence in The Hunger Games (2012)",
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
          titleText: {
            text: "The Hunger Games",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "The Hunger Games",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2012,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 21,
            month: 3,
            year: 2012,
            __typename: "ReleaseDate",
          },
          position: 143,
        },
        {
          _id: "61e5b310d735dff3f94d6d8b",
          id: "tt2250912",
          primaryImage: {
            id: "rm3491180544",
            width: 674,
            height: 1024,
            url: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_.jpg",
            caption: {
              plainText: "Spider-Man: Homecoming (2017)",
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
          titleText: {
            text: "Spider-Man: Homecoming",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Spider-Man: Homecoming",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2017,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 6,
            month: 7,
            year: 2017,
            __typename: "ReleaseDate",
          },
          position: 77,
        },
        {
          _id: "61e59cb5ef99b1c54347e77f",
          id: "tt1298650",
          primaryImage: {
            id: "rm212908032",
            width: 1114,
            height: 1650,
            url: "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
            caption: {
              plainText:
                "Johnny Depp, Geoffrey Rush, Penélope Cruz, and Ian McShane in Pirates of the Caribbean: On Stranger Tides (2011)",
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
          titleText: {
            text: "Pirates of the Caribbean: On Stranger Tides",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Pirates of the Caribbean: On Stranger Tides",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2011,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 19,
            month: 5,
            year: 2011,
            __typename: "ReleaseDate",
          },
          position: 43,
        },
        {
          _id: "61e5b676d8f3c0931e4e3625",
          id: "tt2820852",
          primaryImage: {
            id: "rm3501718272",
            width: 1579,
            height: 2500,
            url: "https://m.media-amazon.com/images/M/MV5BMTQxOTA2NDUzOV5BMl5BanBnXkFtZTgwNzY2MTMxMzE@._V1_.jpg",
            caption: {
              plainText: "Fast & Furious 7 (2015)",
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
          titleText: {
            text: "Fast & Furious 7",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Fast & Furious 7",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2015,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 1,
            month: 4,
            year: 2015,
            __typename: "ReleaseDate",
          },
          position: 11,
        },
        {
          _id: "61e5acdbef99b1c5434beeb3",
          id: "tt1630029",
          primaryImage: {
            id: "rm92486145",
            width: 900,
            height: 1289,
            url: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg",
            caption: {
              plainText:
                "Zoe Saldana, Sam Worthington, Bailey Bass, and Jamie Flatters in Avatar - La via dell'acqua (2022)",
              __typename: "Markdown",
            },
            __typename: "Image",
          },
          titleType: {
            text: "Movie",
            id: "movie",
            isSeries: false,
            isEpisode: false,
            categories: [
              {
                value: "movie",
                __typename: "TitleTypeCategory",
              },
            ],
            canHaveEpisodes: false,
            __typename: "TitleType",
          },
          titleText: {
            text: "Avatar: The Way of Water",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Avatar: The Way of Water",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2022,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 14,
            month: 12,
            year: 2022,
            __typename: "ReleaseDate",
          },
          position: 3,
        },
        {
          _id: "61e5b7248a5a6a599f4e6027",
          id: "tt2975590",
          primaryImage: {
            id: "rm2302675456",
            width: 1823,
            height: 2700,
            url: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            caption: {
              plainText:
                "Ben Affleck and Henry Cavill in Batman v Superman: Dawn of Justice (2016)",
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
          titleText: {
            text: "Batman v Superman: Dawn of Justice",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Batman v Superman: Dawn of Justice",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2016,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 24,
            month: 3,
            year: 2016,
            __typename: "ReleaseDate",
          },
          position: 79,
        },
        {
          _id: "61e5ba07cffb8f2faa4f0d19",
          id: "tt3606756",
          primaryImage: {
            id: "rm985091584",
            width: 1086,
            height: 1609,
            url: "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_.jpg",
            caption: {
              plainText:
                "Samuel L. Jackson, Holly Hunter, Craig T. Nelson, Brad Bird, Michelle Rodriguez, Sarah Vowell, Eli Fucile, Mina Sundwall, Clarke Wolfe, Gillian Flynn, and Huck Milner in Incredibles 2 (2018)",
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
          titleText: {
            text: "Incredibles 2",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Incredibles 2",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2018,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 27,
            month: 6,
            year: 2018,
            __typename: "ReleaseDate",
          },
          position: 22,
        },
        {
          _id: "61e5b8b1ef99b1c5434ebc27",
          id: "tt3315342",
          primaryImage: {
            id: "rm2555988736",
            width: 520,
            height: 780,
            url: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
            caption: {
              plainText:
                "Hugh Jackman, Ryan Sturz, and Anthony Escobar in Logan (2017)",
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
          titleText: {
            text: "Logan",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Logan",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2017,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 2,
            month: 3,
            year: 2017,
            __typename: "ReleaseDate",
          },
          position: 173,
        },
        {
          _id: "61e5d849cffb8f2faa565415",
          id: "tt8041270",
          primaryImage: {
            id: "rm2874285825",
            width: 1294,
            height: 2048,
            url: "https://m.media-amazon.com/images/M/MV5BNTNhYWExODctNmJjNi00MmU0LWJlY2EtZjg0ZmMxNDY1MWY1XkEyXkFqcGdeQXVyMTQ2NzY0MTM5._V1_.jpg",
            caption: {
              plainText:
                "Jeff Goldblum, Laura Dern, Sam Neill, Bryce Dallas Howard, Chris Pratt, DeWanda Wise, and Isabella Sermon in Jurassic World: Dominion (2022)",
              __typename: "Markdown",
            },
            __typename: "Image",
          },
          titleType: {
            text: "Movie",
            id: "movie",
            isSeries: false,
            isEpisode: false,
            categories: [
              {
                value: "movie",
                __typename: "TitleTypeCategory",
              },
            ],
            canHaveEpisodes: false,
            __typename: "TitleType",
          },
          titleText: {
            text: "Jurassic World: Dominion",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Jurassic World: Dominion",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2022,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 10,
            month: 6,
            year: 2022,
            __typename: "ReleaseDate",
          },
          position: 52,
        },
        {
          _id: "61e5844d909c2ca781420787",
          id: "tt0371746",
          primaryImage: {
            id: "rm1544850432",
            width: 1382,
            height: 2048,
            url: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
            caption: {
              plainText:
                "Jeff Bridges, Robert Downey Jr., Gwyneth Paltrow, Leslie Bibb, Terrence Howard, Sayed Badreya, Paul Bettany, Peter Billingsley, Clark Gregg, Bill Smitrovich, Faran Tahir, and Shaun Toub in Iron Man (2008)",
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
          titleText: {
            text: "Iron Man",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Iron Man",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2008,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 1,
            month: 5,
            year: 2008,
            __typename: "ReleaseDate",
          },
          position: 187,
        },
        {
          _id: "61e585208a5a6a599f4238e3",
          id: "tt0448157",
          primaryImage: {
            id: "rm871864576",
            width: 450,
            height: 669,
            url: "https://m.media-amazon.com/images/M/MV5BMTgyMzc4ODU3NV5BMl5BanBnXkFtZTcwNjk5Mzc1MQ@@._V1_.jpg",
            caption: {
              plainText: "Will Smith in Hancock (2008)",
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
          titleText: {
            text: "Hancock",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Hancock",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2008,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 9,
            month: 7,
            year: 2008,
            __typename: "ReleaseDate",
          },
          position: 166,
        },
        {
          _id: "61e5af6bef99b1c5434c8847",
          id: "tt1877830",
          primaryImage: {
            id: "rm2474894849",
            width: 1382,
            height: 2048,
            url: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
            caption: {
              plainText:
                "Paul Dano, Colin Farrell, Robert Pattinson, and Zoë Kravitz in The Batman (2022)",
              __typename: "Markdown",
            },
            __typename: "Image",
          },
          titleType: {
            text: "Movie",
            id: "movie",
            isSeries: false,
            isEpisode: false,
            categories: [
              {
                value: "movie",
                __typename: "TitleTypeCategory",
              },
            ],
            canHaveEpisodes: false,
            __typename: "TitleType",
          },
          titleText: {
            text: "The Batman",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "The Batman",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2022,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 4,
            month: 3,
            year: 2022,
            __typename: "ReleaseDate",
          },
          position: 114,
        },
        {
          _id: "61e58465a66e596423420e49",
          id: "tt0381061",
          primaryImage: {
            id: "rm3667992064",
            width: 1000,
            height: 1487,
            url: "https://m.media-amazon.com/images/M/MV5BMDI5ZWJhOWItYTlhOC00YWNhLTlkNzctNDU5YTI1M2E1MWZhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
            caption: {
              plainText:
                "Judi Dench, Simon Abkarian, Ade, Urbano Barberini, Tom Chadbon, Tsai Chin, Jesper Christensen, Daniel Craig, Giancarlo Giannini, Ludger Pistor, Richard Sammel, Claudio Santamaria, Clemens Schick, Darwin Shaw, Jeffrey Wright, Caterina Murino, Eva Green, and Sebastien Foucan in Casino Royale (2006)",
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
          titleText: {
            text: "Casino Royale",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Casino Royale",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2006,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 23,
            month: 11,
            year: 2006,
            __typename: "ReleaseDate",
          },
          position: 175,
        },
        {
          _id: "61e5819a95801a78bc416c85",
          id: "tt0121766",
          primaryImage: {
            id: "rm4094016256",
            width: 1152,
            height: 1536,
            url: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg",
            caption: {
              plainText:
                "Samuel L. Jackson, Ewan McGregor, Natalie Portman, Frank Oz, Ian McDiarmid, and Hayden Christensen in Star Wars: Episode III - Revenge of the Sith (2005)",
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
          titleText: {
            text: "Star Wars: Episode III - Revenge of the Sith",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Star Wars: Episode III - Revenge of the Sith",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2005,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 18,
            month: 5,
            year: 2005,
            __typename: "ReleaseDate",
          },
          position: 82,
        },
        {
          _id: "61e5898ea66e596423433615",
          id: "tt0848228",
          primaryImage: {
            id: "rm3955117056",
            width: 800,
            height: 1184,
            url: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
            caption: {
              plainText:
                "Samuel L. Jackson, Robert Downey Jr., Chris Evans, Scarlett Johansson, Jeremy Renner, Mark Ruffalo, and Chris Hemsworth in The Avengers (2012)",
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
          titleText: {
            text: "The Avengers",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "The Avengers",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2012,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 25,
            month: 4,
            year: 2012,
            __typename: "ReleaseDate",
          },
          position: 10,
        },
        {
          _id: "61e59f71e1a8ddbd96489857",
          id: "tt13462900",
          primaryImage: {
            id: "rm813751809",
            width: 400,
            height: 540,
            url: "https://m.media-amazon.com/images/M/MV5BNzdhODZhYzEtZjcxNy00MGYzLTlmZjAtZGYwOWVhOThlY2M1XkEyXkFqcGdeQXVyNDM1Nzc0MTI@._V1_.jpg",
            caption: {
              plainText: "Zhang jin hu (2021)",
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
          titleText: {
            text: "Zhang jin hu",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Zhang jin hu",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2021,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 30,
            month: 9,
            year: 2021,
            __typename: "ReleaseDate",
          },
          position: 70,
        },
        {
          _id: "61e5bc9eb597b91eb94fa927",
          id: "tt4154796",
          primaryImage: {
            id: "rm2775147008",
            width: 1382,
            height: 2048,
            url: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
            caption: {
              plainText:
                "Don Cheadle, Robert Downey Jr., Josh Brolin, Bradley Cooper, Chris Evans, Scarlett Johansson, Brie Larson, Jeremy Renner, Paul Rudd, Mark Ruffalo, Chris Hemsworth, Danai Gurira, and Karen Gillan in Avengers: Endgame (2019)",
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
          titleText: {
            text: "Avengers: Endgame",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Avengers: Endgame",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2019,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 24,
            month: 4,
            year: 2019,
            __typename: "ReleaseDate",
          },
          position: 2,
        },
        {
          _id: "61e5afac971a4a15d64c9a33",
          id: "tt1905041",
          primaryImage: {
            id: "rm3465715968",
            width: 1012,
            height: 1500,
            url: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_.jpg",
            caption: {
              plainText: "Furious 6 (2013)",
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
          titleText: {
            text: "Fast & Furious 6",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Furious 6",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2013,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 23,
            month: 5,
            year: 2013,
            __typename: "ReleaseDate",
          },
          position: 107,
        },
        {
          _id: "61e5b022a66e5964234cb3c5",
          id: "tt1951266",
          primaryImage: {
            id: "rm2654923776",
            width: 1347,
            height: 2048,
            url: "https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_.jpg",
            caption: {
              plainText:
                "Jennifer Lawrence in The Hunger Games: Mockingjay - Part 2 (2015)",
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
          titleText: {
            text: "The Hunger Games: Mockingjay - Part 2",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "The Hunger Games: Mockingjay - Part 2",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2015,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 18,
            month: 11,
            year: 2015,
            __typename: "ReleaseDate",
          },
          position: 160,
        },
        {
          _id: "61e58520d735dff3f94238cb",
          id: "tt0449088",
          primaryImage: {
            id: "rm3688995072",
            width: 450,
            height: 666,
            url: "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_.jpg",
            caption: {
              plainText:
                "Johnny Depp in Pirates of the Caribbean: At World's End (2007)",
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
          titleText: {
            text: "Pirates of the Caribbean: At World's End",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Pirates of the Caribbean: At World's End",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2007,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 23,
            month: 5,
            year: 2007,
            __typename: "ReleaseDate",
          },
          position: 59,
        },
        {
          _id: "61e5b02195801a78bc4cb9fb",
          id: "tt1951265",
          primaryImage: {
            id: "rm4250584832",
            width: 1347,
            height: 2048,
            url: "https://m.media-amazon.com/images/M/MV5BMTcxNDI2NDAzNl5BMl5BanBnXkFtZTgwODM3MTc2MjE@._V1_.jpg",
            caption: {
              plainText:
                "Jennifer Lawrence in The Hunger Games: Mockingjay - Part 1 (2014)",
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
          titleText: {
            text: "The Hunger Games: Mockingjay - Part 1",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "The Hunger Games: Mockingjay - Part 1",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2014,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 19,
            month: 11,
            year: 2014,
            __typename: "ReleaseDate",
          },
          position: 120,
        },
        {
          _id: "61e5a11cd735dff3f949030f",
          id: "tt1375666",
          primaryImage: {
            id: "rm3426651392",
            width: 700,
            height: 1037,
            url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
            caption: {
              plainText:
                "Leonardo DiCaprio, Tom Berenger, Michael Caine, Lukas Haas, Marion Cotillard, Joseph Gordon-Levitt, Tom Hardy, Elliot Page, Ken Watanabe, and Dileep Rao in Inception (2010)",
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
          titleText: {
            text: "Inception",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Inception",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2010,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 16,
            month: 7,
            year: 2010,
            __typename: "ReleaseDate",
          },
          position: 80,
        },
        {
          _id: "61e5b4e7ef99b1c5434dda9d",
          id: "tt2488496",
          primaryImage: {
            id: "rm527556608",
            width: 2194,
            height: 3240,
            url: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg",
            caption: {
              plainText:
                "Harrison Ford, Anthony Daniels, Carrie Fisher, Michael Giacchino, Peter Mayhew, Nigel Godrich, Oscar Isaac, Brian Herring, Lupita Nyong'o, Dave Chapman, Adam Driver, Gwendoline Christie, John Boyega, and Daisy Ridley in Star Wars: Episode VII - The Force Awakens (2015)",
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
          titleText: {
            text: "Star Wars: Episode VII - The Force Awakens",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Star Wars: Episode VII - The Force Awakens",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2015,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 16,
            month: 12,
            year: 2015,
            __typename: "ReleaseDate",
          },
          position: 5,
        },
        {
          _id: "61e5c037d735dff3f950881b",
          id: "tt4912910",
          primaryImage: {
            id: "rm1408844288",
            width: 959,
            height: 1500,
            url: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg",
            caption: {
              plainText:
                "Tom Cruise, Ving Rhames, Henry Cavill, Rebecca Ferguson, and Simon Pegg in Mission: Impossible - Fallout (2018)",
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
          titleText: {
            text: "Mission: Impossible - Fallout",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Mission: Impossible - Fallout",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2018,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 2,
            month: 8,
            year: 2018,
            __typename: "ReleaseDate",
          },
          position: 103,
        },
        {
          _id: "61e5a5b1b597b91eb94a24d7",
          id: "tt1454468",
          primaryImage: {
            id: "rm741451264",
            width: 680,
            height: 1006,
            url: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_.jpg",
            caption: {
              plainText: "Gravity (2013)",
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
          titleText: {
            text: "Gravity",
            __typename: "TitleText",
          },
          originalTitleText: {
            text: "Gravity",
            __typename: "TitleText",
          },
          releaseYear: {
            year: 2013,
            endYear: null,
            __typename: "YearRange",
          },
          releaseDate: {
            day: 3,
            month: 10,
            year: 2013,
            __typename: "ReleaseDate",
          },
          position: 122,
        },
      ];

      const moviesToReturn = mockResult.map(convertToMovie);

      if (searchTerm)
        return moviesToReturn.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return moviesToReturn;
    }
    return [];
    // const searchUrl = `${this.baseUrl}/titles/random?limit=50&list=top_boxoffice_200&genre=${genre}`;
    // const response = await fetch(searchUrl, this.options);
    // const results = await response.json();
    // return results.results.map(convertToMovie);
  }

  // random
  async searchRandom(searchTerm: string | null): Promise<Movie[]> {
    const randomMovie = [
      {
        _id: "61e58ff3e1a8ddbd9644bfed",
        id: "tt1080016",
        primaryImage: {
          id: "rm3967587840",
          width: 550,
          height: 800,
          url: "https://m.media-amazon.com/images/M/MV5BMTMzNDkzMTcyOV5BMl5BanBnXkFtZTcwNDIzMjM2MQ@@._V1_.jpg",
          caption: {
            plainText:
              "John Leguizamo, Denis Leary, Ray Romano, and Chris Wedge in Ice Age: Dawn of the Dinosaurs (2009)",
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
        titleText: {
          text: "Ice Age: Dawn of the Dinosaurs",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Ice Age: Dawn of the Dinosaurs",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2009,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 1,
          month: 7,
          year: 2009,
          __typename: "ReleaseDate",
        },
        position: 75,
      },
      {
        _id: "61e58ae7d735dff3f94386e5",
        id: "tt0974015",
        primaryImage: {
          id: "rm1061640448",
          width: 4050,
          height: 6000,
          url: "https://m.media-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          caption: {
            plainText:
              "Ben Affleck, Jeremy Irons, Amy Adams, Henry Cavill, Jason Momoa, Gal Gadot, Ezra Miller, and Ray Fisher in Justice League (2017)",
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
        titleText: {
          text: "Justice League",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Justice League",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2017,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 16,
          month: 11,
          year: 2017,
          __typename: "ReleaseDate",
        },
        position: 154,
      },
      {
        _id: "61e5b8b1ef99b1c5434ebc27",
        id: "tt3315342",
        primaryImage: {
          id: "rm2555988736",
          width: 520,
          height: 780,
          url: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
          caption: {
            plainText:
              "Hugh Jackman, Ryan Sturz, and Anthony Escobar in Logan (2017)",
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
        titleText: {
          text: "Logan",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Logan",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2017,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 2,
          month: 3,
          year: 2017,
          __typename: "ReleaseDate",
        },
        position: 173,
      },
      {
        _id: "61e5bab2d735dff3f94f3777",
        id: "tt3748528",
        primaryImage: {
          id: "rm465044224",
          width: 864,
          height: 1280,
          url: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_.jpg",
          caption: {
            plainText:
              "James Earl Jones, Forest Whitaker, Wen Jiang, Felicity Jones, Diego Luna, Ben Mendelsohn, Alan Tudyk, Donnie Yen, Riz Ahmed, and Abrey Steve in Rogue One (2016)",
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
        titleText: {
          text: "Star Wars: Rogue One",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Rogue One",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2016,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 14,
          month: 12,
          year: 2016,
          __typename: "ReleaseDate",
        },
        position: 41,
      },
      {
        _id: "61e5b991909c2ca7814ef27b",
        id: "tt3501632",
        primaryImage: {
          id: "rm1413491712",
          width: 1382,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
          caption: {
            plainText:
              "Jeff Goldblum, Anthony Hopkins, Cate Blanchett, Idris Elba, Mark Ruffalo, Karl Urban, Tom Hiddleston, Chris Hemsworth, and Tessa Thompson in Thor: Ragnarok (2017)",
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
        titleText: {
          text: "Thor: Ragnarok",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Thor: Ragnarok",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2017,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 26,
          month: 10,
          year: 2017,
          __typename: "ReleaseDate",
        },
        position: 88,
      },
      {
        _id: "61e5a11cd735dff3f949030f",
        id: "tt1375666",
        primaryImage: {
          id: "rm3426651392",
          width: 700,
          height: 1037,
          url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
          caption: {
            plainText:
              "Leonardo DiCaprio, Tom Berenger, Michael Caine, Lukas Haas, Marion Cotillard, Joseph Gordon-Levitt, Tom Hardy, Elliot Page, Ken Watanabe, and Dileep Rao in Inception (2010)",
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
        titleText: {
          text: "Inception",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Inception",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2010,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 16,
          month: 7,
          year: 2010,
          __typename: "ReleaseDate",
        },
        position: 80,
      },
      {
        _id: "61e584cad735dff3f9422523",
        id: "tt0417741",
        primaryImage: {
          id: "rm282560512",
          width: 1328,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_.jpg",
          caption: {
            plainText:
              "Michael Gambon, Rupert Grint, Daniel Radcliffe, and Emma Watson in Harry Potter and the Half-Blood Prince (2009)",
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
        titleText: {
          text: "Harry Potter en de halfbloed prins",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Harry Potter and the Half-Blood Prince",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2009,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 15,
          month: 7,
          year: 2009,
          __typename: "ReleaseDate",
        },
        position: 66,
      },
      {
        _id: "61e5844d909c2ca781420787",
        id: "tt0371746",
        primaryImage: {
          id: "rm1544850432",
          width: 1382,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg",
          caption: {
            plainText:
              "Jeff Bridges, Robert Downey Jr., Gwyneth Paltrow, Leslie Bibb, Terrence Howard, Sayed Badreya, Paul Bettany, Peter Billingsley, Clark Gregg, Bill Smitrovich, Faran Tahir, and Shaun Toub in Iron Man (2008)",
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
        titleText: {
          text: "Iron Man",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Iron Man",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2008,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 1,
          month: 5,
          year: 2008,
          __typename: "ReleaseDate",
        },
        position: 187,
      },
      {
        _id: "61e5c95bcffb8f2faa52b8fd",
        id: "tt7975244",
        primaryImage: {
          id: "rm2583596545",
          width: 6072,
          height: 9000,
          url: "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
          caption: {
            plainText:
              "Jack Black, Kevin Hart, Dwayne Johnson, and Karen Gillan in Jumanji: The Next Level (2019)",
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
        titleText: {
          text: "Jumanji: The Next Level",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Jumanji: The Next Level",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2019,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 5,
          month: 12,
          year: 2019,
          __typename: "ReleaseDate",
        },
        position: 99,
      },
      {
        _id: "61e5842ee1a8ddbd9642013b",
        id: "tt0360717",
        primaryImage: {
          id: "rm2524386304",
          width: 2689,
          height: 3981,
          url: "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          caption: {
            plainText: "Andy Serkis and Naomi Watts in King Kong (2005)",
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
        titleText: {
          text: "King Kong",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "King Kong",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2005,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 14,
          month: 12,
          year: 2005,
          __typename: "ReleaseDate",
        },
        position: 197,
      },
      {
        _id: "61e5b072cffb8f2faa4cc80b",
        id: "tt1981115",
        primaryImage: {
          id: "rm1847122688",
          width: 770,
          height: 1100,
          url: "https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_.jpg",
          caption: {
            plainText:
              "Anthony Hopkins, Natalie Portman, Christopher Eccleston, Tadanobu Asano, Idris Elba, Ray Stevenson, Tom Hiddleston, Zachary Levi, Chris Hemsworth, and Jaimie Alexander in Thor: The Dark World (2013)",
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
        titleText: {
          text: "Thor: The Dark World",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Thor: The Dark World",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2013,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 31,
          month: 10,
          year: 2013,
          __typename: "ReleaseDate",
        },
        position: 161,
      },
      {
        _id: "61e5c8c1b597b91eb9529249",
        id: "tt6718170",
        primaryImage: {
          id: "rm1249126401",
          width: 690,
          height: 1024,
          url: "https://m.media-amazon.com/images/M/MV5BYTc4MTdlOGYtNzk3YS00ZTg0LTkyNTUtMjMzYmI3MjViNWE0XkEyXkFqcGdeQXVyMTUzMTQ0NzQz._V1_.jpg",
          caption: {
            plainText:
              "Jack Black, Charlie Day, Chris Pratt, Seth Rogen, Keegan-Michael Key, and Anya Taylor-Joy in Super Mario Bros: Film (2023)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Super Mario Bros: Film",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Super Mario Bros. Movie",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2023,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 26,
          month: 5,
          year: 2023,
          __typename: "ReleaseDate",
        },
        position: 18,
      },
      {
        _id: "61e58327a66e59642341c539",
        id: "tt0266543",
        primaryImage: {
          id: "rm3313243136",
          width: 2015,
          height: 3000,
          url: "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          caption: {
            plainText: "Albert Brooks in Finding Nemo (2003)",
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
        titleText: {
          text: "Finding Nemo",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Finding Nemo",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2003,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 27,
          month: 11,
          year: 2003,
          __typename: "ReleaseDate",
        },
        position: 64,
      },
      {
        _id: "61e5a338cffb8f2faa498b1b",
        id: "tt1411697",
        primaryImage: {
          id: "rm3944266496",
          width: 1384,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMTM2MTM4MzY2OV5BMl5BanBnXkFtZTcwNjQ3NzI4NA@@._V1_.jpg",
          caption: {
            plainText:
              "Bradley Cooper, Zach Galifianakis, Ed Helms, and Crystal the Monkey in The Hangover Part II (2011)",
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
        titleText: {
          text: "The Hangover Part II",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Hangover Part II",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2011,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 26,
          month: 5,
          year: 2011,
          __typename: "ReleaseDate",
        },
        position: 186,
      },
      {
        _id: "61e583e7b597b91eb941f159",
        id: "tt0335345",
        primaryImage: {
          id: "rm778452224",
          width: 580,
          height: 870,
          url: "https://m.media-amazon.com/images/M/MV5BNDY1N2IyYWMtZTY4OS00OGM1LTkxNmUtOTQzYmM5MmI2YmVmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
          caption: {
            plainText: "Jim Caviezel in The Passion of the Christ (2004)",
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
        titleText: {
          text: "The Passion of the Christ",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Passion of the Christ",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2004,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 1,
          month: 4,
          year: 2004,
          __typename: "ReleaseDate",
        },
        position: 176,
      },
      {
        _id: "61e5bca18a5a6a599f4faf61",
        id: "tt4154664",
        primaryImage: {
          id: "rm123368960",
          width: 1688,
          height: 2500,
          url: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_.jpg",
          caption: {
            plainText: "Brie Larson in Captain Marvel (2019)",
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
        titleText: {
          text: "Captain Marvel",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Captain Marvel",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2019,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 6,
          month: 3,
          year: 2019,
          __typename: "ReleaseDate",
        },
        position: 31,
      },
      {
        _id: "61e5ad4c909c2ca7814c0a01",
        id: "tt1673434",
        primaryImage: {
          id: "rm659205632",
          width: 1382,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMTcyMzUyMzY1OF5BMl5BanBnXkFtZTcwNDQ4ODk1OA@@._V1_.jpg",
          caption: {
            plainText:
              "Kristen Stewart in The Twilight Saga: Breaking Dawn - Part 2 (2012)",
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
        titleText: {
          text: "The Twilight Saga: Breaking Dawn - Part 2",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Twilight Saga: Breaking Dawn - Part 2",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2012,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 14,
          month: 11,
          year: 2012,
          __typename: "ReleaseDate",
        },
        position: 89,
      },
      {
        _id: "61e5b515b597b91eb94de0e7",
        id: "tt2527336",
        primaryImage: {
          id: "rm574104832",
          width: 800,
          height: 1185,
          url: "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_.jpg",
          caption: {
            plainText:
              "Anthony Daniels, Carrie Fisher, Mark Hamill, Oscar Isaac, Brian Herring, Domhnall Gleeson, Florian Robin, Jimmy Vee, Dave Chapman, David R. Grant, Adam Driver, Gwendoline Christie, John Boyega, James Cox, Kelly Marie Tran, Daisy Ridley, and Joonas Suotamo in Star Wars: Episode VIII - The Last Jedi (2017)",
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
        titleText: {
          text: "Star Wars: Episode VIII - The Last Jedi",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Star Wars: Episode VIII - The Last Jedi",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2017,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 13,
          month: 12,
          year: 2017,
          __typename: "ReleaseDate",
        },
        position: 17,
      },
      {
        _id: "61e5afac971a4a15d64c9a33",
        id: "tt1905041",
        primaryImage: {
          id: "rm3465715968",
          width: 1012,
          height: 1500,
          url: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_.jpg",
          caption: {
            plainText: "Furious 6 (2013)",
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
        titleText: {
          text: "Fast & Furious 6",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Furious 6",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2013,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 23,
          month: 5,
          year: 2013,
          __typename: "ReleaseDate",
        },
        position: 107,
      },
      {
        _id: "61e5c037d735dff3f950881b",
        id: "tt4912910",
        primaryImage: {
          id: "rm1408844288",
          width: 959,
          height: 1500,
          url: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg",
          caption: {
            plainText:
              "Tom Cruise, Ving Rhames, Henry Cavill, Rebecca Ferguson, and Simon Pegg in Mission: Impossible - Fallout (2018)",
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
        titleText: {
          text: "Mission: Impossible - Fallout",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Mission: Impossible - Fallout",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2018,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 2,
          month: 8,
          year: 2018,
          __typename: "ReleaseDate",
        },
        position: 103,
      },
      {
        _id: "61e5b9a48a5a6a599f4ef897",
        id: "tt3521164",
        primaryImage: {
          id: "rm618728448",
          width: 1086,
          height: 1609,
          url: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg",
          caption: {
            plainText:
              "Dwayne Johnson, Stephen Kearin, Temuera Morrison, Alan Tudyk, Nicole Scherzinger, Any Gabrielly, and Auli'i Cravalho in Moana (2016)",
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
        titleText: {
          text: "Vaiana",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Moana",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2016,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 30,
          month: 11,
          year: 2016,
          __typename: "ReleaseDate",
        },
        position: 147,
      },
      {
        _id: "61e58199a66e596423416c03",
        id: "tt0119654",
        primaryImage: {
          id: "rm2364027904",
          width: 1000,
          height: 1500,
          url: "https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
          caption: {
            plainText: "Tommy Lee Jones and Will Smith in Men in Black (1997)",
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
        titleText: {
          text: "Men in Black",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Men in Black",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 1997,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 24,
          month: 7,
          year: 1997,
          __typename: "ReleaseDate",
        },
        position: 184,
      },
      {
        _id: "61e58e1a909c2ca781444cdb",
        id: "tt1049413",
        primaryImage: {
          id: "rm2582959360",
          width: 704,
          height: 1060,
          url: "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_.jpg",
          caption: {
            plainText:
              "Ed Asner, Christopher Plummer, John Ratzenberger, Mark Andrews, Bob Bergen, Brenda Chapman, Donald Fullilove, Teresa Ganzel, Jess Harnell, Sherry Lynn, Laraine Newman, Josh Cooley, and Jordan Nagai in Up (2009)",
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
        titleText: {
          text: "Up",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Up",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2009,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 7,
          month: 10,
          year: 2009,
          __typename: "ReleaseDate",
        },
        position: 129,
      },
      {
        _id: "61e5bca0b597b91eb94fa9a7",
        id: "tt4154756",
        primaryImage: {
          id: "rm4044245504",
          width: 1382,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
          caption: {
            plainText:
              "Don Cheadle, Robert Downey Jr., Josh Brolin, Vin Diesel, Paul Bettany, Bradley Cooper, Chris Evans, Scarlett Johansson, Elizabeth Olsen, Chris Pratt, Mark Ruffalo, Zoe Saldana, Benedict Wong, Anthony Mackie, Chris Hemsworth, Dave Bautista, Benedict Cumberbatch, Chadwick Boseman, Sebastian Stan, Danai Gurira, Karen Gillan, Pom Klementieff, Letitia Wright, and Tom Holland in Avengers: Infinity War (2018)",
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
        titleText: {
          text: "Avengers: Infinity War",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Avengers: Infinity War",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2018,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 25,
          month: 4,
          year: 2018,
          __typename: "ReleaseDate",
        },
        position: 6,
      },
      {
        _id: "61e58442ef99b1c54342057f",
        id: "tt0367882",
        primaryImage: {
          id: "rm2683075328",
          width: 1000,
          height: 1500,
          url: "https://m.media-amazon.com/images/M/MV5BZDIzNzM5MDUtZmI5MC00NGQ5LWFlNzEtYzE3ODIxNDI3ZmNhXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_.jpg",
          caption: {
            plainText:
              "Harrison Ford, Karen Allen, Cate Blanchett, Shia LaBeouf, and Andre Alexsen in Indiana Jones and the Kingdom of the Crystal Skull (2008)",
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
        titleText: {
          text: "Indiana Jones and the Kingdom of the Crystal Skull",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Indiana Jones and the Kingdom of the Crystal Skull",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2008,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 22,
          month: 5,
          year: 2008,
          __typename: "ReleaseDate",
        },
        position: 105,
      },
      {
        _id: "61e58c0bd735dff3f943ce21",
        id: "tt1014759",
        primaryImage: {
          id: "rm1086033408",
          width: 408,
          height: 604,
          url: "https://m.media-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_.jpg",
          caption: {
            plainText:
              "Johnny Depp and Alan Rickman in Alice in Wonderland (2010)",
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
        titleText: {
          text: "Alice in Wonderland",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Alice in Wonderland",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2010,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 5,
          month: 3,
          year: 2010,
          __typename: "ReleaseDate",
        },
        position: 48,
      },
      {
        _id: "61e5905ce1a8ddbd9644d9b1",
        id: "tt10872600",
        primaryImage: {
          id: "rm3936939521",
          width: 2699,
          height: 4000,
          url: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
          caption: {
            plainText:
              "Willem Dafoe, Alfred Molina, Jamie Foxx, Rhys Ifans, Benedict Cumberbatch, Zendaya, and Tom Holland in Spider-Man: No Way Home (2021)",
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
        titleText: {
          text: "Spider-Man: No Way Home",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Spider-Man: No Way Home",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2021,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 16,
          month: 12,
          year: 2021,
          __typename: "ReleaseDate",
        },
        position: 7,
      },
      {
        _id: "61e5a455971a4a15d649d1f5",
        id: "tt1431045",
        primaryImage: {
          id: "rm351021568",
          width: 2000,
          height: 3000,
          url: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          caption: {
            plainText: "Ryan Reynolds in Deadpool (2016)",
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
        titleText: {
          text: "Deadpool",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Deadpool",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2016,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 11,
          month: 2,
          year: 2016,
          __typename: "ReleaseDate",
        },
        position: 109,
      },
      {
        _id: "61e5b4e7ef99b1c5434dda9d",
        id: "tt2488496",
        primaryImage: {
          id: "rm527556608",
          width: 2194,
          height: 3240,
          url: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg",
          caption: {
            plainText:
              "Harrison Ford, Anthony Daniels, Carrie Fisher, Michael Giacchino, Peter Mayhew, Nigel Godrich, Oscar Isaac, Brian Herring, Lupita Nyong'o, Dave Chapman, Adam Driver, Gwendoline Christie, John Boyega, and Daisy Ridley in Star Wars: Episode VII - The Force Awakens (2015)",
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
        titleText: {
          text: "Star Wars: Episode VII - The Force Awakens",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Star Wars: Episode VII - The Force Awakens",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2015,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 16,
          month: 12,
          year: 2015,
          __typename: "ReleaseDate",
        },
        position: 5,
      },
      {
        _id: "61e59e40909c2ca7814848f7",
        id: "tt1324999",
        primaryImage: {
          id: "rm2517941248",
          width: 1382,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BODgxNDE0OTAzOF5BMl5BanBnXkFtZTcwNzcwODE2Ng@@._V1_.jpg",
          caption: {
            plainText:
              "Kristen Stewart and Robert Pattinson in The Twilight Saga: Breaking Dawn - Part 1 (2011)",
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
        titleText: {
          text: "The Twilight Saga: Breaking Dawn - Part 1",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Twilight Saga: Breaking Dawn - Part 1",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2011,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 16,
          month: 11,
          year: 2011,
          __typename: "ReleaseDate",
        },
        position: 133,
      },
      {
        _id: "61e5b1adb597b91eb94d1161",
        id: "tt2103281",
        primaryImage: {
          id: "rm1894698240",
          width: 2025,
          height: 3000,
          url: "https://m.media-amazon.com/images/M/MV5BMTgwODk3NDc1N15BMl5BanBnXkFtZTgwNTc1NjQwMjE@._V1_.jpg",
          caption: {
            plainText: "Andy Serkis in Dawn of the Planet of the Apes (2014)",
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
        titleText: {
          text: "Dawn of the Planet of the Apes",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Dawn of the Planet of the Apes",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2014,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 17,
          month: 7,
          year: 2014,
          __typename: "ReleaseDate",
        },
        position: 135,
      },
      {
        _id: "61e5ae87d8f3c0931e4c552f",
        id: "tt1790809",
        primaryImage: {
          id: "rm337719808",
          width: 1382,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_.jpg",
          caption: {
            plainText:
              "Johnny Depp, Javier Bardem, Geoffrey Rush, Kaya Scodelario, and Brenton Thwaites in Pirates of the Caribbean: Dead Men Tell No Tales (2017)",
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
        titleText: {
          text: "Pirates of the Caribbean: Salazar's Revenge",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Pirates of the Caribbean: Dead Men Tell No Tales",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2017,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 24,
          month: 5,
          year: 2017,
          __typename: "ReleaseDate",
        },
        position: 101,
      },
      {
        _id: "61e5821cb597b91eb941892b",
        id: "tt0167260",
        primaryImage: {
          id: "rm584928512",
          width: 800,
          height: 1185,
          url: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
          caption: {
            plainText:
              "Liv Tyler, Sean Astin, Elijah Wood, Viggo Mortensen, Ian McKellen, and Andy Serkis in The Lord of the Rings: The Return of the King (2003)",
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
        titleText: {
          text: "The Lord of the Rings: The Return of the King",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Lord of the Rings: The Return of the King",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2003,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 17,
          month: 12,
          year: 2003,
          __typename: "ReleaseDate",
        },
        position: 28,
      },
      {
        _id: "61e5d793971a4a15d6562c15",
        id: "tt6878882",
        primaryImage: {
          id: "rm3749007360",
          width: 857,
          height: 1200,
          url: "https://m.media-amazon.com/images/M/MV5BOTViMmI4ZTEtMzY0Zi00NjMwLWJhMzAtMmU2OTE4N2M4MzI4XkEyXkFqcGdeQXVyNjc2NjA2NTE@._V1_.jpg",
          caption: {
            plainText: "Hong hai xing dong (2018)",
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
        titleText: {
          text: "Hong hai xing dong",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Hong hai xing dong",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2018,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 16,
          month: 2,
          year: 2018,
          __typename: "ReleaseDate",
        },
        position: 190,
      },
      {
        _id: "61e585add8f3c0931e42590b",
        id: "tt0499549",
        primaryImage: {
          id: "rm843615744",
          width: 510,
          height: 755,
          url: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
          caption: {
            plainText: "Zoe Saldana and Sam Worthington in Avatar (2009)",
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
        titleText: {
          text: "Avatar",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Avatar",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2009,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 17,
          month: 12,
          year: 2009,
          __typename: "ReleaseDate",
        },
        position: 1,
      },
      {
        _id: "61e5856ccffb8f2faa42494b",
        id: "tt0477347",
        primaryImage: {
          id: "rm4022701312",
          width: 1402,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMTQyOTM4MDMxN15BMl5BanBnXkFtZTcwODg5NTQzMw@@._V1_.jpg",
          caption: {
            plainText:
              "Robin Williams, Ben Stiller, Patrick Gallagher, Mizuo Peck, Rami Malek, and Crystal the Monkey in Night at the Museum (2006)",
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
        titleText: {
          text: "Night at the Museum",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Night at the Museum",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2006,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 15,
          month: 2,
          year: 2007,
          __typename: "ReleaseDate",
        },
        position: 191,
      },
      {
        _id: "61e59f71e1a8ddbd96489857",
        id: "tt13462900",
        primaryImage: {
          id: "rm813751809",
          width: 400,
          height: 540,
          url: "https://m.media-amazon.com/images/M/MV5BNzdhODZhYzEtZjcxNy00MGYzLTlmZjAtZGYwOWVhOThlY2M1XkEyXkFqcGdeQXVyNDM1Nzc0MTI@._V1_.jpg",
          caption: {
            plainText: "Zhang jin hu (2021)",
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
        titleText: {
          text: "Zhang jin hu",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Zhang jin hu",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2021,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 30,
          month: 9,
          year: 2021,
          __typename: "ReleaseDate",
        },
        position: 70,
      },
      {
        _id: "61e5a30c909c2ca781497ed7",
        id: "tt1409024",
        primaryImage: {
          id: "rm3852252672",
          width: 691,
          height: 1024,
          url: "https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_.jpg",
          caption: {
            plainText:
              "Tommy Lee Jones, Will Smith, and Josh Brolin in Men in Black 3 (2012)",
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
        titleText: {
          text: "Men in Black 3",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Men in Black 3",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2012,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 23,
          month: 5,
          year: 2012,
          __typename: "ReleaseDate",
        },
        position: 158,
      },
      {
        _id: "61e5b7248a5a6a599f4e6027",
        id: "tt2975590",
        primaryImage: {
          id: "rm2302675456",
          width: 1823,
          height: 2700,
          url: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          caption: {
            plainText:
              "Ben Affleck and Henry Cavill in Batman v Superman: Dawn of Justice (2016)",
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
        titleText: {
          text: "Batman v Superman: Dawn of Justice",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Batman v Superman: Dawn of Justice",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2016,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 24,
          month: 3,
          year: 2016,
          __typename: "ReleaseDate",
        },
        position: 79,
      },
      {
        _id: "61e58506b597b91eb94232bf",
        id: "tt0438097",
        primaryImage: {
          id: "rm735808512",
          width: 1383,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMjAwODg3OTAxMl5BMl5BanBnXkFtZTcwMjg2NjYyMw@@._V1_.jpg",
          caption: {
            plainText: "Chris Wedge in Ice Age: The Meltdown (2006)",
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
        titleText: {
          text: "Ice Age: The Meltdown",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Ice Age: The Meltdown",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2006,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 29,
          month: 3,
          year: 2006,
          __typename: "ReleaseDate",
        },
        position: 152,
      },
      {
        _id: "61e59cd5ef99b1c54347ef91",
        id: "tt1300854",
        primaryImage: {
          id: "rm520987392",
          width: 770,
          height: 1100,
          url: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg",
          caption: {
            plainText:
              "Don Cheadle, Robert Downey Jr., Gwyneth Paltrow, Guy Pearce, Paul Bettany, Rebecca Hall, and Stephanie Szostak in Iron Man Three (2013)",
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
        titleText: {
          text: "Iron Man Three",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Iron Man Three",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2013,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 24,
          month: 4,
          year: 2013,
          __typename: "ReleaseDate",
        },
        position: 24,
      },
      {
        _id: "61e5a2518a5a6a599f4953af",
        id: "tt1396484",
        primaryImage: {
          id: "rm2985515264",
          width: 2000,
          height: 3000,
          url: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
          caption: {
            plainText: "Bill Skarsgård and Jackson Robert Scott in It (2017)",
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
        titleText: {
          text: "It",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "It",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2017,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 7,
          month: 9,
          year: 2017,
          __typename: "ReleaseDate",
        },
        position: 138,
      },
      {
        _id: "61e58576cffb8f2faa424b97",
        id: "tt0479952",
        primaryImage: {
          id: "rm1398152960",
          width: 710,
          height: 1051,
          url: "https://m.media-amazon.com/images/M/MV5BNzNlYjFmZTMtMGI1OS00YmQwLWI5M2EtMTllNmVhZjAyMmJjXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
          caption: {
            plainText:
              "Jada Pinkett Smith, Chris Rock, David Schwimmer, Ben Stiller, Sacha Baron Cohen, Cedric the Entertainer, John DiMaggio, Tom McGrath, Elisa Gabrielli, Andy Richter, Conrad Vernon, Christopher Knights, and Chris Miller in Madagascar: Escape 2 Africa (2008)",
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
        titleText: {
          text: "Madagascar 2",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Madagascar: Escape 2 Africa",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2008,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 19,
          month: 11,
          year: 2008,
          __typename: "ReleaseDate",
        },
        position: 180,
      },
      {
        _id: "61e5d93a8a5a6a599f56955f",
        id: "tt9362722",
        primaryImage: {
          id: "rm1009725185",
          width: 1299,
          height: 1929,
          url: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
          caption: {
            plainText:
              "Oscar Isaac, Andy Samberg, Jake Johnson, Daniel Kaluuya, Hailee Steinfeld, Karan Soni, Shameik Moore, and Issa Rae in Spider-Man: Across the Spider-Verse (2023)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Spider-Man: Across the Spider-Verse",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Spider-Man: Across the Spider-Verse",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2023,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 1,
          month: 6,
          year: 2023,
          __typename: "ReleaseDate",
        },
        position: 195,
      },
      {
        _id: "61e5b310d735dff3f94d6d8b",
        id: "tt2250912",
        primaryImage: {
          id: "rm3491180544",
          width: 674,
          height: 1024,
          url: "https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_.jpg",
          caption: {
            plainText: "Spider-Man: Homecoming (2017)",
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
        titleText: {
          text: "Spider-Man: Homecoming",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Spider-Man: Homecoming",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2017,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 6,
          month: 7,
          year: 2017,
          __typename: "ReleaseDate",
        },
        position: 77,
      },
      {
        _id: "61e5ba9d8a5a6a599f4f33d3",
        id: "tt3731562",
        primaryImage: {
          id: "rm1591321345",
          width: 420,
          height: 623,
          url: "https://m.media-amazon.com/images/M/MV5BZDg0OGM1NWEtNDEwOC00OTE2LTliZWEtNzg1MTZkNjFlMmNhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
          caption: {
            plainText: "Kong: Skull Island (2017)",
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
        titleText: {
          text: "Kong: Skull Island",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Kong: Skull Island",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2017,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 9,
          month: 3,
          year: 2017,
          __typename: "ReleaseDate",
        },
        position: 193,
      },
      {
        _id: "61e58576d735dff3f9424c2d",
        id: "tt0480249",
        primaryImage: {
          id: "rm2203650560",
          width: 1944,
          height: 2880,
          url: "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          caption: {
            plainText: "Will Smith in I Am Legend (2007)",
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
        titleText: {
          text: "I Am Legend",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "I Am Legend",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2007,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 20,
          month: 12,
          year: 2007,
          __typename: "ReleaseDate",
        },
        position: 188,
      },
      {
        _id: "61e5b443a66e5964234db4dd",
        id: "tt2380307",
        primaryImage: {
          id: "rm585455872",
          width: 1984,
          height: 2835,
          url: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
          caption: {
            plainText:
              "Alfonso Arau, Benjamin Bratt, Alanna Ubach, Gael García Bernal, Dyana Ortelli, Herbert Siguenza, and Anthony Gonzalez in Coco (2017)",
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
        titleText: {
          text: "Coco",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Coco",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2017,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 29,
          month: 11,
          year: 2017,
          __typename: "ReleaseDate",
        },
        position: 96,
      },
      {
        _id: "61e584c1d735dff3f942231d",
        id: "tt0413267",
        primaryImage: {
          id: "rm4214262784",
          width: 1382,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BOTgyMjc3ODk2MV5BMl5BanBnXkFtZTcwMjY0MjEzMw@@._V1_.jpg",
          caption: {
            plainText:
              "Antonio Banderas, Cameron Diaz, Mike Myers, Eddie Murphy, and Conrad Vernon in Shrek the Third (2007)",
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
        titleText: {
          text: "Shrek the Third",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Shrek the Third",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2007,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 6,
          year: 2007,
          __typename: "ReleaseDate",
        },
        position: 98,
      },
      {
        _id: "61e5bf3ed8f3c0931e504d95",
        id: "tt4701660",
        primaryImage: {
          id: "rm3127122432",
          width: 1000,
          height: 1397,
          url: "https://m.media-amazon.com/images/M/MV5BYzQzZGQxZTUtZWZhMC00ODE0LWI3N2EtOThiOTg0ZDYxYjEwXkEyXkFqcGdeQXVyNjU0NzY4ODU@._V1_.jpg",
          caption: {
            plainText:
              "Yuqi Zhang, Chao Deng, Show Lo, and Yun Lin in Mei ren yu (2016)",
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
        titleText: {
          text: "Mei ren yu",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Mei ren yu",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2016,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 8,
          month: 2,
          year: 2016,
          __typename: "ReleaseDate",
        },
        position: 199,
      },
    ];
    const moviesToReturn = randomMovie.map(convertToMovie);

    if (searchTerm)
      return moviesToReturn.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    // const searchUrl = `${this.baseUrl}/titles/random?limit=50&list=top_boxoffice_200`;
    // const response = await fetch(searchUrl, this.options);
    // const results = await response.json();
    // return results.results.map(convertToMovie);
    return moviesToReturn;
  }

  // Get all genres
  async getAllGenres(): Promise<string[]> {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film-Noir",
      "Game-Show",
      "History",
      "Horror",
      "Music",
      "Musical",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  // Get specific movie by id
  async getSpecificMovie(movieId: string): Promise<Movie> {
    const movie = {
      results: {
        _id: "61e5af6bef99b1c5434c8847",
        id: "tt1877830",
        ratingsSummary: {
          aggregateRating: 7.8,
          voteCount: 783243,
          __typename: "RatingsSummary",
        },
        episodes: null,
        primaryImage: {
          id: "rm2474894849",
          width: 1382,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
          caption: {
            plainText:
              "Paul Dano, Colin Farrell, Robert Pattinson, and Zoë Kravitz in The Batman (2022)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
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
          text: "The Batman",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Batman",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2022,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 4,
          month: 3,
          year: 2022,
          __typename: "ReleaseDate",
        },
        runtime: {
          seconds: 10560,
          __typename: "Runtime",
        },
        series: null,
        meterRanking: {
          currentRank: 47,
          rankChange: {
            changeDirection: "DOWN",
            difference: 1,
            __typename: "MeterRankChange",
          },
          __typename: "TitleMeterRanking",
        },
        plot: {
          plotText: {
            plainText:
              "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
            __typename: "Markdown",
          },
          language: {
            id: "en-US",
            __typename: "DisplayableLanguage",
          },
          __typename: "Plot",
        },
      },
    };
    return convertToMovie(movie.results);
    // const searchUrl = `${this.baseUrl}/titles/${movieId}?info=base_info`;
    // const response = await fetch(searchUrl, this.options);
    // const result = await response.json();
    // return convertToMovie(result.results);
  }

  // Get Upcoming
  async getUpcoming(searchTerm: string | null): Promise<Movie[]> {
    const randomMovie = [
      {
        _id: "61e58c6aef99b1c54343e375",
        id: "tt10209920",
        primaryImage: {
          id: "rm882431489",
          width: 8200,
          height: 12300,
          url: "https://m.media-amazon.com/images/M/MV5BNjc5ZGQwNjMtNGI3NC00Yzg3LTk4MjktMDgwYTcyZDhhNmRmXkEyXkFqcGdeQXVyMjE2MzA5MDI@._V1_.jpg",
          caption: {
            plainText: "Alien Wars: Judgement Day (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Alien Wars: Judgement Day",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Alien Wars: Judgement Day",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 29,
          month: 12,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58cf3b597b91eb9440527",
        id: "tt10300396",
        primaryImage: null,
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Untitled Taika Waititi Star Wars Film",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Untitled Taika Waititi Star Wars Film",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2026,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 22,
          month: 5,
          year: 2026,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58e44a66e596423445707",
        id: "tt10521010",
        primaryImage: {
          id: "rm4127568385",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BZWIyNzE3NzEtMGExNS00ZjRkLWJmMTYtMWFlNTNkNDgyNWUzXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Dante Alighieri, Boris Acosta, and Dino Di Durante in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Series",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Series",
          id: "tvSeries",
          isSeries: true,
          isEpisode: false,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: true,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Divine Comedy: Inferno, Purgatory and Paradise",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Divine Comedy: Inferno, Purgatory and Paradise",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58e8f971a4a15d64468f9",
        id: "tt10569934",
        primaryImage: {
          id: "rm1409776385",
          width: 1169,
          height: 1451,
          url: "https://m.media-amazon.com/images/M/MV5BMjE3YjFkOGMtYTIyNy00NTQwLTg0YTItOWM2YjdiMjRlMmY5XkEyXkFqcGdeQXVyMTIyODY5Mjk1._V1_.jpg",
          caption: {
            plainText: "Anthony Hopkins in Those About to Die (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Series",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Series",
          id: "tvSeries",
          isSeries: true,
          isEpisode: false,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: true,
          __typename: "TitleType",
        },
        titleText: {
          text: "Those About to Die",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Those About to Die",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 18,
          month: 7,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58ea278c012aa34446beb",
        id: "tt10579986",
        primaryImage: {
          id: "rm878544897",
          width: 1217,
          height: 1792,
          url: "https://m.media-amazon.com/images/M/MV5BNDFmYWRhYmMtMDBiNS00OWZkLTk3ZmYtODMyZjdlMDFjNWNlXkEyXkFqcGdeQXVyNjA1NjIzMzQ@._V1_.jpg",
          caption: {
            plainText: "Mom's Coming (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Mom's Coming",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Mom's Coming",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 24,
          month: 11,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58ed678c012aa34447885",
        id: "tt10616590",
        primaryImage: {
          id: "rm1024176641",
          width: 1100,
          height: 1500,
          url: "https://m.media-amazon.com/images/M/MV5BNjMxNzRjMzQtOTI3Ny00ZmUyLTg4ZDMtMTA4NzdlNDZlYzhiXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Matteucci and Lalo Cibelli in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Dark Forest: Dante's Sins. Virgil appears.",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Dark Forest: Dante's Sins. Virgil appears.",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58edab597b91eb9447acd",
        id: "tt10617026",
        primaryImage: {
          id: "rm3446649601",
          width: 1100,
          height: 1500,
          url: "https://m.media-amazon.com/images/M/MV5BMDg3MWRlZTEtNmFlMC00NDQ0LWE2ZTQtYjRmNjQwMDNlMjk5XkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Gassman, Armand Mastroianni, Silvia Colloca, Boris Acosta, and Lalo Cibelli in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Beatrice Descends into Limbo. Virgil's Mission",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Beatrice Descends into Limbo. Virgil's Mission",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58ee7b597b91eb9447de9",
        id: "tt10626750",
        primaryImage: {
          id: "rm1443607041",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BMmM3NWZkY2YtODYwNy00MzU3LWFkNjgtNTcwMzU4NWM0YTE2XkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Shirly Brener, Armand Mastroianni, Franco Nero, Silvia Colloca, Boris Acosta, Dino Di Durante, Aldo De Tata, and Lalo Cibelli in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Gate of Hell",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Gate of Hell",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58eefd735dff3f9448043",
        id: "tt10631494",
        primaryImage: {
          id: "rm587641345",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BNjgzNzJjNDctODY2Mi00MTk4LWI4OWItOTdmNmVlOWE2ZTUwXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Armand Mastroianni, Franco Nero, Vittorio Matteucci, Boris Acosta, Aldo De Tata, and Lalo Cibelli in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "First Circle: Limbo",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "First Circle: Limbo",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58f64a66e596423449c45",
        id: "tt10707852",
        primaryImage: {
          id: "rm1476561665",
          width: 1146,
          height: 669,
          url: "https://m.media-amazon.com/images/M/MV5BMTkyMjA3MTMtN2RjMy00YzEzLWEyOGUtYTJlODdlOGEwODEwXkEyXkFqcGdeQXVyMTA1NjUwOTIw._V1_.jpg",
          caption: {
            plainText: "Chris Cutler in Killing Rainbow (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Killing Rainbow",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Killing Rainbow",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 17,
          month: 12,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e58ff1a66e59642344bf67",
        id: "tt10801048",
        primaryImage: null,
        titleType: {
          displayableProperty: {
            value: {
              plainText: "Short",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Short",
          id: "short",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Udesky's Destiny",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Udesky's Destiny",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2025,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 31,
          month: 10,
          year: 2025,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59035909c2ca78144cef3",
        id: "tt10844184",
        primaryImage: {
          id: "rm1730631681",
          width: 1200,
          height: 1800,
          url: "https://m.media-amazon.com/images/M/MV5BYTk4ZDU4NDQtYzVhNS00MDI3LWFkMDYtM2I2YTc0YmJjMTQ1XkEyXkFqcGdeQXVyMzE2NDI5NzI@._V1_.jpg",
          caption: {
            plainText: "Detour 95 (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Detour 95",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Detour 95",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 24,
          month: 10,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e5909a909c2ca78144e7ab",
        id: "tt10911604",
        primaryImage: null,
        titleType: {
          text: "Short",
          id: "short",
          isSeries: false,
          isEpisode: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Ghost Hollow: Another Vermont Urban Legend",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Ghost Hollow: Another Vermont Urban Legend",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2025,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 31,
          month: 10,
          year: 2025,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e590edb597b91eb944fbc9",
        id: "tt10967898",
        primaryImage: {
          id: "rm3487597825",
          width: 5107,
          height: 2160,
          url: "https://m.media-amazon.com/images/M/MV5BNmI0NDY5Y2QtYzU2MC00NzFkLWExYWQtYzJlOTFkYmQyZGYyXkEyXkFqcGdeQXVyODczNDEwMjk@._V1_.jpg",
          caption: {
            plainText: "Kevin Lucero Less in Brought in with the Dust (2025)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Brought in with the Dust",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Brought in with the Dust",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2025,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 31,
          month: 10,
          year: 2025,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59116e1a8ddbd96450773",
        id: "tt10994300",
        primaryImage: {
          id: "rm1494501889",
          width: 679,
          height: 1021,
          url: "https://m.media-amazon.com/images/M/MV5BYWUwMjVhY2ItNThhZC00MzE4LWI3YmItYjNiZmYwZDZiNjcyXkEyXkFqcGdeQXVyMzE2NDI5NzI@._V1_.jpg",
          caption: {
            plainText: "A Figgly Christmas (2025)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "A Figgly Christmas",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "A Figgly Christmas",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2025,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 20,
          month: 11,
          year: 2025,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59206d735dff3f945429f",
        id: "tt11152168",
        primaryImage: {
          id: "rm3805117185",
          width: 720,
          height: 900,
          url: "https://m.media-amazon.com/images/M/MV5BNWViZjhjZjYtZTBkMy00Nzg0LTg1ODgtYjMxNjM3MDJmNWNkXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
          caption: {
            plainText: "Ryan Reynolds and Cailey Fleming in IF (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "IF",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "IF",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 17,
          month: 5,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59228cffb8f2faa454a65",
        id: "tt1117392",
        primaryImage: {
          id: "rm2785331713",
          width: 614,
          height: 800,
          url: "https://m.media-amazon.com/images/M/MV5BNjc3NzI2MDQtYTNiYi00Mjk3LThkMTYtMWI1YTkxNGI4ZGJmXkEyXkFqcGdeQXVyNDI2MTA0OA@@._V1_.jpg",
          caption: {
            plainText: "The Ark and the Aardvark (2026)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Ark and the Aardvark",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Ark and the Aardvark",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2026,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 30,
          month: 4,
          year: 2026,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59287971a4a15d6456263",
        id: "tt11237950",
        primaryImage: {
          id: "rm1272953857",
          width: 1200,
          height: 1772,
          url: "https://m.media-amazon.com/images/M/MV5BY2NiMDkzYmQtNjEyNC00MzU5LWEzOTgtYjI1YzdmOTZiOGNhXkEyXkFqcGdeQXVyMTIzNjI1OTY@._V1_.jpg",
          caption: {
            plainText: "The Accompanist Awakening (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Accompanist Awakening",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Accompanist Awakening",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 20,
          month: 12,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e593bfef99b1c54345ac27",
        id: "tt11443900",
        primaryImage: {
          id: "rm187032065",
          width: 1080,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BYTZlOTU3YjYtZmQ3ZC00NmI4LTg4MWUtODJkMmY5Y2M5ZDAxXkEyXkFqcGdeQXVyMzA4OTQ2Nzg@._V1_.jpg",
          caption: {
            plainText: "Citizen Green (2022)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Citizen Green",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Citizen Green",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2022,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 22,
          month: 4,
          year: 2025,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e593ffef99b1c54345bc41",
        id: "tt11487742",
        primaryImage: null,
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Evil Within",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Evil Within",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2025,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 31,
          month: 10,
          year: 2025,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e595f8909c2ca7814638d3",
        id: "tt11822244",
        primaryImage: {
          id: "rm731067905",
          width: 1074,
          height: 1325,
          url: "https://m.media-amazon.com/images/M/MV5BMDIxNzE0NWItZTJhNi00ZWUyLTgyYzgtMjk5MzkxMjcwZjJjXkEyXkFqcGdeQXVyMTM1NjAwNTI2._V1_.jpg",
          caption: {
            plainText: "Manje Bistre 3 (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Manje Bistre 3",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Manje Bistre 3",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 26,
          month: 7,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59688ef99b1c543465c61",
        id: "tt11916562",
        primaryImage: {
          id: "rm1318739457",
          width: 2000,
          height: 2538,
          url: "https://m.media-amazon.com/images/M/MV5BNmMxMGE3MzUtNjI5Yy00MzI0LTkyMzktYzYyMjhiZjYyYTQ2XkEyXkFqcGdeQXVyMTAwOTI0MjU0._V1_.jpg",
          caption: {
            plainText:
              "Eric Roberts, Richard Tyson, Vernon Wells, and Jimmy Drain in The Dead Rose (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Dead Rose",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Dead Rose",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 30,
          month: 10,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e5972ea66e596423468693",
        id: "tt12030690",
        primaryImage: {
          id: "rm1617412097",
          width: 827,
          height: 1152,
          url: "https://m.media-amazon.com/images/M/MV5BZDQxYWYyYjItYjE0Mi00MDA0LWIwMTQtZmVlODNjYzUxYWEwXkEyXkFqcGdeQXVyNTI4OTM3NDA@._V1_.jpg",
          caption: {
            plainText: "ReVerso (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Bar B Que Blood",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Bar B Que Blood",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 15,
          month: 6,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59730d8f3c0931e468687",
        id: "tt12030750",
        primaryImage: {
          id: "rm1617412097",
          width: 827,
          height: 1152,
          url: "https://m.media-amazon.com/images/M/MV5BZDQxYWYyYjItYjE0Mi00MDA0LWIwMTQtZmVlODNjYzUxYWEwXkEyXkFqcGdeQXVyNTI4OTM3NDA@._V1_.jpg",
          caption: {
            plainText: "ReVerso (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Day after Yesterday",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Day after Yesterday",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 15,
          month: 6,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e5973a95801a78bc468b5f",
        id: "tt12037194",
        primaryImage: {
          id: "rm2850781185",
          width: 1080,
          height: 1350,
          url: "https://m.media-amazon.com/images/M/MV5BNmYzMWVjNmQtNjJjNy00M2Y4LTkzZjQtZWQ5NmYzMjRjMDIzXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
          caption: {
            plainText: "Furiosa: A Mad Max Saga (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Furiosa: A Mad Max Saga",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Furiosa: A Mad Max Saga",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 24,
          month: 5,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e5975278c012aa34468cdb",
        id: "tt12053936",
        primaryImage: {
          id: "rm3428067841",
          width: 1728,
          height: 2304,
          url: "https://m.media-amazon.com/images/M/MV5BODE3NjgwZDMtMGJjOC00MDg3LTkxODktNDFjYTJlYzAwZTAxXkEyXkFqcGdeQXVyMzg0NDUyNw@@._V1_.jpg",
          caption: {
            plainText: "Mike Breyer and Lynne Newton in Eternal Oath (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Eternal Oath",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Eternal Oath",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 25,
          month: 7,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e598048a5a6a599f46bf13",
        id: "tt12175204",
        primaryImage: {
          id: "rm3639325441",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BODA0YmZmNjYtY2RkOS00YjlhLWJjMTgtZjIyZjY2OTJjNThjXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Gassman, Armand Mastroianni, Franco Nero, Boris Acosta, and Christina July Kim in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Cerberus. 3rd Circle: The Gluttons",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Cerberus. 3rd Circle: The Gluttons",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59804ef99b1c54346ba27",
        id: "tt12175180",
        primaryImage: {
          id: "rm671527425",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BNTUyYzY3NjAtYjU2Ny00ZjMyLWJkYTAtZWIzZDEyNWJjNDJiXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Gassman, Hélène Cardona, Armand Mastroianni, Franco Nero, Boris Acosta, and Dino Di Durante in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Minos. 2nd Circle: The Lustful",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Minos. 2nd Circle: The Lustful",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59807909c2ca78146bb4b",
        id: "tt12175236",
        primaryImage: {
          id: "rm2464199425",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BYTA4ODM5MDUtNDY2OC00OWVkLWIxMjEtMmVjYWZhODEzOTg4XkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Gassman, Armand Mastroianni, Franco Nero, Jose Rosete, and Boris Acosta in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Farinata. 6th Circle: Dis - The Heretics",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Farinata. 6th Circle: Dis - The Heretics",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59807971a4a15d646bc2b",
        id: "tt12175230",
        primaryImage: {
          id: "rm4293899009",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BYzI2ZGQ4MDAtNjZiMi00MzI0LWI1YTAtN2Y4NjYxZDJiYTJlXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Gassman, Veronica De Laurentiis, Armand Mastroianni, Franco Nero, and Boris Acosta in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Furies, God's Messenger. 6th Circle: The Heretics",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Furies, God's Messenger. 6th Circle: The Heretics",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e5980a78c012aa3446ba2d",
        id: "tt12175228",
        primaryImage: {
          id: "rm2129572609",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BZDA4MThjNWMtNDE3Yy00YzcwLWEzYzQtMzNhYjBmMzQ2YTkyXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Gassman, Armand Mastroianni, Franco Nero, Boris Acosta, and She in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Phlegyas. 5th Circle: The Wrathful",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Phlegyas. 5th Circle: The Wrathful",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e5980ad735dff3f946bcad",
        id: "tt12175224",
        primaryImage: {
          id: "rm1340977921",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BYTgyYzM2NDYtZTAzYi00ZmM3LTlmYzQtNjQ2OTMwYjQ2ZDAyXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Gassman, Armand Mastroianni, Franco Nero, Gianmario Pagano, and Boris Acosta in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Plutus. 4th Circle: The Avaricious",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Plutus. 4th Circle: The Avaricious",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e5980cd8f3c0931e46bd71",
        id: "tt12175250",
        primaryImage: {
          id: "rm3219239681",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BNDI2YjUxYzYtYWU1ZC00ZjQwLTk5MWYtNzdkNGVjZmRkNjc4XkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Gassman, Armand Mastroianni, and Boris Acosta in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Structure of Hell: Lower and Upper Circles",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Structure of Hell: Lower and Upper Circles",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e5980cef99b1c54346bc03",
        id: "tt12175258",
        primaryImage: {
          id: "rm2883695361",
          width: 792,
          height: 1080,
          url: "https://m.media-amazon.com/images/M/MV5BMWQ0MWRhNDctNWRlZS00MGY4LWE5OTktZmM4MzQxMmJiMjJkXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
          caption: {
            plainText:
              "Vittorio Gassman, Armand Mastroianni, Franco Nero, Jose Rosete, and Boris Acosta in The Divine Comedy: Inferno, Purgatory and Paradise (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Minotaur. 7th Circle: 1st Ring - The Centaurs. The Violent",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Minotaur. 7th Circle: 1st Ring - The Centaurs. The Violent",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 21,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e5981a78c012aa3446be5b",
        id: "tt12188830",
        primaryImage: {
          id: "rm299217665",
          width: 2048,
          height: 1342,
          url: "https://m.media-amazon.com/images/M/MV5BZTFlMGRjY2YtYTU4OS00ZjVlLWJiZjItNmJmZjA2MDgzNzEwXkEyXkFqcGdeQXVyMTg0MTAxMg@@._V1_.jpg",
          caption: {
            plainText: "Fishy (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Series",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Series",
          id: "tvSeries",
          isSeries: true,
          isEpisode: false,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: true,
          __typename: "TitleType",
        },
        titleText: {
          text: "Fishy",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Fishy",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 17,
          month: 6,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59a948a5a6a599f476191",
        id: "tt12617466",
        primaryImage: {
          id: "rm3088505601",
          width: 636,
          height: 900,
          url: "https://m.media-amazon.com/images/M/MV5BZjQ4MzVkYzUtZTY2Yi00YzVkLWFkYTgtZDUwOWUxOWE4NDYxXkEyXkFqcGdeQXVyMjExMjczNDA@._V1_.jpg",
          caption: {
            plainText: "Comic Mafia (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Movie",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Movie",
          id: "tvMovie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Comic Mafia",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Comic Mafia",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 19,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59ae2e1a8ddbd96477339",
        id: "tt12671466",
        primaryImage: {
          id: "rm1231725569",
          width: 1728,
          height: 2626,
          url: "https://m.media-amazon.com/images/M/MV5BZjJhY2NkOWYtMWRlMy00YWE1LTk3ODUtYzAyMjI1NzE3NTc2XkEyXkFqcGdeQXVyODUxNDU2ODE@._V1_.jpg",
          caption: {
            plainText: "The Lost Locket (2025)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Lost Locket",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Lost Locket",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2025,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 15,
          month: 5,
          year: 2025,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59b5eb597b91eb9478e0b",
        id: "tt12752438",
        primaryImage: {
          id: "rm1663648769",
          width: 1638,
          height: 2048,
          url: "https://m.media-amazon.com/images/M/MV5BMjRjMTc4ZTItNzM4Ni00NDkzLTk5YjMtNGRjNDYxMDViNjRkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
          caption: {
            plainText: "Paris 2024: Games of the XXXIII Olympiad (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Mini Series",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Mini Series",
          id: "tvMiniSeries",
          isSeries: true,
          isEpisode: false,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: true,
          __typename: "TitleType",
        },
        titleText: {
          text: "Paris 2024: Games of the XXXIII Olympiad",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Paris 2024: Games of the XXXIII Olympiad",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 24,
          month: 7,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59b6878c012aa34479073",
        id: "tt12759414",
        primaryImage: {
          id: "rm689784065",
          width: 660,
          height: 880,
          url: "https://m.media-amazon.com/images/M/MV5BM2YwMzc1ZmEtMmJmOS00YWMwLTg0MTItOTBiZmIyNWVhZDJmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
          caption: {
            plainText: "2024 UEFA European Football Championship (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Series",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Series",
          id: "tvSeries",
          isSeries: true,
          isEpisode: false,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: true,
          __typename: "TitleType",
        },
        titleText: {
          text: "2024 UEFA European Football Championship",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "2024 UEFA European Football Championship",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: 2024,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 14,
          month: 6,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59bfa971a4a15d647b85b",
        id: "tt12856590",
        primaryImage: {
          id: "rm3604007169",
          width: 2650,
          height: 4096,
          url: "https://m.media-amazon.com/images/M/MV5BYTg5OGQ1NGUtOTg3NS00YzYyLTg3OWUtZDhmOGRmMjdlMzg3XkEyXkFqcGdeQXVyNjIzMTYzMTQ@._V1_.jpg",
          caption: {
            plainText: "Halloween: Season of the Boogeyman (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Halloween: Season of the Boogeyman",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Halloween: Season of the Boogeyman",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 31,
          month: 10,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59bfd971a4a15d647b923",
        id: "tt12861438",
        primaryImage: {
          id: "rm1720314881",
          width: 1252,
          height: 1843,
          url: "https://m.media-amazon.com/images/M/MV5BYjY0NjkxNmItYzgxZi00NzRiLWI2NjItN2EwZTg5ODhhMjA1XkEyXkFqcGdeQXVyMTQ2Nzk4Mzc0._V1_.jpg",
          caption: {
            plainText: "Yi dao tian tang (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Yi dao tian tang",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Yi dao tian tang",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 15,
          month: 7,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59c6995801a78bc47d731",
        id: "tt12937580",
        primaryImage: {
          id: "rm1351853569",
          width: 1728,
          height: 2304,
          url: "https://m.media-amazon.com/images/M/MV5BMDY0N2VmZGYtOWM0My00OTAwLTk1NzktYzE5YWJlOTU4NmMwXkEyXkFqcGdeQXVyMTM5NDM1MDM@._V1_.jpg",
          caption: {
            plainText: "Fawn in Skeletons (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "Video",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Video",
          id: "video",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "video",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Skeletons",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Skeletons",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 20,
          month: 9,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59c6de1a8ddbd9647d5f9",
        id: "tt12937294",
        primaryImage: null,
        titleType: {
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          __typename: "TitleType",
        },
        titleText: {
          text: "Retribution",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Retribution",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2027,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 27,
          month: 11,
          year: 2027,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59c79d735dff3f947d8cd",
        id: "tt12945136",
        primaryImage: null,
        titleType: {
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          __typename: "TitleType",
        },
        titleText: {
          text: "Memories",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Memories",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2027,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 27,
          month: 11,
          year: 2027,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59c9bd8f3c0931e47e243",
        id: "tt12969320",
        primaryImage: {
          id: "rm1739869697",
          width: 600,
          height: 900,
          url: "https://m.media-amazon.com/images/M/MV5BZGRkZDg0NGQtNWU5Yi00NTE4LWI1MjEtNWFjYWE4ZDQzNmRmXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",
          caption: {
            plainText: "Black Myth: Wukong (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "Video Game",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Video Game",
          id: "videoGame",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "gaming",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Black Myth: Wukong",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Black Myth: Wukong",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 20,
          month: 8,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59ca4e1a8ddbd9647e403",
        id: "tt12975102",
        primaryImage: {
          id: "rm3981447425",
          width: 1500,
          height: 2318,
          url: "https://m.media-amazon.com/images/M/MV5BYTZmNGVkZGUtZTllMi00NTE5LTk1MGQtNDZhYWQ0MGI0MWNjXkEyXkFqcGdeQXVyMjE4MzYwMA@@._V1_.jpg",
          caption: {
            plainText:
              "Olivia d'Abo, J.D. Buckwell, Eileen Dietz, Sean Kenney, Laurene Landon, Kelli Maroney, Tracee Cocco, Catherine LaSalle, Bill Victor Arucan, Lilly Ivring, Mark Brenes, and Bailey Sorrel in Staycation (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Staycation",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Staycation",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 15,
          month: 4,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59cefcffb8f2faa47f647",
        id: "tt13026456",
        primaryImage: {
          id: "rm3860478209",
          width: 1170,
          height: 1454,
          url: "https://m.media-amazon.com/images/M/MV5BNDdlYTEyNWEtYmVkOC00MTJiLWEwZmEtZjQ1NTM5N2JlYjUzXkEyXkFqcGdeQXVyNzEwMzUxMzU@._V1_.jpg",
          caption: {
            plainText: "Wild Card (2022)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          text: "TV Series",
          id: "tvSeries",
          isSeries: true,
          isEpisode: false,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: true,
          __typename: "TitleType",
        },
        titleText: {
          text: "Wild Card",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Wild Card",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2022,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 31,
          month: 12,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59cf378c012aa3447f421",
        id: "tt13027112",
        primaryImage: {
          id: "rm3860478209",
          width: 1170,
          height: 1454,
          url: "https://m.media-amazon.com/images/M/MV5BNDdlYTEyNWEtYmVkOC00MTJiLWEwZmEtZjQ1NTM5N2JlYjUzXkEyXkFqcGdeQXVyNzEwMzUxMzU@._V1_.jpg",
          caption: {
            plainText: "Wild Card (2022)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "TV Episode",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          categories: [
            {
              value: "tv",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "The Fallen Fugitive",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "The Fallen Fugitive",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 31,
          month: 12,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59d20cffb8f2faa48028b",
        id: "tt13057182",
        primaryImage: null,
        titleType: {
          text: "TV Episode",
          id: "tvEpisode",
          isSeries: false,
          isEpisode: true,
          __typename: "TitleType",
        },
        titleText: {
          text: "Campsite",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Campsite",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2027,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 27,
          month: 11,
          year: 2027,
          __typename: "ReleaseDate",
        },
      },
      {
        _id: "61e59dd1d8f3c0931e482f1d",
        id: "tt13176330",
        primaryImage: {
          id: "rm2981435393",
          width: 1018,
          height: 1510,
          url: "https://m.media-amazon.com/images/M/MV5BOWY3MjhlMGItY2VmNy00ZTFkLWI4NGQtZjc3ZTg5YjM0NDJjXkEyXkFqcGdeQXVyNTU5NzUwNw@@._V1_.jpg",
          caption: {
            plainText: "Hitpig (2024)",
            __typename: "Markdown",
          },
          __typename: "Image",
        },
        titleType: {
          displayableProperty: {
            value: {
              plainText: "",
              __typename: "Markdown",
            },
            __typename: "DisplayableTitleTypeProperty",
          },
          text: "Movie",
          id: "movie",
          isSeries: false,
          isEpisode: false,
          categories: [
            {
              value: "movie",
              __typename: "TitleTypeCategory",
            },
          ],
          canHaveEpisodes: false,
          __typename: "TitleType",
        },
        titleText: {
          text: "Hitpig",
          __typename: "TitleText",
        },
        originalTitleText: {
          text: "Hitpig",
          __typename: "TitleText",
        },
        releaseYear: {
          year: 2024,
          endYear: null,
          __typename: "YearRange",
        },
        releaseDate: {
          day: 19,
          month: 4,
          year: 2024,
          __typename: "ReleaseDate",
        },
      },
    ];
    const moviesToReturn = randomMovie.map(convertToMovie);
    if (searchTerm)
      return moviesToReturn.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    // const searchUrl = `${this.baseUrl}/titles/x/upcoming?limit=50`;
    // const response = await fetch(searchUrl, this.options);
    // const results = await response.json();
    // return results.results.map(convertToMovie);
    return moviesToReturn;
  }
}

export default MoviesApi;
