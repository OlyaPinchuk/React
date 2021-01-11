import React from 'react';
import '../../styles.css'
import logo from '../../logo.png'
import catalogue from '../../catalogue.png'
import search from '../../search.png'
import mic from '../../mic.png'
// import {Navbar, Nav, Button, NavDropdown, Form, FormControl} from 'react-bootstrap'



export default function Header() {


    return(
        <div>
            <nav id = 'addBar' className="navbar-add">Реклама тут</nav>
            <nav id = 'topNavbar' className="navbar text-white">Top navbar</nav>

            <nav className="navbar navbar-expand-lg navbar-light">

                <a id='logo' className="navbar-brand" href="#">
                    <img src={logo} alt="Rozetka logo" width="270" height="40px"/>
                </a>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a id = 'catalogue' className="nav-link text-white " href="#">
                                <img id = 'catalogue-pic' src={catalogue} alt='Catalogue pic'/>
                                  Каталог товарів
                            </a>
                        </li>
                    </ul>

                    <form id = 'form' className="form-inline ">

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

                        {/*<div className="form-group has-search">*/}
                        {/*    <span className="fa fa-search form-control-feedback"></span>*/}
                        {/*    <input type="text" className="form-control" placeholder="Search"/>*/}
                        {/*    <button className="btn bg-success text-white my-2 my-sm-0" type="submit">Знайти</button>*/}
                        {/*</div>*/}
                    </form>

                    <div className = 'icon '>
                        <div>Спробуйте</div>
                        <div>Premium</div>
                    </div>
                    <div className = 'icon '>Wishlist</div>
                    <div className = 'icon '>Cart</div>
                    <div className = 'icon '>Compare</div>

                </div>
            </nav>
        </div>
    )


}
