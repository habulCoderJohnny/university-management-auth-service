import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDeptValidation } from './mgmt.validation';
import { ManagementDeptController } from './mgmt.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(ManagementDeptValidation.createManagementDeptZodSchema),
  ManagementDeptController.createDepartment
);
router.get('/:id', ManagementDeptController.getADepartment);
router.get('/', ManagementDeptController.getAllDepartment);
router.delete('/:id', ManagementDeptController.deleteDepartment);
router.patch(
  '/:id',
  validateRequest(ManagementDeptValidation.updateManagementDeptZodSchema),
  ManagementDeptController.updateDepartment
);

export const ManagementDepartmentRoutes = router;
