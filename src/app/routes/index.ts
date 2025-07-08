import { Router } from 'express';
import { TModuleRoute } from '../types/moduleRoute.type';
import { ProductRoutes } from '../modules/product/product.routes';

const router = Router();

const moduleRoutes: TModuleRoute[] = [
  {
    path: '/products',
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
