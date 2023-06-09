import { NextFunction, Request, Response } from 'express';
import { SemesterService } from './semester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { ISemester } from './semester.interface';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await SemesterService.createSemester(academicSemesterData);
    next();
    sendResponse<ISemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: '✅Academic Semester data created successfully!',
      data: result,
    });
    /* res.status(200).json({
      success: true,
      message: '✅ Academic Semester data created successfully',
      data: result,
    }); */
  }
);

export const semesterController = {
  createSemester,
};
