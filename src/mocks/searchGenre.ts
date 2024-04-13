import convertToMovie from "../utils";

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

const searchGenere = mockResult.map(convertToMovie);

export default searchGenere;
