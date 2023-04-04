import ProductModel from "../models/products.model.js";

export default class AdminController {
  static async addProduct(req, res) {
    try {
      const product = await ProductModel.addProduct(req.body);
      res.status(200).send(product);
    } catch (error) {
      console.log("error while adding product");
      res.status(500).send(error.message);
    }
  }

  static async updateProduct(req, res) {
    try {
      const updatedProduct = await ProductModel.updateProduct(
        req.params.id,
        req.body
      );
      res.status(200).send(updatedProduct);
    } catch (error) {
      console.log("error while updating product");
      res.status(500).send(error.message);
    }
  }

  static async removeProduct(req, res) {
    try {
      const product = await ProductModel.removeProduct(req.params.id);
      res.status(200).send(product);
    } catch (error) {
      console.log("Error while removing product");
      res.status(500).send(error.message);
    }
  }
}
