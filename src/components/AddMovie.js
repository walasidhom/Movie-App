import React, {useState} from 'react';
import { InputGroup, FormControl, Button, Modal, Form } from 'react-bootstrap';


function AddMovie({movieList, setMovieList}) {

    const [show, setShow] = useState(false);
    const [newTitle,setNewTitle] = useState('');
    const [newRate,setNewRate]= useState('');
    const [newPoster, setNewPoster] = useState('');
    const [newDescription, setNewDescription] = useState('');
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const NewMovie = () => {
        let newMovie = {
        id : Math.random(),
        title : newTitle,
        posterURL: newPoster,
        rating: newRate,
        description: newDescription
        };

        setMovieList([...movieList,newMovie])
        handleClose()
   

    }

  return (
    <>
      <div className="movie-card">
              <div className="movie-card card">
                  <Button onClick={handleShow} className='button-add'>
                    <img className="icon-img"
                      src='https://www.freeiconspng.com/thumbs/plus-icon/plus-icon-black-2.png'
                        alt="" />
                  </Button>
            </div>
        </div>
      <Modal
        show={show}
        onHide={handleClose}
       >
        <Modal.Header>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text 
            id="inputGroup-sizing-default"
            
            >Enter Movie title</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setNewTitle(e.target.value)}
                 
              />
            </InputGroup>
             <br />

             <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Enter Movie Rating</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setNewRate(e.target.value)}

                 
              />
            </InputGroup>
             <br />

             <InputGroup className="mb-3">
             <InputGroup.Text id="inputGroup-sizing-default">Enter Movie PosterURL</InputGroup.Text>
              <FormControl
                 aria-label="Default"
                 aria-describedby="inputGroup-sizing-default"
                 onChange ={(e) => setNewPoster(e.target.value)}
                 
              />
            </InputGroup>
             <br />

             


             <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Enter Movie Description</Form.Label>
               <Form.Control as="textarea" rows={3} onChange ={(e) => setNewDescription(e.target.value)} />
             </Form.Group>


             
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={NewMovie}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


   

export default AddMovie;