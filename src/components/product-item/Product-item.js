import React from 'react'
import '../../styles.css'

export const ProductItem = ({
  isAddedToWishlist,
  isAddedToCart,
  onAddToCart,
  onAddToWishList,
  product,
  product: { id, title, price, description }}) => {

    return (
        <div className='item' >
            <div>product id: {id}</div>
            <div>title: {title}</div>
            <div>price: {price}</div>

            <button className = 'button'
                    style={{ background: isAddedToWishlist ? "lightsalmon" : "lightcyan" }}
                    onClick={() => onAddToWishList(product)}>
                    {isAddedToWishlist ? "remove from wishlist" : "add to wishlist"}
            </button>
            <button className = 'button'
                    style={{ background: isAddedToCart ? 'lightsalmon' : 'lightcyan' }}
                    onClick={() => onAddToCart(product)}>
                    {isAddedToCart ? 'remove from cart' : 'buy'}
            </button>

        </div>


    )

}