import React, {useState, useCallback, useEffect} from 'react';
import '../../styles.css'
import logo from '../../logo.png'
import catalogue from '../../catalogue.png'
import search from '../../search.png'
import mic from '../../mic.png'
import {
    Image,
    ListGroup,
    ListGroupItem,
    Navbar,
    Nav,
    Button,
    NavDropdown,
    Form,
    FormControl,
    Row,
    Col,
    Container,
    NavbarBrand,
    InputGroup
} from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux";
import Main from "../main/Main";
import {setProducts} from "../../redux";
import {ProductService} from "../../services/Product-service";




export default function Header() {

    const [state, setState] =useState({searchText: ''})
    const productService = new ProductService()

    const dispatch = useDispatch()

    const {products, cart, wishlist} = useSelector(
       ({ products: { products }, cart: { cart }, wishlist: { wishlist } }) => ({
          products,
           cart,
          wishlist
        })
    )


    const handleSearchInput = (ev) => {
        let text = ev.target.value
       setState({searchText: text})
       console.log(state.searchText)
   }

    let cartSum = 0;
   if (cart.length >= 1){
        cartSum = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price
        }, 0)
    }


    return(
        <div>

            <Nav id = 'addBar' className="navbar-add d-none d-lg-block">Реклама тут</Nav>
            <Nav id='topNavbar' className="container-fluid navbar-expand-lg text-white d-none d-lg-block">

                <Container fluid >
                    <Row>
                        <Col md='2'>
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">44 444</a>
                        </Col>

                        <Col md='2'>
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">контакти</a>
                        </Col>

                        <Col md='2'>
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">допомога</a>
                        </Col>

                        <Col md='2'>
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">відповідь ковід</a>
                        </Col>

                        <Col md='1'>
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">мови</a>
                        </Col>

                        <Col md='1'>
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">місто</a>
                        </Col>

                        <Col md='2'>
                            <a className=" top-nav-bar-btn nav-link text-white" href="#!">аккаунт</a>
                        </Col>

                    </Row>
                </Container>
            </Nav>


            <Nav className="container-fluid navbar sticky-top navbar-expand-lg">
                <Row>

                        <NavbarBrand>
                             <a  id='logo' href="#">
                                <Image src={logo} alt="Rozetka logo" width="250" height="40px"/>
                            </a>
                        </NavbarBrand>


                        <a id = 'catalogue' className="nav-link text-white " href="#">
                            <Image id = 'catalogue-pic' src={catalogue} alt='Catalogue pic'/>
                                      Каталог товарів
                        </a>

                    <Col>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <span id = 'search' className="btn">
                                    <Image src={search} />
                                </span>
                            </InputGroup.Prepend>
                            <input id='search-input'
                                   type="text"
                                   value={state.searchText}

                                   placeholder="Я шукаю..."
                                   onChange={handleSearchInput}
                            />

                            <InputGroup.Append>
                                <Button id = 'mic' className="btn" type="button">
                                    <Image id = 'mic-pic' src={mic} />
                                </Button>
                                {/*<Button id='find' className="btn bg-success text-white my-2 my-sm-0" type="submit">Знайти</Button>*/}
                            </InputGroup.Append>
                        </InputGroup>

                    </Col>

                            <div className = ' main-navbar-item icon btn btn-sm text-white d-none d-lg-block'>
                                <div>Спробуйте</div>
                                <div id='premium'>PREMIUM</div>
                            </div>

                            <div className = 'main-navbar-item icon btn btn-sm text-white d-none d-lg-block'>Compare</div>

                            <div className = ' main-navbar-item icon btn btn-sm text-white '>Wishlist: {wishlist.length} </div>

                            <div className = ' main-navbar-item icon btn btn-sm text-white' title={`total price: ${cartSum}`}>Cart: {cart.length}</div>
                </Row>
            </Nav>

            <Main searchText={state.searchText}/>

        </div>
    )

}
