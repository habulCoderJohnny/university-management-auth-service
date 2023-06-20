import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ACDepartmentController } from './dept.controller';
import { ACDepartmentValidation } from './dept.validation';

const router = express.Router();

router.post(
  '/create',
  validateRequest(ACDepartmentValidation.createDepartmentZodSchema),
  ACDepartmentController.createACDepartment
);
router.get('/:id', ACDepartmentController.getOneDepartment);
router.get('/', ACDepartmentController.getAllDepartment);
router.patch(
  '/update/:id',
  validateRequest(ACDepartmentValidation.updateDepartmentZodSchema),
  ACDepartmentController.updateDepartment
);
router.delete('/delete/:id', ACDepartmentController.deleteDepartment);
export const ACDepartmentRoutes = router;
