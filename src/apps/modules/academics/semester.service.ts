import { ISemester } from './semester.interface';
import { AcademicSemester } from './semester.model';

// s6. database logic.
const createSemester = async (payload: ISemester): Promise<ISemester> => {
  const result = await AcademicSemester.create(payload);
  return result;
};
export const SemesterService = { createSemester };

/* 
async (user: IUser): Promise<IUser | null> => {
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
  return createdUser; */
