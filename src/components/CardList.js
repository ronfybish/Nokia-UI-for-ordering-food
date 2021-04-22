import React from 'react';
import CardFood from './CardFood';
import { menuData } from '../utils/menuData';
import { Container, Row, Col } from 'react-bootstrap';

const CardList = () => {
    return (
        <Container>
            <ul className='list-unstyled'>
                <Row>
                    <Col>
                        {menuData.map(dish => (
                            <CardFood dishData={dish} />
                        ))}
                    </Col>
                </Row>
            </ul>
        </Container>
    );
};

export default CardList;
