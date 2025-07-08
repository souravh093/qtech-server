import z from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ required_error: 'Name is required' })
      .min(1, 'Name must be at least 1 character long'),
    price: z
      .number({ required_error: 'Price is required' })
      .min(0, 'Price must be a positive number'),
    description: z
      .string({ required_error: 'Description is required' })
      .min(1, 'Description must be at least 1 character long'),
    category: z
      .string({ required_error: 'Category is required' })
      .min(1, 'Category must be at least 1 character long'),
    brand: z
      .string({ required_error: 'Brand is required' })
      .min(1, 'Brand must be at least 1 character long'),
    stock: z
      .number({ required_error: 'Stock is required' })
      .min(0, 'Stock must be a non-negative number'),
    reviews: z
      .number({ required_error: 'Reviews is required' })
      .min(0, 'Reviews must be a non-negative number'),
    rating: z
      .number({ required_error: 'Ratings is required' })
      .min(0, 'Ratings must be a non-negative number'),
  }),
});

export const ProductValidation = {
  createProductValidationSchema,
};
