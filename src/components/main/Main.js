import React, {useState, useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import '../../styles.css'
import add1 from '../../add1.jpeg'
import add2 from '../../add2.jpg'
import add3 from '../../add3.jpg'
import {Image, Navbar, Nav, Button, NavDropdown, Form, FormControl, Row, Col, Container, ListGroup, ListGroupItem} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import {ProductService} from '../../services/Product-service'
import mac from '../../macbook.jpg'
import {ProductItem} from "./Product-item";
import {setProducts} from "../../redux";
import {toggleItemInWishlist, toggleItemInCart} from "../../redux";



export default function Main({filteredList, handleSearchInput, searchText}) {

      const {products, cart, wishlist} = useSelector(
       ({ products: { products }, cart: { cart }, wishlist: { wishlist } }) => ({
          products,
           cart,
          wishlist
            })
        )

    const dispatch = useDispatch()


    const productService = new ProductService()

    const fetchData = useCallback(async() => {
        const data = await productService.getAllProducts()
        dispatch(setProducts(data))
    }, [])

    useEffect(() => {
        fetchData()
    }, [])


    let filteredItems = products;
    if (searchText !== ''){
         filteredItems = products.filter(product => product.title.toUpperCase().includes(searchText.toUpperCase()))
        console.log(filteredItems)
    }

    const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    }

    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))

    }

    let images = [add2, add1, add3]
    let carouselItems = []

    for (let i = 0; i < images.length; i++){
        let item = (
            <Carousel.Item key = {i}>
                <Image className="d-block align-self-center carousel-pic"
                     src={images[i]}
                     alt="First slide"
                />

            </Carousel.Item>
        )

        carouselItems.push(item)
    }


    return (
             <Container fluid>
                <Row>

                    <Col sm='4' md='3'>
                        <ListGroup variant="flush">
                          <ListGroupItem action variant="light" href="#">Ноутбуки</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Смартфони</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Morbi leo risus</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Morbi</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Porta ac consectetur ac</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Porta ac consectetur ac</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Porta ac consectetur ac</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Porta ac consectetur ac</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Porta ac consectetur ac</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Porta ac consectetur ac</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Porta ac consectetur ac</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Porta ac consectetur ac</ListGroupItem>
                          <ListGroupItem action variant="light" href="#">Porta ac consectetur ac</ListGroupItem>
                        </ListGroup>
                    </Col>


                    <Col sm = '8' md='9' >
                        <Carousel>
                            {carouselItems}
                        </Carousel>

                        <Container fluid>
                            <Row>
                            { filteredItems !== null && filteredItems.map((product) => (
                                 <ProductItem
                                      isAddedToWishlist={!!wishlist.find(({ id }) => id === product.id)}
                                      isAddedToCart={!!cart.find(({ id }) => id === product.id)}
                                      onAddToCart={onAddToCart}
                                      onAddToWishList={onAddToWishlist}
                                      key={product.id}
                                      product={product}
                                    />
                                  ))}
                            </Row>
                        </Container>
                    </Col>
               </Row>
            </Container>



    )



}