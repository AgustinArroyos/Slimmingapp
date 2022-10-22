import express from "express";
import { listfood, create, remove, foodById } from "../controllers/foodController.js"
const router = express.Router();

router.get('/', listfood);

router.post('/create', create);

router.delete('/:foodId', remove)

router.param("foodId", foodById);
export default router;