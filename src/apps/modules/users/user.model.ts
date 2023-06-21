import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

// s2. Create a Schema
const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
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
