import React from 'react'
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';

const MovieList = (props) => {
    //filter movieList by title and rating
    const search = () => {
    console.log(props.movieList);
       return props.movieList.filter(
         (film) => {
           console.log(film);
              return (
                props.ratingSearch === 0 ?
                film.title.toLowerCase().includes(props.title.toLowerCase()):
                Number(film.rating) === props.ratingSearch && film.title.toLowerCase().includes(props.title.toLowerCase())

                     )

                      }
                        )
}

    
    return (
        <div className="card-deck">
            
            {
                search().map(movie => {
                    return (
                        <div style={{ padding: '15px' }}>
                            <MovieCard key={movie.id} movie={movie} />
                        </div>)
                })
            }
            <div style={{ padding: '15px' }}>
                <AddMovie movieList={props.movieList} setMovieList={props.setMovieList} />
            </div>
        </div>
    )
    
    
    
  

}
export default MovieList