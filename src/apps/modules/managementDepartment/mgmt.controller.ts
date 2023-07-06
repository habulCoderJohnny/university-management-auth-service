import { Request, Response } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../shared/sendResponse';
import { IManagementDepartment } from './mgmt.interface';
import catchAsync from '../../../shared/catchAsync';
import { ManagementDeptService } from './mgmt.service';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...departmentData } = req.body;
  const result = await ManagementDeptService.createDepartment(departmentData);
  sendResponse<IManagementDepartment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management Department created successfully',
    data: result,
  });
});

export const ManagementDepartmentController = {
  createDepartment,
};
