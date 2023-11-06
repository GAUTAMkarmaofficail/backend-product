import { Router } from "express";
import controllers from "../controllers";
const router = Router();
const { ProductController } = controllers;
router.post("/saveProduct", ProductController.saveProductList);
router.get("/getProduct", ProductController.getProductList);
router.get("/getProductExcel", ProductController.getProductExcel);
export default router;
