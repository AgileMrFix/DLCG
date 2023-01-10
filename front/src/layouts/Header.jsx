import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">DLCG</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                        <Nav.Link as={Link} to="/products/new">+ Add New product</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
