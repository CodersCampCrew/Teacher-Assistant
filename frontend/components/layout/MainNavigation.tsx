import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import userService from "../../services/userService";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const { logged } = useSelector((state: AnyAction) => state.auth);
  const router = useRouter();
  const logoutHandler = () => {
    userService.logout();
    // router.push("/");
		window.location.pathname = '/'

  };

  return (
    <Navbar collapseOnSelect bg="primary" variant="dark">
      <Container>
        <Link href="/" passHref>
				
          <Navbar.Brand><i className="bi bi-calendar3-week-fill"></i> Teacher-Assistant</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar>
          <Nav className="me-auto"></Nav>
          {!logged && (
            <Nav>
              <Link href="/login" passHref>
                <Nav.Link>Zaloguj się</Nav.Link>
              </Link>
            </Nav>
          )}
          {logged && (
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Menu" id="collasible-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/addstudent/part1">Dodaj ucznia</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/calendar">Kalendarz</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Wyloguj się
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          )}
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
