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


export interface PreferencesProps{
  genres: {id:number,name:string}[];

}


export type PreferencesCartProps= {
  items: object[];
  header:string
}
