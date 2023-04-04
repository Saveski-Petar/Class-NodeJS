import { getDB } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";

export default class ProductModel {
  static async getAllProducts() {
    const collection = await getDB().collection("products");
    const products = await collection.find().toArray();

    return products;
  }

  static async getProductById(id) {
    const collection = await getDB().collection("products");
    const product = await collection.findOne({ _id: new ObjectId(id) });

    return product;
  }
  static async addProduct(product) {
    const collection = await getDB().collection("products");
    const createdProductInfo = await collection.insertOne(product);

    return { id: createdProductInfo.insertedId, ...product };
  }

  static async updateProduct(productId, body) {
    const collection = await getDB().collection("products");
    const updatedProductInfo = await collection.updateOne(
      { _id: new ObjectId(productId) },
      { $set: body }
    );

    return updatedProductInfo;
  }

  static async removeProduct(id) {
    const collection = await getDB().collection("products");
    const deleteProduct = await collection.deleteOne({ _id: new ObjectId(id) });

    return deleteProduct;
  }

  static async makePurchase(purchase) {
    const product = await this.getProductById(purchase.productId);

    if (!product)
      throw new Error(`Product with id:${purchase.productId} does not exist`);

    if (product.stock < purchase.quantity)
      throw new Error(`Not enough in stock`);

    const collection = await getDB().collection("purchases");
    const createdPurchaseRes = await collection.insertOne(purchase);

    const updatedProduct = {
      stock: product.stock - purchase.quantity,
      purchases: product.purchases + purchase.quantity,
    };

    await this.updateProduct(purchase.productId, updatedProduct);
    return { id: createdPurchaseRes.insertedId, ...purchase };
  }

  static async updatePurchase(purchaseId, body) {
    const product = await this.getProductById(body.productId);

    if (!product) throw new Error(`Product does not exist`);

    if (product.stock < body.quantity) throw new Error(`Not enough in stock`);

    const collection = await getDB().collection("purchases");
    const updatedPurchase = await collection.updateOne(
      { _id: new ObjectId(purchaseId) },
      { $set: body }
    );

    const updatedProduct = {
      stock: product.stock - body.quantity,
      purchases: product.purchase + body.quantity,
    };
    await this.updateProduct(body.productId, updatedProduct);

    return {
      id: purchaseId,
      ...body,
    };
  }
}
