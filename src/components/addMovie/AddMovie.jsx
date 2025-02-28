import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

const AddMovie = ({movieAdd}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [rate, setRate] = useState('');
const [poster, setPoster] = useState('');

const handleAdd = () => {
    const id = Math.random();
    const newMovie = {id, title, description, rate, poster};
    movieAdd(newMovie);
    handleClose();
    setTitle('');
    setDescription('');
    setRate('');
    setPoster('');
};


  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter movie title" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" value = {description} onChange = {(e) => setDescription(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Rate</Form.Label>
                <Form.Control type="number" placeholder="From 1 to 5" value = {rate} onChange = {(e) => setRate(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Poster</Form.Label>
                <Form.Control type="text" placeholder="Enter poster URL" value = {poster} onChange = {(e) => setPoster(e.target.value)}/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie
