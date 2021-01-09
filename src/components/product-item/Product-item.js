import React from 'react'
import '../../styles.css'

export const ProductItem = ({
  isAddedToWishlist,
  onAddToCart,
  onAddToWishList,
  product,
  product: { id, title, price, description }}) => {

    return (
        <div className='item' >
            {id}
            {title}
            {price}
            <button className = 'button'
                    style={{ background: isAddedToWishlist ? "lightsalmon" : "lightcyan" }}
                    onClick={() => onAddToWishList(product)}>
                    {isAddedToWishlist ? "remove from wishlist" : "add to wishlist"}
            </button>
            <button className = 'button'>buy</button>

        </div>


    )

}