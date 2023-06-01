import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// s3.
// Create a user Model
type UserModel = Model<IUser, object>

// s2. Create a Schema
const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)
// s4. static
export const User = model<IUser, UserModel>('User', userSchema)
