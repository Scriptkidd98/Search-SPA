import React, {useState} from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import logo from './Green Medical Logo.png'


const SearchPage: React.FC = () => {
    const[name, setName] = useState<string>('');
    const[location, setLocation] = useState<string>('');

    const processSearch = (event: { preventDefault: () => void; }) => {
        console.log(name + " " + location);
        setName('');
        setLocation('');
        event.preventDefault();
    }
  return (
    <div className='search-main-body'>
        <Navbar bg="" expand="lg" className="navbar">
            <Container className='header-nav-container' fluid>
                <Navbar.Brand href="#" className="landing-page-logo"><img src={logo} alt="Cuisn Logo" className="logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-button"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto about-nav-link"><a href="#about" className="nav-links">About Us</a></Nav>
                    <Nav className="mr-auto"><a href="#about" className="nav-links">Our Services</a></Nav>
                    <Nav className="mr-auto"><a href="#faq" className="nav-links">FAQs</a></Nav>
                    <Nav className="mr-auto"><a href="#contact" className="nav-links">Contact Us</a></Nav>
                    <Nav className="ms-auto">
                        <Nav className="mr-auto"><a href="#next-step" className="nav-links login-link">Login</a></Nav>
                        <Nav className="mr-auto"><a href="#next-step" className="nav-links signup-link">Sign Up</a></Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div className="search-body-div">
            <div className='hero-div'>
                <h1 className='hero-header'><strong>Find the medical help you need</strong></h1>
            </div>

            <div className="form-div">
                <form className="form" onSubmit={processSearch}>
                    <Container fluid className="form-inner-container">
                        <Row>
                            <Col xs={12} sm={12} md={5} lg={5} className="doc-hosp-col">
                                <div className="doc-hosp-div">
                                    <div className="icon-col">
                                        <span><i className="fas fa-search icon"></i></span>
                                    </div>
                                    <div className="input-col">
                                        <input name='name' id='name' type='text' placeholder="Doctor or Clinic" className='search-input' onChange={(event) => setName(event.target.value)} required></input>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5} className="location-col">
                                <div className="location-div">
                                    <div className="icon-col">
                                        <span><i className="fas fa-map-marker-alt icon"></i></span>
                                    </div>
                                    <div className="input-col">
                                        <input name='location' id='location' type='text' placeholder="Bucharest, Romania" className='search-input' onChange={(event) => setLocation(event.target.value)} required></input>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={2} lg={2} className="button-col">
                                <button type='submit' name='submit' className='search-button'>Search</button>
                            </Col>
                        </Row>
                    </Container>
                </form>
            </div>
        </div>

        <div className="lower-body-div">
            <h4>Some other texts</h4>
            <Container fluid className='roles-container'>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='role-div active-role-div'>
                            <h6><strong>Doctor</strong></h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam deleniti, deserunt sint corrupti incidunt quos ullam labore voluptate, nulla exercitationem ut! Rem aliquam commodi dolore repudiandae? Voluptatem ullam nisi fugiat!</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='role-div'>
                            <h6><strong>Dentist</strong></h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam deleniti, deserunt sint corrupti incidunt quos ullam labore voluptate, nulla exercitationem ut! Rem aliquam commodi dolore repudiandae? Voluptatem ullam nisi fugiat!</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='role-div'>
                            <h6><strong>Ob/Gyn</strong></h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam deleniti, deserunt sint corrupti incidunt quos ullam labore voluptate, nulla exercitationem ut! Rem aliquam commodi dolore repudiandae? Voluptatem ullam nisi fugiat!</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={3}>
                        <div className='role-div'>
                            <h6><strong>Specialist</strong></h6>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam deleniti, deserunt sint corrupti incidunt quos ullam labore voluptate, nulla exercitationem ut! Rem aliquam commodi dolore repudiandae? Voluptatem ullam nisi fugiat!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='footer-div'>
        <p><span dangerouslySetInnerHTML={{"__html":"&copy;"}}></span> 2023 Medigroup.</p>
        </div>
    </div>
  )
}

export default SearchPage
