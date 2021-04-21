import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Hero = () => {
    return (
        <Jumbotron fluid bsPrefix='bg-primary p-5'>
            <Container>
                <h1>Nokia Dinner</h1>
                <p>
                    This is a modified jumbotron that occupies the entire horizontal space
                    of its parent.
                </p>
            </Container>
        </Jumbotron>
    );
};

export default Hero;
