import { NextFunction, Request, Response } from 'express';
import { SemesterService } from './semester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ISemester } from './semester.interface';
import pgPicker from '../../../shared/pgPicker';
import { paginationField } from '../../../constant/pagination';
import { semesterFilterableFields } from './semester.constant';

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

// filtering & pagination & sort
const getAllSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pgPicker(req.query, semesterFilterableFields); //
    const paginationOptions = pgPicker(req.query, paginationField);
    const result = await SemesterService.getAllSemester(
      filters,
      paginationOptions
    );

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
