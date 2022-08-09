import { Key } from "react";

export type User = {
  name?: string;
  email: string;
  password?: string;
  preferences?: object;
  _id?: string;
  token?: string;
};


export type Action = {
  type: string;
  payload?: any;
};

export type State = {
  loading: boolean;
  userInfo: User | undefined;
  error: any;
};

export type Artist = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department?: object[];
  name: string;
  popularity: number;
  profile_path: string;
};


export type Genre = {
  id: number;
  name: string;
};

export interface PreferencesProps{
  genres: Genre[];
  popularArtists:Artist[]

}


export type PreferencesCartProps= {
  items: Artist[]|Genre[];
  header: string
  type:string
}
