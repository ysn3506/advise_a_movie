import { User } from "../types/types";
import api from "./API_BASE";
import axios from "axios";

export const getGenres = async () => {
  try {
    const response = await api.get(
      `/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeeklyTrends = async () => {
  try {
    const response = await api.get(
      `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPersonInfo = async (person_id: number) => {
  try {
    const response = await api.get(
      `person/${person_id}?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularArtists = async () => {
  try {
    const response = await api.get(
      `person/popular?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const getLatestArtists = async () => {
  try {
    const response = await api.get(
      `person/latest?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await api.get(
      `movie/popular?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const getBestMovies = async () => {
  try {
    const response = await api.get(
      `movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const getTopRatedMovies = async () => {
  try {
    const response = await api.get(
      `movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


 export const getMoviesByCriterias = async (queryKeyword:string, queryValue:string) => {
  try {
    let endpoint = await `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}&language=en-US&sort_by=popularity.desc&${queryKeyword}=${queryValue}`;
    // await Object.keys(query).forEach((key: string) => {
    //   endpoint = endpoint + `&${key}=${query[key]}`;
    // });
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.log(error);
  }
 };


 





export const registerUser = (user: User) =>
  api.post(`${process.env.REACT_APP_USER_BACKEND_URL}/api/users`, user);


export const authUser = (user: User) =>api.post(`${process.env.REACT_APP_USER_BACKEND_URL}/api/users/login`, user);
 

export const updateUser = (user: User) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  };

  return axios.post(
    `${process.env.REACT_APP_USER_BACKEND_URL}/api/users/profile`,
    user, config
  );
}
  
  
 