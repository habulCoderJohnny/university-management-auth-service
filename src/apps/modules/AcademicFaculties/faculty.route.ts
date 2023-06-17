import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ACFacultyController } from './faculty.controller';
import { ACFacultyValidation } from './faculty.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(ACFacultyValidation.createFacultyZodSchema),
  ACFacultyController.createACFaculty
);

export const ACFacultyRoutes = router;