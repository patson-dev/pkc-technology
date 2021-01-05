/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================


> Developed by Patson | www.patson.dev



*/
import React from 'react';
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState('');
  const [color, setColor] = React.useState('navbar-transparent');
  React.useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return function cleanup() {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor('bg-white');
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor('navbar-transparent');
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle('nav-open');
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut('collapsing-out');
  };
  const onCollapseExited = () => {
    setCollapseOut('');
  };
  return (
    <Navbar className={'fixed-top ' + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            to="/"
            tag={Link}
            id="navbar-brand"
            className="font-major"
          >
            PKC Tech
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={'justify-content-end bg-primary' + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand font-major text-white" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  PKC Tech
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar className="text-white">
            <NavItem className="p-0">
              <NavLink
                color="twitter"
                href="https://twitter.com/pkc_technology"
                id="twittertooltip1"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-twitter" />
                <p className="d-lg-none d-xl-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                color="linkedin"
                href="https://www.linkedin.com/in/pkc-technology"
                id="tooltip877922017"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
                <p className="d-lg-none d-xl-none">LinkedIn</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
