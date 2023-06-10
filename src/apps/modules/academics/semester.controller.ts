import { NextFunction, Request, Response } from 'express';
import { SemesterService } from './semester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ISemester } from './semester.interface';
import pgPicker from '../../../shared/pgPicker';
import { paginationField } from '../../../constant/pagination';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await SemesterService.createSemester(academicSemesterData);
    sendResponse<ISemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: '✅Academic Semester data created successfully!',
      data: result,
    });
    next();
  }
);

// pagination & sort
const getAllSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const paginationOptions = {
    //   page: Number(req.query.page),
    //   limit: Number(req.query.limit),
    //   sortBy: (req.query.sortBy),
    //   sortOrder: (req.query.sortOrder),
    // };
    const paginationOptions = pgPicker(req.query, paginationField);
    const result = await SemesterService.getAllSemester(paginationOptions);

    sendResponse<ISemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: '✅Semester retrieved successfully!',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);

export const semesterController = {
  createSemester,
  getAllSemester,
};
