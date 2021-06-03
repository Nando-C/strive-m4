import { Component } from 'react'
import CommentsList from './CommentsList'
import { Modal, Button } from 'react-bootstrap'

class CommentArea extends Component {
    state = {  }
    
    render() { 
        // const [show, setShow] = useState(false);
  
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        return (  
            <>
            <CommentsList comments={this.props.comments}/>
            </>
            // <Modal show={show} onHide={handleClose}>
            //     <Modal.Header closeButton>
            //         <Modal.Title>
            //             {this.props.image}
            //         </Modal.Title>
            //     </Modal.Header>
            //     <Modal.Body>
            //         <CommentsList comments={this.props.comments}/>
            //     </Modal.Body>
            //     <Modal.Footer>
            //         <Button variant="secondary" onClick={handleClose}>
            //         Close
            //         </Button>
            //         <Button variant="primary" onClick={handleClose}>
            //         Save Changes
            //         </Button>
            //     </Modal.Footer>
            // </Modal>
        );
    }
}
 
export default CommentArea;