import { IStudent } from './student.interface';
import { Student } from './student.model';

// get all service
const getAllStudent = async (): Promise<IStudent[]> => {
  const result = await Student.find();
  return result;
};

// get one service
const getAStudent = async (id: string): Promise<IStudent | null> => {
  const result = await Student.findById(id)
    .populate('academicSemester')
    .populate('academicDepartment')
    .populate('academicFaculty');
  return result;
};

export const StudentService = {
  getAllStudent,
  getAStudent,
};
