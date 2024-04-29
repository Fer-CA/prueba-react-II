import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from "../assets/img/logo.png";
import { NavLink, Link } from "react-router-dom";

const Menu = () => {
  const { carrito } = useContext(MyContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={Logo}
                width="30"
                height="30"
                className="logo d-inline-block align-top"
                alt="logo pizzería"
              />
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className="nav-item nav-link" to="/carrito">
              <h4 className='mb-0'>{""} Total: ${(total)}</h4>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;