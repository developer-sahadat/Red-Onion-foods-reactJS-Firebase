import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Assets/images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <nav className="p-3 nav-container">
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" style={{ width: "130px" }} />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Nav.Link>
              {user ? (
                ""
              ) : (
                <Nav.Link className="fw-bolder" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
              {user ? (
                <button
                  style={{
                    color: "white",
                    padding: "7px 30px",
                    border: "none",
                  }}
                  className="signUpBtn"
                  onClick={() => signOut(auth)}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link
                  style={{ color: "white", padding: "7px 30px" }}
                  className="signUpBtn"
                  as={Link}
                  to="/signUp"
                >
                  Sign Up
                </Nav.Link>
              )}
              {user ? (
                <Nav.Link
                  style={{ color: "white", padding: "7px 30px" }}
                  className="signUpBtn"
                  as={Link}
                  to="/profile"
                >
                  Profile
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
