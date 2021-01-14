import {SET_PRODUCTS, TOGGLE_ITEM_IN_WISHLIST, TOGGLE_ITEM_IN_CART } from "../action-types";

export const setProducts = (payload) => ({type: SET_PRODUCTS, payload})

export const toggleItemInCart = (product) => ({type: TOGGLE_ITEM_IN_CART, payload: product})

export const toggleItemInWishlist = (product) => ({type: TOGGLE_ITEM_IN_WISHLIST, payload: product})