import { useEffect, useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function Cart_pop({ open, title, children, actions, closemodel }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(open);
    }, [open]);

    return (
        <Modal show={show} onHide={closemodel} centered>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
                <CloseButton variant='black' onClick={closemodel} />
            </Modal.Header>

            <Modal.Body>
                <p>{children}</p>
            </Modal.Body>

            {actions && (
                <Modal.Footer>
                    {actions}
                </Modal.Footer>
            )}
        </Modal>
    );
}

export default Cart_pop;
