import express from "express";
import Category from "../models/Category";
import mongoose from "mongoose";

const categoriesRouter = express.Router();

categoriesRouter.get('/', async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.send(categories);
  }catch (e)  {
    return next(e)
  }
});

categoriesRouter.post('/', async (req, res, next) => {
  res.send('123')
});

export default categoriesRouter;

