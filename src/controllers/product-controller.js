import repository from "../repositories";
import utility from "../services/utility";
const { productRepository } = repository;
export default {
  async saveProductList(req, res, next) {
    try {
      const result = await productRepository.saveProduct(req.body);
      if (result) {
        res.status(utility.httpStatus("OK")).json({
          success: true,
          data: result,
          message: "Product save successfully",
        });
      } else {
        res.status(utility.httpStatus("BAD_REQUEST")).json({
          success: false,
          data: null,
          message: "Product save failed",
        });
      }
    } catch (error) {}
  },
  async getProductList(req, res, next) {
    try {
      const result = await productRepository.getProduct();
      if (result) {
        res.status(utility.httpStatus("OK")).json({
          success: true,
          data: result,
          message: "Product fetch successfully",
        });
      } else {
        res.status(utility.httpStatus("BAD_REQUEST")).json({
          success: false,
          data: null,
          message: "Product fetch failed",
        });
      }
    } catch (error) {}
  },
  async getProductExcel(req, res) {
    try {
      const results = await productRepository.getProductExcel(req);
      if (results) {
        res.status(utility.httpStatus("OK")).json({
          success: true,
          data: results,
          message: "Excel downloaded successfully",
        });
      } else {
        res.status(utility.httpStatus("BAD_REQUEST")).json({
          success: false,
          data: null,
          message: "Excel downloaded failed",
        });
      }
    } catch (error) {}
  },
};
