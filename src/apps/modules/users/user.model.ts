import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

// s2. Create a Schema
const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      // faculty?:Types.ObjectId | IFaculty; Future
      // admin?:Types.ObjectId | IAdmin; Future
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
// s4. static
export const User = model<IUser, UserModel>('User', userSchema);
