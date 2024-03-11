import Movie from '../../types/Movie';

const getMovieDetailsByLanguage = (movie: Movie, locale: 'ptBR' | 'enUS' = 'ptBR'): Partial<Movie> => {
  if (locale === 'ptBR' || locale === 'enUS') {
    const localizedTitle = movie.title[locale];
    return {
      ...movie,
      title: { original: movie.title.original, [locale]: localizedTitle },
    };
  } else {
    throw new Error(`Locale '${locale}' não é suportado.`);
  }
};

export default getMovieDetailsByLanguage;
