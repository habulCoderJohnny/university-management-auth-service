import { z } from 'zod';
import {
  SemesterCodes,
  SemesterMonths,
  SemesterTitles,
} from './semester.constant';

const semesterZodSchema = z.object({
  body: z.object({
    title: z.enum([...SemesterTitles] as [string, ...string[]], {
      required_error: 'title is mandatory',
    }),
    year: z.string({
      required_error: 'year is required',
    }),

    code: z.enum([...SemesterCodes] as [string, ...string[]], {
      required_error: 'code is required',
    }),
    startMonth: z.enum([...SemesterMonths] as [string, ...string[]], {
      required_error: 'start month is required',
    }),
    endMonth: z.enum([...SemesterMonths] as [string, ...string[]], {
      required_error: 'end month is required',
    }),
  }),
});

export const SemesterValidation = {
  semesterZodSchema,
};
//request-validation
//body>obj
//data>obj{}
