import "./header.css";
import React from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            {" "}
            <Link to="/">
              <h5>Dantech</h5>
            </Link>
          </div>
          <div className="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts">Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right d-flex align-items-center gap-4 ">
              <button className="btn">Let's Talk</button>
              <span className="humbager">
                <FaBars size={20} style={{ color: "#fff" }} />
              </span>
            </div>

        </div>
      </Container>
    </header>
  );
};

export default Header;


