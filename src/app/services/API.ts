// import { api } from "./API_BASE"
import axios from "axios";
import { api } from "./API_BASE";

export const getGenres = async () => {
  try {
    const response = await api().get(
      `/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeeklyTrends = async () => {
  try {
    const response = await api().get(
      `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getPersonInfo = async (person_id: number) => {
  try {
    const response = await api().get(
      `person/${person_id}?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByCriterias = async (query: any) => {
  try {
    let endpoint =
      await `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_TOKEN}&language=en-US&sort_by=popularity.desc`;
    await Object.keys(query).forEach((key: string) => {
      endpoint = endpoint + `&${key}=${query[key]}`;
    });
    const response = await api().get(endpoint);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};



export const registerUser = async (user: object)=>{
  try {
    await axios.post(`${process.env.REACT_APP_USER_BACKEND_URL}/api/users`, JSON.stringify(user));
    
  } catch (error) {
    console.log(error)
  }

}

export const authUser = async (user: object) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_USER_BACKEND_URL}/api/users/login`,
      JSON.stringify(user)
    );
  } catch (error) {
    console.log(error);
  }
};