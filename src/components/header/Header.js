import React, {useState, useCallback, useEffect} from 'react';
import '../../styles.css'
import logo from '../../logo.png'
import catalogue from '../../catalogue.png'
import search from '../../search.png'
import mic from '../../mic.png'
import {Image, ListGroup, ListGroupItem, Navbar, Nav, Button, NavDropdown, Form, FormControl, Row, Col, Container} from 'react-bootstrap'
import {useSelector} from "react-redux";




export default function Header() {

    const [state, setState] =useState({searchText: ''})

    const {products, cart, wishlist} = useSelector(
       ({ products: { products }, cart: { cart }, wishlist: { wishlist } }) => ({
          products,
           cart,
          wishlist
        })
    )

    let cartSum = 0;
   if (cart.length >= 1){
        cartSum = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
        }, 0)
    }


    return(
        <div>

            <Nav id = 'addBar' className="navbar-add d-none d-lg-block">Реклама тут</Nav>
            <Nav id='topNavbar' className=" container-fluid navbar navbar-expand-lg text-white d-none d-lg-block">

                <div className=" container-fluid collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ListGroup className=" row navbar-nav mr-auto mt-2 mt-md-0">
                        <li className=" col-sm-2 nav-item">
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">44 444</a>
                        </li>

                        <li className=" col-sm2 nav-item">
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">контакти</a>
                        </li>

                        <li className=" col-sm-2 nav-item">
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">допомога</a>
                        </li>

                        <li className=" col-sm-3 nav-item">
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">відповідь ковід</a>
                        </li>

                        <li className=" col-sm-1 nav-item">
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">мови</a>
                        </li>

                        <li className="col-sm-1 nav-item">
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">місто</a>
                        </li>

                        <li className=" top-nav-bar-btn col-sm-1 nav-item">
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">аккаунт</a>
                        </li>

                    </ListGroup>
                </div>
            </Nav>


            <Nav className=" container-fluid navbar navbar-expand-lg navbar-light">
                <div className='row'>
                    <a  id='logo' className="navbar-brand " href="#">
                        <Image src={logo} alt="Rozetka logo" width="270" height="40px"/>
                    </a>

                    <div className="main-navbar-item collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a id = 'catalogue' className="nav-link text-white " href="#">
                                    <Image id = 'catalogue-pic' src={catalogue} alt='Catalogue pic'/>
                                      Каталог товарів
                                </a>
                            </li>
                        </ul>


                        {/*<Form id = 'form' className="main-navbar-item form-inline d-block">*/}

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span id = 'search' className="btn">
                                        <Image src={search} />
                                    </span>
                                </div>
                                <input id='search-input'
                                       type="text"
                                       // value={state.searchText}
                                       // className="form-control"
                                       placeholder="Я шукаю..."
                                       onChange={console.log('works')}
                                       />

                                <div className="input-group-append">
                                    <Button id = 'mic' className="btn" type="button">
                                        <Image id = 'mic-pic' src={mic} />
                                    </Button>
                                    <Button id='find' className="btn bg-success text-white my-2 my-sm-0" type="submit">Знайти</Button>
                                </div>
                            </div>

                        {/*</Form>*/}

                        <div className = ' main-navbar-item icon btn btn-sm text-white d-none d-lg-block'>
                            <div>Спробуйте</div>
                            <div id='premium'>PREMIUM</div>
                        </div>
                        <div className = 'main-navbar-item icon btn btn-sm text-white d-none d-lg-block'>Compare</div>
                        <div className = ' main-navbar-item icon btn btn-sm text-white'>Wishlist</div>
                        <div className = ' main-navbar-item icon btn btn-sm text-white' title={`total price: ${cartSum}`}>Cart {cart.length}</div>

                    </div>
                </div>
            </Nav>




        </div>
    )

}
