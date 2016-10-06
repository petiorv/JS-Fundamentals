function solve(input) {
    let products = new Map();
    for (let row of input){
        let currentRow = row.split('|').map(r => r.trim());
        let currentProduct  = currentRow;

        let product = currentProduct[1];

        if(!products[product]) {
            products.set(product, new Map());
        }
    }
    for(let [product] of products){
        console.log(product)
    }
}

solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'

])