"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
function getProducts() {
    return [
        {
            id: 'ebc75852-1a5f-4a1d-8884-46a8aa739911',
            name: 'Piston',
            price: 150,
            shortDescription: 'High-quality piston for optimal engine performance.',
            description: 'This piston is designed for maximum durability and efficiency. It is made from high-quality materials to ensure long-lasting performance in your engine.',
            mainImage: 'Piston.jpg',
        },
        {
            id: '4ed2f9e1-f2c9-4d0c-be23-cc26bf606d7d',
            name: 'Conrod',
            price: 80,
            shortDescription: 'Premium connecting rod for your engine needs.',
            description: 'Our premium connecting rod is engineered to provide exceptional performance and reliability. It\'s an essential component for your engine.',
            mainImage: 'Conrod.jpg',
        },
        {
            id: '8b387903-6809-4bcb-9f82-f793aeedd3d3',
            name: 'Rings',
            price: 50,
            shortDescription: 'Durable piston rings for engine efficiency.',
            description: 'These piston rings are designed to maintain proper compression and reduce oil consumption in your engine. They are built to last and improve engine efficiency.',
            mainImage: 'Rings.jpg',
        },
        {
            id: '24bc871d-f709-442c-a57f-7133aeb8d592',
            name: 'Crankshaft',
            price: 300,
            shortDescription: 'High-performance crankshaft for powerful engines.',
            description: 'Our high-performance crankshaft is perfect for engines that demand maximum power. It is expertly crafted to provide superior performance and reliability.',
            mainImage: 'Crankshaft.jpg',
        },
        {
            id: '7c13cf6a-4ae2-46bf-b855-0064eb109aa9',
            name: 'Acetabulum',
            price: 30,
            shortDescription: 'Affordable acetabulum for various applications.',
            description: 'This acetabulum is a versatile component suitable for multiple applications. It offers great value for its price and is made to meet your needs.',
            mainImage: 'Acetabulum.jpg',
        },
        {
            id: '1246496c-03ba-41ef-ab92-501eecb7c85d',
            name: 'Spark Plug',
            price: 45,
            shortDescription: 'Reliable spark plugs for your engine.',
            description: 'Our reliable spark plugs ensure smooth ignition and efficient combustion. They are designed to last and maintain your engine\'s performance.',
            mainImage: 'SparkPlug.jpg',
        },
        {
            id: '170d6e77-bfd3-492b-9677-0458395085ac',
            name: 'Head Gasket',
            price: 15,
            shortDescription: 'Cost-effective head gasket for engine repairs.',
            description: 'This cost-effective head gasket is perfect for engine repairs and maintenance. It provides a reliable seal for your engine components.',
            mainImage: 'HeadGasket.jpg',
        },
        {
            id: '910ff77f-ce33-475d-9e78-b731e0f18e0d',
            name: 'Turbocharger',
            price: 450,
            shortDescription: 'High-performance turbocharger for extra power.',
            description: 'Our high-performance turbocharger is designed for engines that need an extra boost of power. It is built to deliver exceptional performance and reliability.',
            mainImage: 'Turbocharger.jpg',
        },
        {
            id: '3ed7ad72-9742-48b2-99f0-90b53057607f',
            name: 'Valve',
            price: 75,
            shortDescription: 'Quality valves for engine applications.',
            description: 'These quality valves are suitable for various engine applications. They are built to last and maintain optimal engine performance.',
            mainImage: 'Valve.jpg',
        },
        {
            id: '90fc3350-d5d9-4c45-a594-b7b72ee34aad',
            name: 'Camshaft',
            price: 320,
            shortDescription: 'High-performance camshaft for engine enthusiasts.',
            description: 'Our high-performance camshaft is a must-have for engine enthusiasts seeking top-tier performance. It is expertly engineered to deliver outstanding power and reliability.',
            mainImage: 'Camshaft.jpg',
        },
    ];
}
async function clearDatabase() {
    await db.product.deleteMany({});
    await db.order.deleteMany({});
    await db.orderProduct.deleteMany({});
    await db.user.deleteMany({});
    await db.password.deleteMany({});
    console.log('clear');
}
async function seed() {
    clearDatabase();
    await Promise.all(getProducts().map((product) => {
        return db.product.create({ data: product });
    }));
    console.log('Seed completed successfully.');
}
seed();
//# sourceMappingURL=seed.js.map