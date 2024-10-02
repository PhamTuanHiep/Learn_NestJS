import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductControllers {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<ResponseData<Product[]>> {
    try {
      return new ResponseData<Product[]>(
        await this.productService.findAll(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<Product[]>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get('/:id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseData<Product>> {
    try {
      return new ResponseData<Product>(
        await this.productService.findOne(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  async createProduct(
    @Body(new ValidationPipe()) productDto: ProductDto,
  ): Promise<ResponseData<ProductDto>> {
    try {
      return new ResponseData<Product>(
        await this.productService.createProduct(productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) productDto: ProductDto,
  ): Promise<ResponseData<Product>> {
    try {
      return new ResponseData<Product>(
        await this.productService.update(id, productDto),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Delete('/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ResponseData<boolean>> {
    try {
      return new ResponseData<boolean>(
        (await this.productService.delete(id)) ? true : false,
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (e) {
      return new ResponseData<boolean>(
        false,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
