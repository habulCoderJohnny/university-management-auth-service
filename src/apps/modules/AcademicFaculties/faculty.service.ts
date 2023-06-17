import { AcademicFaculty } from './faculty.model';
import { IACFaculty } from './faculty.interface';

// create service
const createACFaculty = async (payload: IACFaculty): Promise<IACFaculty> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

// get all service
const getAllFaculties = async (): Promise<IACFaculty[]> => {
  const result = await AcademicFaculty.find();
  return result;
};

// get one service
const getAFaculty = async (id: string): Promise<IACFaculty | null> => {
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

// delete one service
const deleteFaculty = async (id: string): Promise<IACFaculty | null> => {
  const result = await AcademicFaculty.findByIdAndDelete(id);
  return result;
};

export const ACFacultyService = {
  createACFaculty,
  getAllFaculties,
  getAFaculty,
  updateFaculty,
  deleteFaculty,
};
