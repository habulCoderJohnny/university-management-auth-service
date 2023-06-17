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

export const ACFacultyService = {
  createACFaculty,
  getAllACFaculties,
};
