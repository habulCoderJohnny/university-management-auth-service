import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemesterRoutes } from '../modules/AcademicSemester/semester.route';
import { ACFacultyRoutes } from '../modules/AcademicFaculties/faculty.route';
import { ACDepartmentRoutes } from '../modules/AcademicDepartment/dept.route';
import { StudentRoutes } from '../modules/UserStudent/student.route';

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
  {
    path: '/faculties',
    route: ACFacultyRoutes,
  },
  {
    path: '/department',
    route: ACDepartmentRoutes,
  },
  {
    path: '/student',
    route: StudentRoutes,
  },
];

// Mapping
ApplicationRoutes.forEach(road => router.use(road.path, road.route));

// router.use('/users', UserRoutes);
// router.use('/semester',AcademicSemesterRoutes);

export default router;
