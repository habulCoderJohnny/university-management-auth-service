import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemesterRoutes } from '../modules/AcademicSemester/semester.route';

const router = express.Router();

const ApplicationRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/semesters',
    route: AcademicSemesterRoutes,
  },
];

// Mapping
ApplicationRoutes.forEach(road => router.use(road.path, road.route));

// router.use('/users', UserRoutes);
// router.use('/semester',AcademicSemesterRoutes);

export default router;
