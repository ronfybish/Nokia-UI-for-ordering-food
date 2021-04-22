import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Hero = () => {
    return (
        <Jumbotron fluid bsPrefix='py-4' className='text-center text-white'>
            <Container>
                <h1 className='display-5'>Hope You're Hungry! 😋</h1>

                <p className='lead'>
                    This is a simple hero unit, a simple jumbotron-style component for
                    calling extra attention to featured content or information.
                </p>

                <hr className='my-2'></hr>

                <p>
                    It uses utility classNamees for typography and spacing to space
                    content out within the larger container.
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Hero;
