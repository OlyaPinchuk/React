//https://codesandbox.io/s/distracted-mendeleev-hi0k6?file=/src/services/index.js:126-140
import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux'



export default function App() {

    const {cart, wishlist, products} = useSelector(
       ({ cart: { cart }, wishlist: { wishlist }, products: { products } }) => ({
          cart,
          wishlist,
          products
        })
    )


    return (

        <div>

            {cart.length} {wishlist.length} {products.length}

        </div>

    )

};
