import { ACFacultyService } from './faculty.service';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { IACFaculty } from './faculty.interface';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';

// createController
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

// getAllController
const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await ACFacultyService.getAllACFaculties();
  sendResponse<IACFaculty[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: '✅All Faculty retrieved successfully!',
    data: result,
  });
});

// get oneController using ID
const getOneFaculty = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await ACFacultyService.getOneFaculty(id);
  sendResponse<IACFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get Individual Faculty  successfully!',
    data: result,
  });
});

// updateController using ID
const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const updatedData = req.body;
  const id = req.params.id;
  const result = await ACFacultyService.updateFaculty(id, updatedData);
  sendResponse<IACFaculty>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Individual Faculty Updated successfully!',
    data: result,
  });
});

export const ACFacultyController = {
  createACFaculty,
  getAllFaculty,
  getOneFaculty,
  updateFaculty,
};
