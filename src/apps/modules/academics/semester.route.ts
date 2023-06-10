import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterValidation } from './semester.validation';
import { semesterController } from './semester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(SemesterValidation.semesterZodSchema),
  semesterController.createSemester
);
router.get('/', semesterController.getAllSemester);

export const AcademicSemesterRoutes = router;
