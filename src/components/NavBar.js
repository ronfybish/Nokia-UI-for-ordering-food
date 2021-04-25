import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logoNokia from '../images/nokia-logo-blue-1x.png';
const NavBar = () => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <img
                        alt=''
                        src={logoNokia}
                        className='d-inline-block align-top p-1'
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;
// style={{ background: '#124191' }}
