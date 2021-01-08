//https://codesandbox.io/s/distracted-mendeleev-hi0k6?file=/src/services/index.js:126-140
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Header} from './components/header'
import './styles.css'
import {useServices} from "./services";
import {setProducts} from "./redux";
import {ProductList} from "./components/products-list/Products-list";


export default function App() {

    const {cart, wishlist, products} = useSelector(
       ({ cart: { cart }, wishlist: { wishlist }, products: { products } }) => ({
          cart,
          wishlist,
          products
        })
    )

    const dispatch = useDispatch()

    const { productService } = useServices()

    const fetchData = useCallback(async() => {

        const data = await productService.getProducts();
        const json = await data.json();

        dispatch(setProducts(json))

        console.log(json)

    }, [])

    useEffect(() => {
        fetchData()
    }, [])


    return (

        <div>
            <Header/>
            <ProductList products={products} />

        </div>

    )

};
