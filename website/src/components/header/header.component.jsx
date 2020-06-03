import React from 'react';
import { Navbar, Nav} from "react-bootstrap";

import './header.component.scss';
import ReactGA from "react-ga";

class Header extends React.Component {
  componentDidMount = () => {
    ReactGA.initialize('UA-123791717-1');
  }

  render() {
    return (
      <Navbar className='header' bg="dark" variant="dark" expand="lg">
        <Navbar.Brand className='header-brand' href="#home">Sentiment Analysis</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => {
                ReactGA.event({
                  category: "CLICK",
                  action: "Github"
                })
              }}
              href="https://github.com/i-ahsanujunda/sentiment-analysis-sagemaker-pytorch">
              Github
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                ReactGA.event({
                  category: "CLICK",
                  action: "About Me"
                })
              }}
              href="https://www.linkedin.com/in/izzuddinahsanujunda/">
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;