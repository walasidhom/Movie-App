import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Navbar, Form, FormControl } from "react-bootstrap";


const Filter = (props) => {

  const handleChange = (event) => props.NameSearch(event.target.value);
  const ratingChanged = (e) => {
    props.RatingSearch(e);
  };

  
  return (
    <Navbar className="Navex" expand="lg" sticky="top" style={{marginTop: "20px"}}>
      
      
      <Navbar.Collapse id="navbarScroll">
        <div
          style={{
            width: "700px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Place a Movie Title"
              className="mr-2"
              aria-label="Search"
              onChange={handleChange}
              style={{ width: "250px" }}
              value={props.title}
            />
          </Form>
          <div
            className="rating-by-stars"
            style={{
              marginLeft: "50px",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <span>
              <i
                style={{
                  fontWeight: "bold",
                  color: "silver",
                  fontSize: "1em",
                  fontStyle: "oblique",
                }}
              >
                Filter by Rating
              </i>
            </span>

            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={20}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              value={props.ratingSearch}
            />
          </div>

        </div>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default Filter