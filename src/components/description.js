import React from "react";
import { Link } from "react-router-dom";
import { Card,Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useLocation } from 'react-router-dom';



const Description = (props) => {
  
  
  const { state } = useLocation()

  console.log(state.movie);

  return (
  
      <Card className="text-center">
        <Card.Header>
          {" "}
          <h1>{state.movie.title}</h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {" "}
            <ReactPlayer style={{marginLeft:'28%'}} url={state.movie.trailer} />
          </Card.Title>
          <Card.Text>
            <div>
              <h3>Description</h3>
              <hr />
              <p>{state.movie.description}</p>
            </div>
          </Card.Text>
          <Link to="/">
          <Button variant="primary">Go back </Button>
                </Link>
        </Card.Body>
      </Card>
  );
};

export default Description;