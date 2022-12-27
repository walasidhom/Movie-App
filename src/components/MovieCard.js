import React from 'react';
import StarRating from './StarRating';
import { Link } from 'react-router-dom';



const MovieCard = (props) => {    
    return (
        <>
            <Link to={"/description"} state={{ movie: props.movie }} style={{ textDecoration: 'none' , color: 'inherit'}}>
                
                <div className="movie-card">
                    <div className="movie-card card">
                        <img className="card-img-top" src={props.movie.posterURL} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{props.movie.title}</h4>
                            <p className="text-justify" style={{fontSize: '14px'}}>{props.movie.description}</p>
                        </div>
                        <div className="card-footer">
                            <div className="clearfix">
                                <div className="float-left mt-1">
                                    <StarRating rating={props.movie.rating} />
                                </div>
                                <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.movie.rating}</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </Link>
            
            
        </>
        
    
  )
}

export default MovieCard