import { Col, Row } from "react-bootstrap";
import IMAGES from "../assets/img/images";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Nav = ({name}) => {
    return(
        <Navbar bg="light" className="py-4 bg-white">
          <Container>
            <Navbar.Brand className="fs-2 logo-text fw-bold">
              {name}
              </Navbar.Brand>
              <Navbar.Brand>
              <img
                alt=""
                src={IMAGES.menu_icon}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              </Navbar.Brand>
          </Container>
      </Navbar>
    );
};

export default Nav;