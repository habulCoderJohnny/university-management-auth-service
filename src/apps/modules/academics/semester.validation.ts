import { z } from 'zod';

const semesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autumn', 'Summer', 'Fall'], {
      required_error: 'title is mandatory',
    }),
    year: z.string({
      required_error: 'year is required',
    }),

    code: z.enum(['01', '02', '03'], {
      required_error: 'code is required',
    }),
    startMonth: z.enum(
      [
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
      ],
      {
        required_error: 'start month is required',
      }
    ),
    endMonth: z.enum(
      [
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
      ],
      {
        required_error: 'end month is required',
      }
    ),
  }),
});

export const SemesterValidation = {
  semesterZodSchema,
};
//request-validation
//body>obj
//data>obj{}
