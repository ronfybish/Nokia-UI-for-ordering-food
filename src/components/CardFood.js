import React, { useState } from 'react';
import OrderModal from './OrderModal';
import { Button, Card, Media } from 'react-bootstrap';

const CardFood = ({ dishData }) => {
    const [modalShow, setModalShow] = useState(false);
    const [dish, setdish] = useState(null);
    return (
        <>
            <Card border='primary' className='my-3 text-right'>
                <Card.Body>
                    <Media as='li'>
                        <img
                            width={150}
                            height={150}
                            src={dishData.image}
                            alt='Generic placeholder'
                            style={{
                                borderRight: '1px solid #007BFF',
                            }}
                        />
                        <Media.Body>
                            <h5>{dishData.name}</h5>
                            <p>{dishData.description}</p>
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
            <OrderModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                dish={dishData}
            />
        </>
    );
};

export default CardFood;
