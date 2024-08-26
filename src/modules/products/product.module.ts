import { Module } from '@nestjs/common';
import { ProductControllers } from './product.controller';
import { ProductService } from './product.service';

@Module({
    controllers: [ProductControllers],
    providers: [ProductService],
    
})
export class ProductModule {}
