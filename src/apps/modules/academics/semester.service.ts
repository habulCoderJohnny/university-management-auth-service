import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { semesterTitle_CodeMapper } from './semester.constant';
import { ISemester } from './semester.interface';
import { AcademicSemester } from './semester.model';
import { IPaginationOptions } from '../../../pagination/typePagination';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationSort } from '../../../pagination/paginationSort';
import { SortOrder } from 'mongoose';

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

// Pagination
const getAllSemester = async (
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<ISemester[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationSort.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const result = await AcademicSemester.find().sort().skip(skip).limit(limit);
  const total = await AcademicSemester.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
export const SemesterService = { createSemester, getAllSemester };
