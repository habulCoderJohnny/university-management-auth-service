import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterValidation } from './semester.validation';
import { SemesterController } from './semester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(SemesterValidation.semesterZodSchema),
  SemesterController.createSemester
);
router.get('/get/:id', SemesterController.getSingleSemester);
router.get('/', SemesterController.getAllSemester);
router.patch('/update/:id', SemesterController.updateSemester);

export const AcademicSemesterRoutes = router;
