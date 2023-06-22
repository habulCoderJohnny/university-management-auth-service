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

// // get oneController using ID
const getAStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await StudentService.getAStudent(id);
  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get A Student successfully!',
    data: result,
  });
});

export const StudentController = {
  getAllStudent,
  getAStudent,
};
