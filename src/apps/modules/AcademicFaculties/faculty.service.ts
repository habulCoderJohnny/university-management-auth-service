import { AcademicFaculty } from './faculty.model';
import { IACFaculty } from './faculty.interface';

// create service
const createACFaculty = async (payload: IACFaculty): Promise<IACFaculty> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

// get all service
const getAllACFaculties = async (): Promise<IACFaculty[]> => {
  const result = await AcademicFaculty.find();
  return result;
};

// get one service
const getOneFaculty = async (id: string): Promise<IACFaculty | null> => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

// update one service
const updateFaculty = async (
  id: string,
  payload: Partial<IACFaculty>
): Promise<IACFaculty | null> => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const ACFacultyService = {
  createACFaculty,
  getAllACFaculties,
  getOneFaculty,
  updateFaculty,
};
