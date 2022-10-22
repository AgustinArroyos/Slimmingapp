import express from "express";
import { createCategory, list, remuveCategory, categoryById } from "../controllers/categoryController.js"
const router = express.Router();

router.get('/', list);

router.post('/create', createCategory);

router.delete('/:categoryId', remuveCategory);

router.param('categoryId', categoryById);



export default router;