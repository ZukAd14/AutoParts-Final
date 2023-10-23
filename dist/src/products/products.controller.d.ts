import { ProductsService } from './products.service';
import { CreateProductDTO } from './dtos/create-product.dto';
import { UpdateProductDTO } from './dtos/update-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        price: number;
        shortDescription: string;
        description: string;
        mainImage: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        price: number;
        shortDescription: string;
        description: string;
        mainImage: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    create(productData: CreateProductDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        price: number;
        shortDescription: string;
        description: string;
        mainImage: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    updateById(id: string, productData: UpdateProductDTO): Promise<{
        success: boolean;
    }>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
}
