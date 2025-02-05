import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
function Header(){
    return(
        <div>
            <Navbar className="justify-content-between">
                <Navbar.Brand href="#home">
                    <img src="" alt="Logo"></img>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#mentor">
                        Mentorship
                    </Nav.Link>
                    <Button variant="outline-primary">Say Hello</Button>
                </Nav>
            </Navbar>
        </div>
    )
}
export default Header;