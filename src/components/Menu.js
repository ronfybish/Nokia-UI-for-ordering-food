import React, { useState } from 'react';
import { arrcaffeData } from '../arcaffeData';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { Card, Button, Media, Container, Row, Col } from 'react-bootstrap';

const Menu = () => {
    const [modalShow, setModalShow] = useState(false);
    const [dish, setdish] = useState(null);

    return (
        <>
            <Container>
                <ul className='list-unstyled'>
                    <Row>
                        <Col>
                            {arrcaffeData.map(dish => (
                                <Card border='primary' className='my-3 text-right'>
                                    <Card.Body>
                                        <Media as='li'>
                                            <img
                                                width={150}
                                                height={150}
                                                // className='mr-3'
                                                src={dish.image}
                                                alt='Generic placeholder'
                                                style={{
                                                    borderRight: '1px solid #007BFF',
                                                }}
                                            />
                                            <Media.Body>
                                                <h5>{dish.name}</h5>
                                                <p>{dish.description}</p>
                                                <Button
                                                    variant='primary'
                                                    onClick={() => {
                                                        setdish(dish);
                                                        setModalShow(true);
                                                    }}
                                                >
                                                    הזמנת מנה
                                                </Button>
                                            </Media.Body>
                                        </Media>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </ul>
            </Container>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                dish={dish}
            />
        </>
    );
};

export default Menu;
