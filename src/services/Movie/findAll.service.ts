import fs from 'fs';
import Locale from '../../types/Locale';
import Movie from '../../types/Movie';
import getMovieDetailsByLanguage from '../../utils/Movie/getMovieDetailsByLanguage';

const findAllUsers: (
  limit: number,
  locale: Locale,
  page: number
) => Promise<{ results: Partial<Movie>[]; total: number; next: boolean }> = async (
  limit = 20,
  locale = 'ptBR',
  page = 1
) => {
  const startIndex = (page - 1) * limit;

  return new Promise((resolve, reject) => {
    fs.readdir('movies', (err, files) => {
      if (err) {
        console.error('Error reading movies folder:', err);
        reject('Error fetching movies');
      }

      const moviesOnPage = files.slice(startIndex, startIndex + limit);

      const movies: Partial<Movie>[] = [];

      let moviesProcessed = 0;

      moviesOnPage.forEach((folder) => {
        const movieFile = `movies/${folder}/${folder}.json`;

        fs.readFile(movieFile, 'utf8', (err, data) => {
          if (err) {
            console.error(`Error reading file ${movieFile}:`, err);
            moviesProcessed++;
            if (moviesProcessed === moviesOnPage.length) {
              resolve({
                results: movies,
                total: files.length,
                next: page * limit < files.length ? true : false,
              });
            }
            return;
          }

          const movieData: Movie = JSON.parse(data);
          movies.push(getMovieDetailsByLanguage(movieData, locale));

          moviesProcessed++;
          if (moviesProcessed === moviesOnPage.length) {
            resolve({
              results: movies,
              total: files.length,
              next: page * limit < files.length ? true : false,
            });
          }
        });
      });
    });
  });
};

export default findAllUsers;
