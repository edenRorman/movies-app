import convertToMovie from "../utils";

const randomMovie = [
  {
    _id: "61e58c6aef99b1c54343e375",
    id: "tt10209920",
    primaryImage: {
      id: "rm882431489",
      width: 8200,
      height: 12300,
      url: "https:m.media-amazon.com/images/M/MV5BNjc5ZGQwNjMtNGI3NC00Yzg3LTk4MjktMDgwYTcyZDhhNmRmXkEyXkFqcGdeQXVyMjE2MzA5MDI@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BZWIyNzE3NzEtMGExNS00ZjRkLWJmMTYtMWFlNTNkNDgyNWUzXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BMjE3YjFkOGMtYTIyNy00NTQwLTg0YTItOWM2YjdiMjRlMmY5XkEyXkFqcGdeQXVyMTIyODY5Mjk1._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNDFmYWRhYmMtMDBiNS00OWZkLTk3ZmYtODMyZjdlMDFjNWNlXkEyXkFqcGdeQXVyNjA1NjIzMzQ@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNjMxNzRjMzQtOTI3Ny00ZmUyLTg4ZDMtMTA4NzdlNDZlYzhiXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BMDg3MWRlZTEtNmFlMC00NDQ0LWE2ZTQtYjRmNjQwMDNlMjk5XkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BMmM3NWZkY2YtODYwNy00MzU3LWFkNjgtNTcwMzU4NWM0YTE2XkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNjgzNzJjNDctODY2Mi00MTk4LWI4OWItOTdmNmVlOWE2ZTUwXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BMTkyMjA3MTMtN2RjMy00YzEzLWEyOGUtYTJlODdlOGEwODEwXkEyXkFqcGdeQXVyMTA1NjUwOTIw._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BYTk4ZDU4NDQtYzVhNS00MDI3LWFkMDYtM2I2YTc0YmJjMTQ1XkEyXkFqcGdeQXVyMzE2NDI5NzI@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNmI0NDY5Y2QtYzU2MC00NzFkLWExYWQtYzJlOTFkYmQyZGYyXkEyXkFqcGdeQXVyODczNDEwMjk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BYWUwMjVhY2ItNThhZC00MzE4LWI3YmItYjNiZmYwZDZiNjcyXkEyXkFqcGdeQXVyMzE2NDI5NzI@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNWViZjhjZjYtZTBkMy00Nzg0LTg1ODgtYjMxNjM3MDJmNWNkXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNjc3NzI2MDQtYTNiYi00Mjk3LThkMTYtMWI1YTkxNGI4ZGJmXkEyXkFqcGdeQXVyNDI2MTA0OA@@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BY2NiMDkzYmQtNjEyNC00MzU5LWEzOTgtYjI1YzdmOTZiOGNhXkEyXkFqcGdeQXVyMTIzNjI1OTY@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BYTZlOTU3YjYtZmQ3ZC00NmI4LTg4MWUtODJkMmY5Y2M5ZDAxXkEyXkFqcGdeQXVyMzA4OTQ2Nzg@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BMDIxNzE0NWItZTJhNi00ZWUyLTgyYzgtMjk5MzkxMjcwZjJjXkEyXkFqcGdeQXVyMTM1NjAwNTI2._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNmMxMGE3MzUtNjI5Yy00MzI0LTkyMzktYzYyMjhiZjYyYTQ2XkEyXkFqcGdeQXVyMTAwOTI0MjU0._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BZDQxYWYyYjItYjE0Mi00MDA0LWIwMTQtZmVlODNjYzUxYWEwXkEyXkFqcGdeQXVyNTI4OTM3NDA@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BZDQxYWYyYjItYjE0Mi00MDA0LWIwMTQtZmVlODNjYzUxYWEwXkEyXkFqcGdeQXVyNTI4OTM3NDA@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNmYzMWVjNmQtNjJjNy00M2Y4LTkzZjQtZWQ5NmYzMjRjMDIzXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BODE3NjgwZDMtMGJjOC00MDg3LTkxODktNDFjYTJlYzAwZTAxXkEyXkFqcGdeQXVyMzg0NDUyNw@@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BODA0YmZmNjYtY2RkOS00YjlhLWJjMTgtZjIyZjY2OTJjNThjXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNTUyYzY3NjAtYjU2Ny00ZjMyLWJkYTAtZWIzZDEyNWJjNDJiXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BYTA4ODM5MDUtNDY2OC00OWVkLWIxMjEtMmVjYWZhODEzOTg4XkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BYzI2ZGQ4MDAtNjZiMi00MzI0LWI1YTAtN2Y4NjYxZDJiYTJlXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BZDA4MThjNWMtNDE3Yy00YzcwLWEzYzQtMzNhYjBmMzQ2YTkyXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BYTgyYzM2NDYtZTAzYi00ZmM3LTlmYzQtNjQ2OTMwYjQ2ZDAyXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNDI2YjUxYzYtYWU1ZC00ZjQwLTk5MWYtNzdkNGVjZmRkNjc4XkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BMWQ0MWRhNDctNWRlZS00MGY4LWE5OTktZmM4MzQxMmJiMjJkXkEyXkFqcGdeQXVyODUwMzI5ODk@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BZTFlMGRjY2YtYTU4OS00ZjVlLWJiZjItNmJmZjA2MDgzNzEwXkEyXkFqcGdeQXVyMTg0MTAxMg@@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BZjQ4MzVkYzUtZTY2Yi00YzVkLWFkYTgtZDUwOWUxOWE4NDYxXkEyXkFqcGdeQXVyMjExMjczNDA@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BZjJhY2NkOWYtMWRlMy00YWE1LTk3ODUtYzAyMjI1NzE3NTc2XkEyXkFqcGdeQXVyODUxNDU2ODE@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BMjRjMTc4ZTItNzM4Ni00NDkzLTk5YjMtNGRjNDYxMDViNjRkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BM2YwMzc1ZmEtMmJmOS00YWMwLTg0MTItOTBiZmIyNWVhZDJmXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BYTg5OGQ1NGUtOTg3NS00YzYyLTg3OWUtZDhmOGRmMjdlMzg3XkEyXkFqcGdeQXVyNjIzMTYzMTQ@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BYjY0NjkxNmItYzgxZi00NzRiLWI2NjItN2EwZTg5ODhhMjA1XkEyXkFqcGdeQXVyMTQ2Nzk4Mzc0._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BMDY0N2VmZGYtOWM0My00OTAwLTk1NzktYzE5YWJlOTU4NmMwXkEyXkFqcGdeQXVyMTM5NDM1MDM@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BZGRkZDg0NGQtNWU5Yi00NTE4LWI1MjEtNWFjYWE4ZDQzNmRmXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BYTZmNGVkZGUtZTllMi00NTE5LTk1MGQtNDZhYWQ0MGI0MWNjXkEyXkFqcGdeQXVyMjE4MzYwMA@@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNDdlYTEyNWEtYmVkOC00MTJiLWEwZmEtZjQ1NTM5N2JlYjUzXkEyXkFqcGdeQXVyNzEwMzUxMzU@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BNDdlYTEyNWEtYmVkOC00MTJiLWEwZmEtZjQ1NTM5N2JlYjUzXkEyXkFqcGdeQXVyNzEwMzUxMzU@._V1_.jpg",
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
      url: "https:m.media-amazon.com/images/M/MV5BOWY3MjhlMGItY2VmNy00ZTFkLWI4NGQtZjc3ZTg5YjM0NDJjXkEyXkFqcGdeQXVyNTU5NzUwNw@@._V1_.jpg",
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

const upComingMovies = randomMovie.map(convertToMovie);

export default upComingMovies;
