import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const response = await ProductService.createProductIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Product created successfully',
    data: response,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const response = await ProductService.getAllProductsFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Products retrieved successfully',
    data: response,
  });
});

const getProductById = catchAsync(async (req, res) => {
  const response = await ProductService.getProductByIdFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product retrieved successfully',
    data: response,
  });
});

const updateProduct = catchAsync(async (req, res) => {
  const response = await ProductService.updateProductInDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product updated successfully',
    data: response,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const response = await ProductService.deleteProductFromDB(req.params.id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product deleted successfully',
    data: response,
  });
});

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
