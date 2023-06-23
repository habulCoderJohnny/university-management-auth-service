import { Model, Types } from 'mongoose';
import { IStudent } from '../user/Student/student.interface';

// s1 Create an Interface [type declared]
export type IUser = {
  id: string;
  role: string;
  password: string;
  student?: Types.ObjectId | IStudent;
  // faculty?:Types.ObjectId | IFaculty; Future
  // admin?:Types.ObjectId | IAdmin; Future
};
// s3.
// Create a user Model
export type UserModel = Model<IUser, Record<string, unknown>>;
