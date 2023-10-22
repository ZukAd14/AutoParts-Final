import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


const NavBar = () => {

    const cartItems = useSelector((state) => state.cart.products);
    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href='/'>Auto-Parts</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-nabar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/cart'>
                                <div>
                                    <FontAwesomeIcon icon={faShoppingBasket} />
                                </div>
                                <div className='counter'>{totalItemsInCart}</div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;