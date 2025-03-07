import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import './addMovie.css';

// The component AddMovie is a form that allows the user to add a new movie to the list of movies.
const AddMovie = ({movieAdd}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [rate, setRate] = useState('');
const [posterUrl, setPosterUrl] = useState('');

// The handleAdd function is used to add a new movie to the list of movies. It generates a random id for the new movie and creates a new movie object with the title, description, rate, and poster URL entered by the user. The movieAdd function is then called with the new movie object as an argument to add the movie to the list of movies. The form fields are then reset to empty strings and the modal is closed.
const handleAdd = () => {
    const id = Math.random();
    const newMovie = {id, title, description, rate, posterUrl};
    movieAdd(newMovie);
    handleClose();
    setTitle('');
    setDescription('');
    setRate('');
    setPosterUrl('');
};


  return (
    <div className='add'>
      <Button className='add' variant="primary" onClick={handleShow} >
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: 'beige'}}>
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
                <Form.Control type="text" placeholder="Enter poster URL" value = {posterUrl} onChange = {(e) => setPosterUrl(e.target.value)}/>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{color: 'black',borderRadius: '10px', fontWeight: 400}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd} style={{backgroundColor: 'rgb(165, 146, 121)', color: 'black', border: 'none', borderRadius: '10px', fontWeight: 400}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie
