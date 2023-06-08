import { Model } from 'mongoose';

type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

// s1 Create an Interface [type declared]
export type ISemester = {
  title: 'Autumn' | 'Summer' | 'Fall'; //s
  year: number;
  code: '01' | '02' | '03'; //string;
  startMonth: Month;
  endMonth: Month;
};
// s3. Create a user Model
export type SemesterModel = Model<ISemester>;
