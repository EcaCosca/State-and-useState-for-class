import * as ReactBootStrap from "react-bootstrap"

function Navbar() {
    return (
      <div>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="#home">Eca </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="/home">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/about">About</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/project">Project</ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
    );
}

export default Navbar;