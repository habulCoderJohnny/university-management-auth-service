import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    user: z.object({
      name: z.string({
        required_error: 'name is mandatory',
      }),
      role: z.string({
        required_error: 'role is required',
      }),
    }),
    password: z.string().optional(),
  }),
});
export const UserValidation = {
  createUserZodSchema,
};
//request-validation
//body>obj
//user>obj
//data>obj{}
