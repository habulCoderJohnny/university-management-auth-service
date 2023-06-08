import { Schema, model } from 'mongoose';
import { ISemester, SemesterModel } from './semester.interface';
import { SemesterMonths } from './semester.constant';

// s2. Create a Schema (status)
const semesterSchema = new Schema<ISemester>(
  {
    title: { type: String, required: true, enum: ['Autumn', 'Summer', 'Fall'] },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: ['01', '02', '03'] },
    startMonth: { type: String, required: true, enum: SemesterMonths },
    endMonth: { type: String, required: true, enum: SemesterMonths },
  },
  {
    timestamps: true,
  }
);

// s4. static
export const AcaSemester = model<ISemester, SemesterModel>(
  'AcaSemester',
  semesterSchema
);
