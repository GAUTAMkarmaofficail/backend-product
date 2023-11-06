import { Router } from "express";
import productList from "./product";
const router = Router();
const register = (app) => {
  app.use(router);
  router.use("/api", [productList]);
};

export default register;
