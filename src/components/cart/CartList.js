import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {ProductItem} from "../product-item";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux";

export const CartList = ({visibility}) => {

    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({
        cart,
        wishlist
    }))

    const dispatch = useDispatch()

     const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    }

    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))

    }


    return (
        <div style={{ zIndex: "1",
            display: visibility ? {visibility} :'none',
            background: "lightgoldenrodyellow",
            position: "fixed",
            left: "20%",
            top: "10%",
            maxHeight: '400px',
            width: '700px',
            borderRadius: '5px',
            color: "black",
            border: '2px solid darkgrey',
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            overflow: "auto",

        }} >

            {cart.length == 0 && <h4 style={{textAlign: 'center'}} > Your cart is empty</h4>}


            {
                cart.length >= 0 && cart.map((product) => (
                    <ProductItem
                        key = {product.id}
                        product = {product}
                        isAddedToCart={true}
                        isAddedToWishlist={!!wishlist.find(({ id }) => id === product.id)}
                        onAddToWishList = {onAddToWishlist}
                        onAddToCart = {onAddToCart}
                    />

                ))
            }

        </div>

    )


}