import { object, string, TypeOf } from 'zod';

const payload = object({
  name: string({
    required_error: 'Name is required'
  }),
  description: string({
    required_error: 'Description is required'
  })
});
export const createExampleSchema = object({
  body: payload
});

export type CreateExampleInput = TypeOf<typeof createExampleSchema>;
