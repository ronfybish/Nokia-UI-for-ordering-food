import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logoNokia from '../images/nokia-logo-blue-1x.png';
const NavBar = () => {
    return (
        <div style={{ background: '#8E8E81' }}>
            <Navbar variant='dark'>
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
        </div>
    );
};

export default NavBar;
// style={{ background: '#124191' }}
