export class Product {
  id?: number;
  categoryId?: number;
  productName?: string;
  price?: number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({ id, categoryId, productName, price, createdAt, updatedAt }) {
    if (id !== null) this.id = id;
    if (categoryId !== null) this.categoryId = categoryId;
    if (productName !== null) this.productName = productName;
    if (price !== null) this.price = price;
    if (createdAt !== null) this.createdAt = createdAt;
    if (updatedAt !== null) this.updatedAt = updatedAt;
  }
}
