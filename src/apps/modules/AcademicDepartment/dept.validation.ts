import { z } from 'zod';

const createDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

const updateDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
  }),
});

export const ACDepartmentValidation = {
  createDepartmentZodSchema,
  updateDepartmentZodSchema,
};
