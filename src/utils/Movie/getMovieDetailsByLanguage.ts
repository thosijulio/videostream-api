import Locale from '../../types/Locale';
import Movie from '../../types/Movie';

const getMovieDetailsByLanguage = (movie: Movie, locale: Locale = 'ptBR'): Partial<Movie> => {
  return {
    ...movie,
    title: {
      original: movie.title.original,
      [locale]: movie.title[locale],
    },
    genres: !Array.isArray(movie.genres) ? movie.genres[locale] : [],
    overview: typeof movie.overview !== 'string' ? movie.overview[locale] : movie.overview,
    tagline: typeof movie.tagline !== 'string' ? movie.tagline[locale] : movie.tagline,
  };
};

export default getMovieDetailsByLanguage;
