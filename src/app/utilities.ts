import {
  getMoviesByCriterias,
  getPopularMovies,
  getTopRatedMovies,
} from "./services/API";

import {
  setGenreMovies,
  setArtistMovies,
  setRecommendedMovies,
  setPreferedMovies,
} from "./storage/redux/movies/actions";
import { Artist, Genre } from "./types/types";

export const in30Minutes = () =>
  new Date(new Date().getTime() + 30 * 60 * 1000); //  In order to set deleting time of logged-in cookie

export const setCookie = (
  cName: string,
  cValue: string | undefined,
  expDays: number
) => {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
};

export const getCookie = (cName: string) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
};

export const deleteCookie = (cookieName: string) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";`;
};





export const getMovies = (popularity:Genre[], artists:Artist[], genres:Genre[]) => {
  let genreKeyword: string = "";
  let artistKeyword: string = "";

  const popularityIds: { id: number }[] = popularity.map((popular: Genre) => ({
    id: popular.id,
  }));

  genres.forEach((item) => {
    genreKeyword += `${item.id}|`;
  });
  artists.forEach((item) => {
    artistKeyword += `${item.id}|`;
 
  });

  const setGenres = async():Promise<any> => {
    if (genres.length > 0) return getMoviesByCriterias("with_genres", genreKeyword)
    return []
}

    setGenres()
    .then((resp) => setGenreMovies(resp.results))
      .then(() => {
      console.log(artists)
      if (artists.length > 0)
        return getMoviesByCriterias("with_people", artistKeyword);
      return [];
    })
    .then((resp) => setArtistMovies(resp.results))
    .then(() => {
      if (popularityIds.find((item) => item.id === 1)) {
        getPopularMovies().then((resp) => setRecommendedMovies(resp.results));
      }
    })
    .then(() => {
      if (popularityIds.find((item) => item.id === 2)) {
        getTopRatedMovies().then((resp) => setPreferedMovies(resp.results));
      }
    })

    .catch((err) => {
      throw err;
    });
};
