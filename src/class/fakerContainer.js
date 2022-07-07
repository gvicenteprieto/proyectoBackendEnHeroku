import faker from '@faker-js/faker';

function generateRandomProduct(cant = 5) {
    let listProducts = [];
    for (let i = 0; i < Number(cant); i++) {
        const prod = {
            id: i+1,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            stock: faker.random.numeric(2),
            description: faker.commerce.productDescription(),
            url: faker.internet.url(),
            code: faker.random.alphaNumeric(10),
            timestamp: Date.now()
        }
        listProducts.push(prod); 
    }
    return listProducts
};

export default generateRandomProduct;
