import { Model } from 'mongoose';

// s1 Create an Interface [type declared]
export type IACDepartment = {
  title: string; //s
};

// s3. Create a user Model
export type ACDepartmentModel = Model<IACDepartment, Record<string, unknown>>;

export type IACDepartmentFilters = {
  searchTerm?: string;
};
