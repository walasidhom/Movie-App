import movies from './movies'
import MovieList from './components/MovieList';
import { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import ReactStars from "react-rating-stars-component";
import AddMovie from './components/AddMovie';

function App() {
  const [movieList, setMovieList] = useState(movies);
  const [ratingSearch, setRatingSearch] = useState(0);
  const [title, setTitle] = useState('');

  

  return (
    <div>
      <Header title='React Movie Cards' />
      
      <Filter movieList={movieList}
        title={title}
        setMovies={setMovieList}
        NameSearch={setTitle}
        RatingSearch={setRatingSearch} />
      <div className="mt-5">
        <div className="container-fluid" style={{marginLeft: '-15px'}}>
          <div className="d-flex flex-row">                    
            <div className="col-sm-12">
              <MovieList movieList={movieList} setMovieList={setMovieList } ratingSearch={ratingSearch} title={title} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    
  );
}

export default App;
