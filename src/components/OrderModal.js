import { Button, Col, Container, Form, Media, Modal } from 'react-bootstrap';

const OrderModal = props => {
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
                <Form className='my-3'>
                    <Container>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder='Ron' />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control as='input' placeholder='Fybish' />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control
                                as='textarea'
                                placeholder='no cheese, no egges'
                                rows={3}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Media className='text-right pt-3' as='li'>
                                <img width={150} height={150} src={props.dish?.image} />
                                <Media.Body>
                                    <h5>{props.dish?.name}</h5>
                                    <p>{props.dish?.description}</p>
                                </Media.Body>
                            </Media>
                        </Form.Group>
                        <Button variant='primary' block>
                            שלח הזמנה
                        </Button>
                    </Container>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default OrderModal;
