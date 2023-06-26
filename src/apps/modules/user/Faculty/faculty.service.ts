import { IFaculty } from './faculty.interface';
import { Faculty } from './faculty.model';

// get all service
const getAllFaculty = async (): Promise<IFaculty[]> => {
  const result = await Faculty.find();
  return result;
};

export const FacultyService = {
  getAllFaculty,
};
