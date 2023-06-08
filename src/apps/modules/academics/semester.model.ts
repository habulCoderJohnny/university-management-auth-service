import { Schema, model } from 'mongoose';
import { ISemester, SemesterModel } from './semester.interface';
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
// s2. Create a Schema (status)
const semesterSchema = new Schema<ISemester>(
  {
    title: { type: String, required: true, enum: ['Autumn', 'Summer', 'Fall'] },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: ['01', '02', '03'] },
    startMonth: { type: String, required: true, enum: month },
    endMonth: { type: String, required: true, enum: month },
  },
  {
    timestamps: true,
  }
);

// s4. static
export const Semester = model<ISemester, SemesterModel>(
  'Semester',
  semesterSchema
);

// {
//     title: { type: String, required: true,
//     enum: ['Autumn', 'Summer', 'Fall'] },
//     year: { type: Number, required: true },
//     code: { type: String, required: true,
//     enum: ['01', '02', '03'] },
//     startMonth: { type: String, required: true,
//     enum: month },
//     endMonth: { type: String, required: true,
//     enum: month },
// }
