
import { Modal, Button } from 'react-bootstrap'

const DeleteModal = (props) => {

    return (
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete Post</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Are you sure to delete this post?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={props.onHide} variant="secondary">Close</Button>
                    <Button variant="danger" onClick={props.onDeletePost}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal;