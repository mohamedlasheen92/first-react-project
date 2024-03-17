import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";



class Header extends Component {

  constructor() {
    super();
    this.state = {
      counter: 1

    }
  }
  // componentDidMount() {
  //   console.log('From componentDidMount');
  // }
  componentDidUpdate() {
    console.log('From componentDidUpdate');
  }

  handleIncreament = () => {
    this.setState({ counter: ++this.state.counter })
    console.log(this.state.counter);
  }

  render() {
    // console.log('From Render');
    return (

      <>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>





        <h2 className="nav">Navbar Class Component</h2>

        <h1>{this.state.counter}</h1>
        <button className="btn btn-primary" onClick={() => this.handleIncreament()}>Increase Counter</button>
      </>

    );
  }
}

export default Header;