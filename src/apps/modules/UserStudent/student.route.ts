import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { StudentValidaion } from './student.validation';

const router = express.Router();

router.get('/:id', StudentController.getAStudent);
router.get('/', StudentController.getAllStudent);

router.patch(
  '/update/:id',
  validateRequest(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent
);
router.delete('/delete/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
