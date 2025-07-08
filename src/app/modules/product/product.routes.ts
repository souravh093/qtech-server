import { Router } from 'express';
import validation from '../../middlewares/validation';
import { ProductValidation } from './product.validation';
import { ProductController } from './product.controller';

const router = Router();

router.post(
  '/',
  validation(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);

router.get('/', ProductController.getAllProducts);

router.get('/:id', ProductController.getProductById);

router.put(
  '/:id',
  validation(ProductValidation.createProductValidationSchema),
  ProductController.updateProduct,
);

router.delete('/:id', ProductController.deleteProduct);

export const ProductRoutes = router;
