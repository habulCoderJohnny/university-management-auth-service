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
router.get('/:id', ACFacultyController.getOneFaculty);
router.get('/', ACFacultyController.getAllFaculty);

export const ACFacultyRoutes = router;
