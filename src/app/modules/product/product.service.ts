import { Product } from '@prisma/client';
import prisma from '../../../db/db.config';

const createProductIntoDB = async (payload: Product) => {
  const response = await prisma.product.create({
    data: payload,
  });

  return response;
};

const getAllProductsFromDB = async () => {
  const response = await prisma.product.findMany();

  return response;
};

const getProductByIdFromDB = async (id: string) => {
  const response = await prisma.product.findUnique({
    where: { id },
  });

  return response;
};

const updateProductInDB = async (id: string, payload: Product) => {
  const response = await prisma.product.update({
    where: { id },
    data: payload,
  });

  return response;
};

const deleteProductFromDB = async (id: string) => {
  const response = await prisma.product.delete({
    where: { id },
  });

  return response;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductInDB,
  deleteProductFromDB,
};
