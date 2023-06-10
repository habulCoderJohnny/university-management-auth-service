import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { semesterTitle_CodeMapper } from './semester.constant';
import { ISemester } from './semester.interface';
import { AcademicSemester } from './semester.model';
import { IPaginationOptions } from '../../../interfaces/typePagination';
import { IGenericResponse } from '../../../interfaces/common';

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

const getAllSemester = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ISemester[]>> => {
  const { pageNo = 1, limit = 10 } = paginationOptions;
  const skip = (pageNo - 1) * limit;
  const result = await AcademicSemester.find().sort().skip(skip).limit(limit);
  const totalPg = await AcademicSemester.countDocuments();
  return {
    meta: {
      pageNo,
      limit,
      totalPg,
    },
    data: result,
  };
};
export const SemesterService = { createSemester, getAllSemester };
