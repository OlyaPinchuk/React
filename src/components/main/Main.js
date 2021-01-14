import React, {useState, useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import '../../styles.css'
import add1 from '../../add1.jpeg'
import add2 from '../../add2.jpg'
import add3 from '../../add3.jpg'
import {Navbar, Nav, Button, NavDropdown, Form, FormControl, Row, Col, Container} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import {ProductService} from '../../services/Product-service'
import mac from '../../macbook.jpg'
import {ProductItem} from "./Product-item";
import {setProducts} from "../../redux";
import {toggleItemInWishlist, toggleItemInCart} from "../../redux";



export default function Main() {

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

    const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    }

    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))

    }





    // const [state, setState] = useState({products: null})
    //
    // const productService = new ProductService()
    //
    // const fetchData = useCallback(async() => {
    //     const data = await productService.getAllProducts()
    //     setState({products: data})
    // }, [])
    //
    // useEffect(() => {
    //     fetchData()
    // }, [])
    //
    // console.log(state.products)
    //
    // let rows = []
    // if (state.products !== null) {
    //     for (let i = 0; i < state.products.length; i += 4){
    //          let row = (
    //             <Row key = {i} className= 'row'>
    //                 <Col sm = {3}>
    //                     <div className="card border border-secondary">
    //                         <img className="card-img-top" src={mac} alt="Card image cap"/>
    //                             <div className="card-body">
    //                                 <h6 className="card-title text-truncate">{state.products[i].title}</h6>
    //                                 <p className="card-text">
    //                                     {state.products[i].price}
    //                                 </p>
    //                                 <a href="#!" className="btn btn-primary btn-sm card-btn">Buy</a>
    //                                 <a href="#!" className="btn btn-primary btn-sm card-btn">Add to wishlist</a>
    //                             </div>
    //                     </div>
    //                 </Col>
    //                 <Col sm = {3}>
    //                     <div className="card border border-secondary ">
    //                             <img className="card-img-top" src={mac} alt="Card image cap"/>
    //                                 <div className="card-body">
    //                                     <h6 className="card-title text-truncate">{state.products[i+1].title}</h6>
    //                                     <p className="card-text">
    //                                         {state.products[i+1].price}
    //                                     </p>
    //                                     <a href="#!" className="btn btn-primary btn-sm card-btn">Buy</a>
    //                                     <a href="#!" className="btn btn-primary btn-sm card-btn">Add to wishlist</a>
    //
    //                                 </div>
    //                         </div>
    //                 </Col>
    //                 <Col sm = {3}>
    //                     <div className="card border border-secondary ">
    //                             <img className="card-img-top" src={mac} alt="Card image cap"/>
    //                                 <div className="card-body">
    //                                     <h6 className="card-title text-truncate">{state.products[i+2].title}</h6>
    //                                     <p className="card-text">
    //                                         {state.products[i+2].price}
    //                                     </p>
    //                                     <a href="#!" className="btn btn-primary btn-sm card-btn">Buy</a>
    //                                     <a href="#!" className="btn btn-primary btn-sm card-btn">Add to wishlist</a>
    //
    //                                 </div>
    //                         </div>
    //                 </Col>
    //                 <Col sm = {3}>
    //                     <div className="card border border-secondary ">
    //                             <img className="card-img-top" src={mac} alt="Card image cap"/>
    //                                 <div className="card-body">
    //                                     <h6 className="card-title text-truncate">{state.products[i+3].title}</h6>
    //                                     <p className="card-text">
    //                                         {state.products[i+3].price}
    //                                     </p>
    //                                     <a href="#!" className="btn btn-primary btn-sm card-btn">Buy</a>
    //                                     <a href="#!" className="btn btn-primary btn-sm card-btn">Add to wishlist</a>
    //                                 </div>
    //                         </div>
    //                 </Col>
    //             </Row>
    //         )
    //     rows.push(row)
    //     }
    // }
    //
    // let images = [add2, add1, add3]
    // let carouselItems = []
    //
    // for (let i = 0; i < images.length; i++){
    //     let item = (
    //         <Carousel.Item key = {i}>
    //             <img className="d-block align-self-center carousel-pic"
    //                  src={images[i]}
    //                  alt="First slide"
    //             />
    //
    //         </Carousel.Item>
    //     )
    //
    //     carouselItems.push(item)
    // }


    return (
        <div>
             <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 col-md-3">
                         <ul id = 'list-group' className="list-group">
                            <li className="list-group-item">Ноутбуки</li>
                            <li className="list-group-item">Смартфони</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>

                    <div className="col-sm-8 col-md-9">

                        {/*<Carousel>*/}
                        {/*    {carouselItems}*/}
                        {/*</Carousel>*/}

                        <Container>
                            <Row>
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
                            </Row>
                        </Container>

                    </div>
                </div>
            </div>
        </div>


    )



}