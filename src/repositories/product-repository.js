import models from "../models/index";
const excelJs = require("exceljs");
const workbook = new excelJs.Workbook();
const worksheet = workbook.addWorksheet("list of product");
const { Product } = models;
const header = [
  {
    header: "ID",
    key: "id",
    width: 20,
  },
  {
    header: "Title",
    key: "title",
    width: 20,
  },
  {
    header: "Category",
    key: "category",
    width: 20,
  },
  {
    header: "Description",
    key: "description",
    width: 20,
  },
  {
    header: "Thumbnail",
    key: "thubnail",
    width: 20,
  },
  {
    header: "Brand",
    key: "brand",
    width: 20,
  },
  {
    header: "Price",
    key: "price",
    width: 20,
  },
  {
    header: "Stock",
    key: "stock",
    width: 20,
  },
  {
    header: "DiscountPercentage",
    key: "discountpercentage",
    width: 20,
  },
];

worksheet.columns = header;
export default {
  async saveProduct(req) {
    const products = req.products;
    try {
      const createdProducts = await Product.bulkCreate(products, {
        fields: [
          "id",
          "title",
          "description",
          "price",
          "discountPercentage",
          "stock",
          "brand",
          "category",
          "thumbnail",
          "images",
        ],
      });
      return createdProducts;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async getProduct() {
    try {
      const data = await Product.findAll();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  async getProductExcel(res) {
    try {
      const products = await models.Product.findAll();
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
};
