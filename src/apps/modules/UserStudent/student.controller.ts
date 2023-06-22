import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IStudent } from './student.interface';
import { StudentService } from './student.service';
import { Request, Response } from 'express';

const getAllStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getAllStudent();
  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '✅All Student retrieved successfully!',
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
};
