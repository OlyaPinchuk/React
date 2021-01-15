import React, {useState, useCallback, useEffect} from 'react';
import '../../styles.css'
import add1 from '../../add1.jpeg'
import add2 from '../../add2.jpg'
import add3 from '../../add3.jpg'
import {Image, Navbar, Nav, Button, NavDropdown, Form, FormControl, Row, Col, Container} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import {ProductService} from '../../services/Product-service'
import mac from '../../macbook.jpg'

export const ProductItem = ({
  isAddedToWishlist,
  isAddedToCart,
  onAddToCart,
  onAddToWishList,
  product,
  product: { id, title, price, description }}) => {

    return (
        <Col sm = {3}>
            <div className="card border border-secondary">
                <Image className="card-img-top" src={mac} alt="Card image cap"/>
                <div className="card-body">
                    <h6 className="card-title text-truncate">{title}</h6>
                    <p className="card-text">
                        {price}
                    </p>
                    <div>
                        <a href="#!" className="btn btn-outline-dark btn-sm card-btn"
                           style={{ background: isAddedToCart ? 'lightsalmon' : 'lightcyan' }}
                            onClick={() => onAddToCart(product)}>
                            {isAddedToCart ? 'Remove from cart' : 'Buy'}
                        </a>
                    </div>

                    <div>
                        <a href="#!" className="btn btn-outline-dark btn-sm card-btn"
                            style={{ background: isAddedToWishlist ? "lightsalmon" : "lightcyan" }}
                            onClick={() => onAddToWishList(product)}>
                            {isAddedToWishlist ? "Remove from wishlist" : "Add to wishlist"}
                        </a>
                    </div>

                </div>
            </div>
        </Col>
    )

}