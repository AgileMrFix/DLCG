import {Container, Nav, Navbar} from "react-bootstrap";

export const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DLCG</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}
