import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/dto/product.dto';
import { ProductEntity } from 'src/enities/product.entity';
import { Product } from 'src/models/product.model';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return await this.productRepository.findOne({ where: { id } });
  }

  async createProduct(productDto: ProductDto) {
    const product = this.productRepository.create(productDto);
    return await this.productRepository.save(product);
  }

  async update(id: number, productDto: ProductDto) {
    const product = await this.productRepository.findOne({ where: { id } });
    const productUpdate = {
      ...product,
      ...productDto,
    };
    return await this.productRepository.save(productUpdate);
  }

  async delete(id: number) {
    const product = await this.productRepository.findOne({ where: { id } });
    return await this.productRepository.remove(product);
  }
}
