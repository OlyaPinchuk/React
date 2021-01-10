import React, {useState} from "react";
import { useSelector } from "react-redux";
import {CartList} from '../cart/CartList'
import '../../styles.css'

export const Header = (props) => {

  const { cart, wishlist } = useSelector(
    ({ cart: { cart }, wishlist: { wishlist } }) => ({
      wishlist,
      cart
    })
  );

   let cartSum = 0;
   if (cart.length >= 1){
        cartSum = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
        }, 0)
    }

  return (
    <header className="d-flex justify-between align-center">
      <h2>Hello in the shop</h2>

      <div className="d-flex justify-between">


        <div className="mx-10" title={`total price: ${cartSum}`}  >
          cart: {cart.length}
        </div>
        <div className="mx-10" title="wishlist">
          wishlist: {wishlist.length}
        </div>
      </div>
    </header>
  );
};
