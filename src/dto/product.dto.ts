import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';

export class ProductDto {
  id?: number;
  @IsNotEmpty()
  categoryId?: number;
  @MinLength(5, {
    message: 'Field productName must be more than 4 characters !',
  })
  @MaxLength(30, {
    message: 'Field productName must be less than 30 characters !',
  })
  productName?: string;
  @IsNumber()
  price?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
