export class ProductService {
    url = 'https://fakestoreapi.com/products'

     getAllProducts() {

        return fetch('https://fakestoreapi.com/products')
                    .then(value => value.json())

    }


}