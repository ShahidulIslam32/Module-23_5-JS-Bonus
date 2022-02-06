let products = [
    {name: 'iphone 12', price: 60000},
    {name: 'iphone 14', price: 70000},
    {name: 'samsung',   price: 50000},
    {name: 'Dell Laptop',price:40000},
    {name: 'Lenovo',    price: 40000},
    {name: 'MacBook',   price: 80000},
    {name: 'watch',     price: 2000},
    {name: 'Headphone', price: 70000},
]

function searchProducts(products, searchText){
    const matched = []
    for(let product of products){
        if(product.name.includes(searchText)){
            matched.push(product);
        }
    }
    
    return matched
}
const result = searchProducts(products, 'iphone')
console.log(result)

