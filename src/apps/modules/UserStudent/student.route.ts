import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/:id', StudentController.getAStudent);
router.get('/', StudentController.getAllStudent);

// router.patch(
//   '/:id',
//   validateRequest(StudentValidaion.updateStudentZodSchema),
//   StudentController.updateStudent
// );

// router.delete('/:id', StudentController.deleteStudent);

export const StudentRoutes = router;
