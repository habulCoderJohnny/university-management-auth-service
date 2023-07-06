import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ACDepartmentController } from './dept.controller';
import { ACDepartmentValidation } from './dept.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();
router.post(
  '/create',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(ACDepartmentValidation.createDepartmentZodSchema),
  ACDepartmentController.createACDepartment
);
router.get('/:id', ACDepartmentController.getOneDepartment);
router.get('/', ACDepartmentController.getAllDepartment);
router.patch(
  '/update/:id',
  validateRequest(ACDepartmentValidation.updateDepartmentZodSchema),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ACDepartmentController.updateDepartment
);
router.delete(
  '/delete/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  ACDepartmentController.deleteDepartment
);

export const ACDepartmentRoutes = router;
