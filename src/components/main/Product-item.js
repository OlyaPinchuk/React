import React, {useState, useCallback, useEffect} from 'react';
import '../../styles.css'
import add1 from '../../add1.jpeg'
import add2 from '../../add2.jpg'
import add3 from '../../add3.jpg'
import {Image, Navbar, Nav, Button, NavDropdown, Form, FormControl, Row, Col, Container, Card, CardImg} from 'react-bootstrap'
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
            <Card>
                <CardImg src={mac} alt="Card image cap"/>
                <Card.Body>
                    <Card.Title className="text-truncate">{title}</Card.Title>
                    <Card.Text>{price}</Card.Text>

                        <div>
                            <Button className="btn-outline-dark btn-sm card-btn"
                               style={{ background: isAddedToCart ? 'lightsalmon' : 'lightcyan' }}
                                onClick={() => onAddToCart(product)}>
                                {isAddedToCart ? 'Remove from cart' : 'Buy'}
                            </Button>
                        </div>

                        <div>
                            <Button className="btn-outline-dark btn-sm card-btn"
                                style={{ background: isAddedToWishlist ? "lightsalmon" : "lightcyan" }}
                                onClick={() => onAddToWishList(product)}>
                                {isAddedToWishlist ? "Remove from wishlist" : "Add to wishlist"}
                            </Button>
                        </div>


                </Card.Body>
            </Card>
        </Col>
    )

}