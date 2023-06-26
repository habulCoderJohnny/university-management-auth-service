import { Request, Response } from 'express';
import catchAsync from '../../../../shared/catchAsync';
import { IFaculty } from './faculty.interface';
import httpStatus from 'http-status';
import sendResponse from '../../../../shared/sendResponse';
import { FacultyService } from './faculty.service';

//get all - controller
const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.getAllFaculty();
  sendResponse<IFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '✅All Faculty retrieved successfully!',
    data: result,
  });
});

export const FacultyController = {
  getAllFaculty,
};
