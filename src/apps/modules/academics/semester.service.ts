import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { semesterTitle_CodeMapper } from './semester.constant';
import { ISemester } from './semester.interface';
import { AcademicSemester } from './semester.model';

// s6. database logic.
const createSemester = async (payload: ISemester): Promise<ISemester> => {
  
  // fix duplicate-semester-title_Code
  if (semesterTitle_CodeMapper[payload.title] !== payload.code) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'invalid semester code! plz given valid code‼️'
    );
  }
  const result = await AcademicSemester.create(payload);
  return result;
};
export const SemesterService = { createSemester };
