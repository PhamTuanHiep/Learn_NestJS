import { Injectable } from '@nestjs/common';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
 
    private products: Product[] = [
        {
            id:1,
            categoryId: 2,
            productName: "Nine Dev",
            price: 80000
        },
        {
            id:2,
            categoryId: 2,
            productName: "Seven Dev",
            price: 80000
        }
    ]
    getProducts():Product[]{
        return  this.products
    }

    createProduct():string{
        return 'POST  PRODUCTS'
    }

    detailProduct(id: number):Product{
        return this.products.find(item => item.id === Number(id))
    }


    updateProduct():string{
        return 'UPDATE PRODUCTS'
    }

    deleteProduct():string{
        return 'DELETE PRODUCTS'
    }
}
