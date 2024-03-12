import fs from 'fs';
import Locale from '../../types/Locale';
import Movie from '../../types/Movie';
import getMovieDetailsByLanguage from '../../utils/Movie/getMovieDetailsByLanguage';
import { InternalServerError } from '../../helpers/CustomizedResponseStatus';
import Messages from '../../types/Messages';

const findAllUsers: (
  limit: number,
  locale: Locale,
  page: number,
  messages: Messages
) => Promise<{ results: Partial<Movie>[]; total: number; next: boolean } | void> = async (
  limit = 20,
  locale,
  page = 1,
  messages
) => {
  const {
    movie: {
      findAll: { ERROR_FETCH_MOVIE },
    },
  } = messages;
  const startIndex = (page - 1) * limit;

  try {
    const files = await fs.promises.readdir('movies');
    const moviesOnPage = files?.slice(startIndex, startIndex + limit);

    const movies: Partial<Movie>[] = [];

    await Promise.all(
      moviesOnPage?.map(async (folder) => {
        try {
          const movieFile = `movies/${folder}/${folder}.json`;
          const movieDataUnparsed = await fs.promises.readFile(movieFile, 'utf8');
          const movieData: Movie = JSON.parse(movieDataUnparsed);

          movies.push(getMovieDetailsByLanguage(movieData, locale));
        } catch (error) {
          console.error(`Erro ao abrir arquivo JSON da seguinte pasta: ${folder}`, error);
          throw new InternalServerError(ERROR_FETCH_MOVIE);
        }
      })
    );

    return {
      results: movies,
      total: files.length,
      next: page * limit < files.length ? true : false,
    };
  } catch (error) {
    console.error('Erro ao listar os filmes', error);
    throw new InternalServerError(ERROR_FETCH_MOVIE);
  }
};

export default findAllUsers;
