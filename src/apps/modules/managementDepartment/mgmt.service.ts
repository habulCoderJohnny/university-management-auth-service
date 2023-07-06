import { IManagementDepartment } from './mgmt.interface';
import { ManagementDepartment } from './mgmt.model';

const createDepartment = async (
  payload: IManagementDepartment
): Promise<IManagementDepartment | null> => {
  const result = await ManagementDepartment.create(payload);
  return result;
};

export const ManagementDeptService = {
  createDepartment,
};
