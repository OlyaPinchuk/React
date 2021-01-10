import React from 'react';
import {ProductItem} from "../product-item";
import {useDispatch, useSelector} from "react-redux";
import '../../styles.css'
import {toggleItemInWishlist, toggleItemInCart} from "../../redux";

export const ProductList = ({products}) => {

    const dispatch = useDispatch()
    const wishlist = useSelector(({wishlist: {wishlist}}) => wishlist)
    const cart = useSelector(({cart: {cart}}) => cart)

    const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    }

    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))

    }


    return (
        <div className = 'main-products'>
            <div className = 'filter-menu' >
                Filters here.
            </div>

            <div className = 'all-products' >
            {products.map((product) => (
                 <ProductItem
                      isAddedToWishlist={!!wishlist.find(({ id }) => id === product.id)}
                      isAddedToCart={!!cart.find(({ id }) => id === product.id)}
                      onAddToCart={onAddToCart}
                      onAddToWishList={onAddToWishlist}
                      key={product.id}
                      product={product}
                    />
                  ))}
            </div>
        </div>

    )


}