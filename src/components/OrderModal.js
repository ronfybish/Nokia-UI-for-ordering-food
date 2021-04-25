import { useState } from 'react';
import axios from 'axios';
import {
    Alert,
    Button,
    Col,
    Container,
    Form,
    Media,
    Modal,
    Spinner,
} from 'react-bootstrap';

const OrderModal = props => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [comment, setComment] = useState(null);
    const [orderStatus, setOrderStatus] = useState('idle');
    const [err, setErr] = useState(null);
    const onSubmit = async e => {
        e.preventDefault();
        setOrderStatus('loading');
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const body = {
            first_name: firstName,
            last_name: lastName,
            restaurant: 'Arcafe',
            menu_dish: props.dish.name,
            comment: comment,
        };
     
        try {
            const { data } = await axios.post(
                '/demo/NokiaS3JsonParsing',
                { ...body },
                config
            );
            setOrderStatus('success');
            console.log(data);
        } catch (error) {
            setOrderStatus('error');
            setErr(error);
            console.log(error);
        }
    };
    return (
        <Modal
            {...props}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>Nokia Dinner</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {orderStatus === 'loading' ? (
                    <Spinner animation='border' />
                ) : orderStatus === 'success' ? (
                    <Alert variant='success'>
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Aww yeah, you successfully read this important alert message.
                            This example text is going to run a bit longer so that you can
                            see how spacing within an alert works with this kind of
                            content.
                        </p>
                        <hr />
                        <p className='mb-0'>
                            Whenever you need to, be sure to use margin utilities to keep
                            things nice and tidy.
                        </p>
                    </Alert>
                ) : (
                    <Form className='my-3' onSubmit={onSubmit}>
                        <Container>
                            {orderStatus === 'error' && (
                                <Alert variant='danger'>
                                    <Alert.Heading>Oh snap! </Alert.Heading>
                                    <p>
                                        Change this and that and try again. Duis mollis,
                                        est non commodo luctus, nisi erat porttitor
                                        ligula, eget lacinia odio sem nec elit. Cras
                                        mattis consectetur purus sit amet fermentum.
                                    </p>
                                </Alert>
                            )}
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        onChange={e => setFirstName(e.target.value)}
                                        placeholder='Ron'
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        onChange={e => setLastName(e.target.value)}
                                        placeholder='Fybish'
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Comments</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    placeholder='no cheese, no egges'
                                    onChange={e => setComment(e.target.value)}
                                    rows={3}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Media className='text-right pt-3' as='li'>
                                    <img
                                        width={150}
                                        height={150}
                                        src={props.dish?.image}
                                    />
                                    <Media.Body>
                                        <h5>{props.dish?.name}</h5>
                                        <p>{props.dish?.description}</p>
                                    </Media.Body>
                                </Media>
                            </Form.Group>

                            <Button variant='primary' block type='submit'>
                                שלח הזמנה
                            </Button>
                        </Container>
                    </Form>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default OrderModal;
