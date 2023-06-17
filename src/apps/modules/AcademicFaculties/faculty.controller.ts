import { ACFacultyService } from './faculty.service';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { IACFaculty } from './faculty.interface';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';

// create controller
const createACFaculty = catchAsync(async (req: Request, res: Response) => {
  const { ...ACFacultyData } = req.body;
  const result = await ACFacultyService.createACFaculty(ACFacultyData);
  sendResponse<IACFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '✅AC Faculty data created successfully!',
    data: result,
  });
});

// getAll controller
const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await ACFacultyService.getAllACFaculties();
  sendResponse<IACFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '✅All Faculty retrieved successfully!',
    data: result,
  });
});

export const ACFacultyController = {
  createACFaculty,
  getAllFaculty,
};
