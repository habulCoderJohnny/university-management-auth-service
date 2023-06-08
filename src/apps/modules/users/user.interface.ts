import { Model } from 'mongoose';

// s1 Create an Interface [type declared]
export type IUser = {
  id: string;
  name: string;
  role: string;
  password: string;
};
// s3.
// Create a user Model
export type UserModel = Model<IUser, Record<string, unknown>>;
