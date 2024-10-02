import { Module } from '@nestjs/common';
import { ProductControllers } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/enities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductControllers],
  providers: [ProductService],
})
export class ProductModule {}
