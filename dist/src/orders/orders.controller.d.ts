import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    create(orderData: CreateOrderDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        firstName: string;
        lastName: string;
        address: string;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
}
