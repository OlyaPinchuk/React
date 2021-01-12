import React from 'react';
import '../../styles.css'
import logo from '../../logo.png'
import catalogue from '../../catalogue.png'
import search from '../../search.png'
import add1 from '../../add1.jpeg'
import add2 from '../../add2.jpg'
import add3 from '../../add3.jpg'
import mic from '../../mic.png'
import {Navbar, Nav, Button, NavDropdown, Form, FormControl, Row, Col, Container} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import {ProductService} from '../../services/Product-service'



export default function Header() {

    const productService = new ProductService()
    let products = productService.getAllProducts().then(v => console.log('here', v))



    let array = [];
    for (let i = 1; i <= 15; i++) {
        array.push(`product ${i}`)
    }
    console.log(array);

    let rows =[];
    for (let i = 0; i <= array.length; i += 4) {
        let row = (
            <Row key = {i}>
                <Col sm = {3}>{array[i]}</Col>
                <Col sm = {3}>{array[i+1]}</Col>
                <Col sm = {3}>{array[i+2]}</Col>
                <Col sm = {3}>{array[i+3]}</Col>
            </Row>
        )
        rows.push(row)

    }

    let images = [add1, add2, add3]
    let carouselItems = []

    for (let i = 0; i < images.length; i++){
        let item = (
            <Carousel.Item key = {i}>
                <img className="d-block carousel-pic"
                     src={images[i]}
                     alt="First slide"
                />

            </Carousel.Item>
        )

        carouselItems.push(item)
    }

    console.log(carouselItems)

    return(
        <div>


            <nav id = 'addBar' className="navbar-add">Реклама тут</nav>
            <nav id='topNavbar' className=" container-fluid navbar navbar-expand-lg text-white">

                <div className=" container-fluid collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className=" row navbar-nav mr-auto mt-2 mt-md-0">
                        <li className=" col-sm-2 nav-item">
                            <a className="nav-link text-white" href="#!">44 444</a>
                        </li>

                        <li className=" col-sm2 nav-item">
                            <a className="nav-link text-white" href="#!">контакти</a>
                        </li>

                        <li className=" col-sm-2 nav-item">
                            <a className="nav-link text-white" href="#!">допомога</a>
                        </li>

                        <li className=" col-sm-3 nav-item">
                            <a className="nav-link text-white" href="#!">відповідь ковід</a>
                        </li>

                        <li className=" col-sm-1 nav-item">
                            <a className="nav-link text-white" href="#!">мови</a>
                        </li>

                        <li className="col-sm-1 nav-item">
                            <a className="nav-link text-white" href="#!">місто</a>
                        </li>

                        <li className="col-sm-1 nav-item">
                            <a className="nav-link text-white" href="#!">аккаунт</a>
                        </li>

                    </ul>
                </div>
            </nav>


            <nav className=" container-fluid navbar navbar-expand-lg navbar-light">
                <div className='row'>
                    <a  id='logo' className=" col-sm-3 navbar-brand" href="#">
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

                        <form id = 'form' className="form-inline">

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

                        <div className = 'col-sm-1 icon '>
                            <div>Спробуйте</div>
                            <div>Premium</div>
                        </div>
                        <div className = 'icon '>Wishlist</div>
                        <div className = 'icon '>Cart</div>
                        <div className = 'icon '>Compare</div>

                    </div>
                </div>
            </nav>


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

                        <Carousel>
                            {carouselItems}


                            {/*{ */}
                            {/*    // ([add1, add2, add3]).map(el => {*/}
                            {/*    //     return (*/}
                            {/*    //         <Carousel.Item>*/}
                            {/*    //             <img*/}
                            {/*    //               className="d-block carousel-pic"*/}
                            {/*    //               src={el}*/}
                            {/*    //               alt="First slide"*/}
                            {/*    //             />*/}
                            {/*    //             <Carousel.Caption>*/}
                            {/*    //               <h3>First slide label</h3>*/}
                            {/*    //               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                            {/*    //             </Carousel.Caption>*/}
                            {/*    //         </Carousel.Item>*/}
                            {/*    //     )*/}
                            {/*    // })*/}
                            {/*}*/}

                        {/*  /!*<Carousel.Item>*!/*/}
                        {/*  /!*  <img*!/*/}
                        {/*  /!*    className="d-block carousel-pic"*!/*/}
                        {/*  /!*    src={add2}*!/*/}
                        {/*  /!*    alt="Third slide"*!/*/}
                        {/*  /!*  />*!/*/}

                        {/*  /!*  <Carousel.Caption>*!/*/}
                        {/*  /!*    <h3>Second slide label</h3>*!/*/}
                        {/*  /!*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*!/*/}
                        {/*  /!*  </Carousel.Caption>*!/*/}
                        {/*  /!*</Carousel.Item>*!/*/}
                        </Carousel>

                        <Container>
                            {rows}
                        </Container>


                        {/*<div className="container-fluid">*/}
                        {/*    <div className="row">*/}
                        {/*        <div className="col-lg-3">*/}
                        {/*            here*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-3">*/}
                        {/*            here*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-3">*/}
                        {/*            here*/}
                        {/*        </div>*/}
                        {/*        <div className="col-lg-3">*/}
                        {/*            here*/}
                        {/*        </div>*/}

                        {/*    </div>*/}

                        {/*</div>*/}

                    </div>
                </div>
            </div>

        </div>
    )

}
