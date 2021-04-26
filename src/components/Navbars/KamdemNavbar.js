
import React from "react";
import{ Navbar, Nav, NavDropdown}  from "react-bootstrap";

class KamdemNavbar extends React.Component { 
  render() { 
    return (
      <div class="bg-secondary">
        <div class="container">
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="https://patelot.de">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link target="_blank" href="https://bitbucket.org/patelotblack/">Projekte</Nav.Link>
                <Nav.Link target="_blank" href="https://www.lequipe.fr/">Hobbies</Nav.Link>
                <NavDropdown title="Partners" id="collasible-nav-dropdown">
                  <NavDropdown.Item target="_blank" href="https://www.kogaing.com">Kogaing Sarl</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item target="_blank" href="https://yanson.de/">Yan'son IT Consulting</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item target="_blank" href="http://www.cclean-services.com">CClean Services</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item target="_blank" href="http://www.pouahom-bw.de">Les Bahamas du BW</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="mailto:patrick-kamdem@patelot.de">Kontakt</Nav.Link>
                <Nav.Link eventKey={2} target="_blank" href="https://www.ionos.de/">
                  Mehr
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default KamdemNavbar;
