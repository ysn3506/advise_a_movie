export type User = {
  name: string;
  email: string;
  password?: string;
  preferences: object;
  _id?: string;
  token?: string;
};