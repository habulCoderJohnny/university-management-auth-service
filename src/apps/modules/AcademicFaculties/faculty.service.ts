import { AcademicFaculty } from './faculty.model';
import { IACFaculty } from './faculty.interface';

// create
const createACFaculty = async (payload: IACFaculty): Promise<IACFaculty> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

// get all
const getAllACFaculties = async (): Promise<IACFaculty[]> => {
  const result = await AcademicFaculty.find();
  return result;
};

// get one
const getOneFaculty = async (id: string): Promise<IACFaculty | null> => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

export const ACFacultyService = {
  createACFaculty,
  getAllACFaculties,
  getOneFaculty,
};
