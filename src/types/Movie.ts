type Movie = {
  title: {
    original: string;
    ptBR: string;
    enUS: string;
  };
  releaseYear: string;
  genres: {
    ptBR: string[];
    enUS: string[];
  };
  runtime: number;
  overview: {
    enUS: string;
    ptBR: string;
  };
  tagline: {
    enUS: string;
    ptBR: string;
  };
  productionCompanies: {
    name: string;
    countryCode: string;
  }[];
  cast: {
    imdbId: string;
    name: string;
    role: string;
    note: string;
    img: string;
  }[];
  productionCountriesCodes: string[];
  colorInfo: string[];
  languagesCodes: string[];
  IMDBRating: number;
  boxOffice: {
    Budget: string;
    'Opening Weekend United States': string;
    'Cumulative Worldwide Gross': string;
  };
  director: {
    imdbId: string;
    name: string;
    notes: string;
    img: string;
  }[];
  writer: {
    imdbId: string;
    name: string;
    notes: string;
    img: string;
  }[];
  producer: {
    imdbId: string;
    name: string;
    notes: string;
    img: string;
  }[];
  composer: {
    imdbId: string;
    name: string;
    notes: string;
    img: string;
  }[];
  cinematographer: {
    imdbId: string;
    name: string;
    notes: string;
    img: string;
  }[];
  editor: {
    imdbId: string;
    name: string;
    notes: string;
    img: string;
  }[];
};

export default Movie;
