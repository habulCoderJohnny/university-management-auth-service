import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generateUserId } from './user.utils';

// s6. database logic
const createUser = async (user: IUser): Promise<IUser | null> => {
  // s8. auto generated incremental id
  const id = await generateUserId();
  user.id = id;

  // s9. default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }
  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new ApiError(400, 'Failed to create user 🚫');
  }
  return createdUser;
};
export const UserService = { createUser };
