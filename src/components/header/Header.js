import React, {useState, useCallback, useEffect} from 'react';
import '../../styles.css'
import logo from '../../logo.png'
import catalogue from '../../catalogue.png'
import search from '../../search.png'
import mic from '../../mic.png'
import {Navbar, Nav, Button, NavDropdown, Form, FormControl, Row, Col, Container} from 'react-bootstrap'
import {useSelector} from "react-redux";




export default function Header() {

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

            <nav id = 'addBar' className="navbar-add d-none d-lg-block">Реклама тут</nav>
            <nav id='topNavbar' className=" container-fluid navbar navbar-expand-lg text-white d-none d-lg-block">

                <div className=" container-fluid collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className=" row navbar-nav mr-auto mt-2 mt-md-0">
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

                    </ul>
                </div>
            </nav>


            <nav className=" container-fluid navbar navbar-expand-lg navbar-light">
                <div className='row'>
                    <a  id='logo' className="navbar-brand " href="#">
                        <img src={logo} alt="Rozetka logo" width="270" height="40px"/>
                    </a>

                    <div className="main-navbar-item collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a id = 'catalogue' className="nav-link text-white " href="#">
                                    <img id = 'catalogue-pic' src={catalogue} alt='Catalogue pic'/>
                                      Каталог товарів
                                </a>
                            </li>
                        </ul>

                        <form id = 'form' className="main-navbar-item form-inline d-block">

                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span id = 'search' className="btn">
                                        <img src={search} />
                                    </span>
                                </div>
                                <input id='search-input' type="text" className="form-control" placeholder="Я шукаю..."
                                       aria-label="Recipient's username" aria-describedby="basic-addon2"/>

                                <div className="input-group-append">
                                    <button id = 'mic' className="btn" type="button">
                                        <img id = 'mic-pic' src={mic} />
                                    </button>
                                    <button id='find' className="btn bg-success text-white my-2 my-sm-0" type="submit">Знайти</button>
                                </div>
                            </div>

                        </form>

                        <div className = ' main-navbar-item icon btn btn-sm text-white d-none d-lg-block'>
                            <div>Спробуйте</div>
                            <div id='premium'>PREMIUM</div>
                        </div>
                        <div className = 'main-navbar-item icon btn btn-sm text-white d-none d-lg-block'>Compare</div>
                        <div className = ' main-navbar-item icon btn btn-sm text-white'>Wishlist</div>
                        <div className = ' main-navbar-item icon btn btn-sm text-white' title={`total price: ${cartSum}`}>Cart {cart.length}</div>

                    </div>
                </div>
            </nav>




        </div>
    )

}
