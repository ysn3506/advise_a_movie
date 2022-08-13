

export type User = {
  name?: string|undefined;
  email: string|undefined;
  password?: string|undefined;
  preferences?: Preferences;
  _id?: string;
  token?: string;
};

export type Preferences = {
  artists: { id: number }[];
  popularity: { id: number }[] ;
  genres: { id: number }[];
};


export type Action = {
  type: string;
  payload?: any;
};

export type UserState = {
  loading: boolean;
  userInfo: User;
  error: any;
};

export type PreferencesState = {
  popularity: Genre[];
  artists: Artist[];
  genres: Genre[];
}

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




export interface PreferencesProps {
  movieTypes: Genre[];
  popularArtists: Artist[];
}


export type PreferencesCartProps= {
  items: Artist[] | Genre[];
  header: string;
  type: string;
}
