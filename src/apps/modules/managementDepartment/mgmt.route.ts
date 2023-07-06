import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDeptValidation } from './mgmt.validation';
import { ManagementDepartmentController } from './mgmt.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(ManagementDeptValidation.createManagementDeptZodSchema),
  ManagementDepartmentController.createDepartment
);

export const ManagementDepartmentRoutes = router;
